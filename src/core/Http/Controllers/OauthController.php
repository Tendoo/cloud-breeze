<?php
namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Exception;

use Tendoo\Core\Facades\Hook;

use Tendoo\Core\Services\Page;
use Tendoo\Core\Services\Oauth;
use Tendoo\Core\Services\UserOptions;
use Tendoo\Core\Services\AuthService;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Services\Options;

use Tendoo\Core\Models\Oauth as OauthModel;
use Tendoo\Core\Models\Application;
use Tendoo\Core\Models\User;

use Tendoo\Core\Exceptions\OauthDeniedException;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Tendoo\Core\Exceptions\CoreException;
use Tendoo\Core\Exceptions\WrongCredentialException;
use Tendoo\Core\Exceptions\WrongOauthScopeException;

use Tendoo\Core\Mail\PasswordReset;
use Tendoo\Core\Mail\PasswordUpdated;
use Tendoo\Core\Mail\UserRegistrationMail;

use Tendoo\Core\Http\Requests\LoginRequest;
use Tendoo\Core\Http\Requests\PostRegisterRequest;
use Tendoo\Core\Http\Requests\RecoveryRequest;
use Tendoo\Core\Http\Requests\PasswordChangeRequest;
use Tendoo\Core\Http\Requests\PostOauthRequest;
use Tendoo\Core\Facades\Curl;

class OauthController extends BaseController
{
    private $oauth;
    protected $userOptions;
    protected $authService;
    public function __construct()
    {
        parent::__construct();

        $this->middleware( function( $request, $next ) {
            
            $this->authService      =   app()->make( AuthService::class );
            $this->usersService     =   app()->make( Users::class );

            return $next( $request );
        });
        
        $this->middleware( 'tendoo.guest' )->except([
            'postLogout'
        ]);

        $this->oauth        =   new Oauth;
    }

    /**
     * post Oauth Action
     * @deprecated probably
     */
    public function post( Request $request )
    {
        /**
         * Only two actions are allowed
         */
        if ( 
            ! in_array( $request->input( 'action' ), [ 'grant', 'deny' ] ) || 
            ! isUrl( $request->input( 'callback_url' ) )
        ) {
            return redirect()->route( 'errors', [
                'code'  =>  'wrong-oauth-request'
            ]);
        }

        return $this->__oauthLogin( $request );
    }

    /**
     * authentication for registered 
     * or allowed applications
     * @param Request
     * @return AsyncResponse
     */
    public function postOauth( PostOauthRequest $request )
    {
        /**
         * Authenticating the application
         */
        $application    =   Application::where([
            [ 'client_key',     '=', $request->input( 'client_key' )],
            // [ 'client_secret',  '=', $request->input( 'client_secret' )] // should only be used on header
        ])->first();

        if( ! $application instanceof Application ) {
            throw new Exception( 'Wrong application credentials are provided' );
        }

        $attempt    =   Auth::attempt( $request->only( 'username', 'password' ) );

        if ( ! $attempt ) {
            throw new WrongCredentialException;
        }

        $this->__checkOnCredentialsSuccessfull();

        $user                   =   User::find( Auth::user()->id );
        $user->role             =   $user->role;

        $action                 =   $request->input( 'action' );
        $callback_url           =   $request->input( 'callback_url' );
        $scopes                 =   $request->input( 'scopes' );
        $access_token           =   Str::random(40);
        $refresh_token          =   Str::random(30);
        $url                    =   parse_url( $request->input( 'callback_url' ) );

        /**
         * A user can not have the same application connected to his account many time. 
         * If a prior connexion has been made, then this latest will be updated with the new
         * credentials.
         */
        $oauth =   OauthModel::where([
            'app_id'    =>  $application->id,
            'domain'    =>  @$url[ 'host' ]
        ])->first();

        if ( $oauth instanceof OauthModel ) {
            $oauth->access_token    =   $access_token;
            $oauth->app_name        =   $application->name;
            $oauth->app_id          =   $application->id;
            $oauth->scopes          =   json_encode( $scopes );
            $oauth->refresh_token   =   $refresh_token;
            $oauth->domain          =   @$url[ 'host' ] ? $url[ 'host' ] : __( 'N/A' );
            $oauth->user_id         =   Auth::id();
            $oauth->expires_at      =   Carbon::now()->addDays(7)->toDateTimeString();
            $oauth->save();
        } else {
            $oauth                  =   new OauthModel;
            $oauth->access_token    =   $access_token;
            $oauth->app_name        =   $application->name;
            $oauth->app_id          =   $application->id;
            $oauth->scopes          =   json_encode( $scopes );
            $oauth->refresh_token   =   $refresh_token;
            $oauth->domain          =   @$url[ 'host' ] ? $url[ 'host' ] : __( 'N/A' );
            $oauth->user_id         =   Auth::id();
            $oauth->expires_at      =   Carbon::now()->addDays(7)->toDateTimeString();
            $oauth->save();
        }

        /**
         * run an action when the Oauth is
         * succesful
         * @hook
         */
        Hook::action( 'oauth.successful', $oauth );

        /**
         * @todo adding expiration to the keys
         */
        $hasQueryParam = parse_url( $callback_url, PHP_URL_QUERY );
        
        // Returns a string if the URL has parameters or NULL if not
        if ( $hasQueryParam ) {
            $callback_url .= '&access_token=' . $access_token;
        } else {
            $callback_url .= '?access_token=' . $access_token;
        }

        return response()->json([
            'status'            =>  'success',
            'message'           =>  __( 'The user has been successfully connected' ),
            'user'              =>  $user,
            'access_token'      =>  $access_token,
            'redirectTo'        =>  Hook::filter( 'after.login.callback', false )
        ])->cookie( cookie( 'access_token', $access_token ) );
    }

    /**
     * proceed a server side verification
     * of a verification code submitted through
     * reCaptcha
     * @return void
     */
    private function __CheckGoogleRecaptcha()
    {
        if ( $this->options->get( 'enable_recaptcha' ) ) {
            $result     =   Curl::to( 'https://www.google.com/recaptcha/api/siteverify' )
                ->withData([ 
                    'secret'    =>  $this->options->get( 'recaptcha_site_secret' ),
                    'response'  =>  request()->input( 'recaptcha' ),
                    'ip'        =>  request()->ip()
                ])
                ->withContentType( 'application/x-www-form-urlencoded' )
                ->asJsonResponse()
                ->post();

            if ( $result->success === false ) {
                throw new CoreException([
                    'status'    =>  'failed',
                    'message'   =>  __( 'Unable to proceed, the reCaptcha validation has failed.' )
                ]);
            }
        }
    }

    public function postLogin( Request $request )
    {
        /**
         * checking reCaptcha and throwing or
         * not an error accordingly
         */
        $this->__CheckGoogleRecaptcha();

        return $this->authService->login( 
            $request->only( 'username', 'password' ),
            $request->input( 'keep_me_in' )
        );
    }

    /**
     * make a private verification
     * of the authenticated user
     * @param 
     */
    private function __checkOnCredentialsSuccessfull()
    {
        /**
         * if the user is not yet active, 
         * let's abort the authentication
         */
        if ( ! Auth::user()->active ) {
            Auth::logout();
            throw new AccessDeniedException( __( 'Your account has\'nt yet been activated. Consider checking your email or reactivate your account.' ) );
        }

        /**
         * If users is not admin and if the login is disabled
         * then he's redirected to the login with an error
         */
        if ( $this->options->get( 'app_restricted_login', false ) &&  
            ! in_array( 
                Auth::user()->role->namespace,
                Hook::filter( 'login.roles.allowed', [ 'admin' ])
            )
        ) {
            Auth::logout();
            throw new AccessDeniedException( __( 'Your role is not allowed to login.' ) );
        }
    }

    /**
     * disconnect the user 
     * by deleting a reference of the Auth session
     * @param void
     * @return AsyncResponse
     */
    public function postLogout( Request $request )
    {
        $auth   =   app()->make( AuthService::class );
        $auth->forget( $request->input( 'token' ) );
        
        return [
            'status'    =>  'success',
            'message'   =>  __( 'The session has been deleted.' )
        ];
    }

    /**
     * was called by self::postLogin
     * @deprecated might be
     */
    private function __oauthLogin( Request $request )
    {
        /**
         * Authenticating the application
         */
        $application    =   Application::where([
            [ 'client_key',     '=', $request->input( 'client_key' )],
            [ 'client_secret',  '=', $request->input( 'client_secret' )]
        ])->first();

        if( $application === null ) {
            throw new Exception( 'Wrong application credentials are provided' );
        }

        $action         =   $request->input( 'action' );
        $callback_url   =   $request->input( 'callback_url' );
        $scopes         =   $request->input( 'scopes' );

        /**
         * if the use refuse the connexion
         */
        if ( $action === 'deny' ) {
            if ( $request->ajax() ) {
                throw new OauthDeniedException;
            }
            return redirect( $callback_url . '?status=denied' );
        } else {

            $access_token           =   Str::random(40);
            $refresh_token          =   Str::random(30);
            $url                    =   parse_url( $request->input( 'callback_url' ) );

            /**
             * A user can not have the same application connected to his account many time. 
             * If a prior connexion has been made, then this latest will be updated with the new
             * credentials.
             */
            $oauth =   OauthModel::where([
                'app_id'    =>  $application->id,
                'domain'    =>  @$url[ 'host' ]
            ])->first();

            if ( $oauth instanceof OauthModel ) {
                $oauth->access_token    =   $access_token;
                $oauth->app_name        =   $application->name;
                $oauth->app_id          =   $application->id;
                $oauth->scopes          =   json_encode( $scopes );
                $oauth->refresh_token   =   $refresh_token;
                $oauth->domain          =   @$url[ 'host' ] ? $url[ 'host' ] : __( 'N/A' );
                $oauth->user_id         =   Auth::id();
                $oauth->expires_at      =   Carbon::now()->addDays(7)->toDateTimeString();
                $oauth->save();
            } else {
                $oauth                  =   new OauthModel;
                $oauth->access_token    =   $access_token;
                $oauth->app_name        =   $application->name;
                $oauth->app_id          =   $application->id;
                $oauth->scopes          =   json_encode( $scopes );
                $oauth->refresh_token   =   $refresh_token;
                $oauth->domain          =   @$url[ 'host' ] ? $url[ 'host' ] : __( 'N/A' );
                $oauth->user_id         =   Auth::id();
                $oauth->expires_at      =   Carbon::now()->addDays(7)->toDateTimeString();
                $oauth->save();
            }

            /**
             * run an action when the Oauth is
             * succesful
             * @hook
             */
            Hook::action( 'oauth.successful', $oauth );

            /**
             * @todo adding expiration to the keys
             */
            $hasQueryParam = parse_url( $callback_url, PHP_URL_QUERY);
            
            // Returns a string if the URL has parameters or NULL if not
            if ( $hasQueryParam ) {
                $callback_url .= '&access_token=' . $access_token;
            } else {
                $callback_url .= '?access_token=' . $access_token;
            }

            return $request->ajax() ? [
                'access_token'  =>  $access_token,
                'status'        =>  'success',
                'message'       =>  __( 'You were successfully connected' ),
                'user'          =>  Auth::user()
            ] : redirect( $callback_url );
        }
    }

    /**
     * Post Registration
     * @return json
     */
    public function postRegistration( PostRegisterRequest $request )
    {
        if ( $this->options->get( 'allow_registration' ) === null ) {
            throw new CoreException([
                'status'    =>  'failed',
                'message'   =>  __( 'Unable to proceed, the registration are closed on this website' )
            ]);
        }

        /**
         * let's check if the reCaptcha is enabled
         * and if the token provide is valid
         */
        $options    =   app()->make( Options::class );

        if ( $options->get( 'enable_recaptcha' ) ) {
            $result     =   Curl::to( 'https://www.google.com/recaptcha/api/siteverify' )
                ->withData([ 
                    'secret'    =>  $options->get( 'recaptcha_site_secret' ),
                    'response'  =>  $request->input( 'recaptcha' ),
                    'ip'        =>  $request->ip()
                ])
                ->withContentType( 'application/x-www-form-urlencoded' )
                ->asJsonResponse()
                ->post();

            if ( $result->success === false ) {
                return response()->json([
                    'status'    =>  'failed',
                    'message'   =>  __( 'Unable to proceed, the reCaptcha validation has failed.' )
                ], 401 );
            }
        }

        return $this->authService->register( $request );
    }

    /**
     * Lazy Authentication. this help to extend authentication
     * to application outside of PWA
     * @return void
     */
    public function usingToken()
    {
        $token      =   request()->get( 'key' );
        $forward    =   request()->get( 'forward' );

        if ( ! empty( $token ) && ! empty( $forward ) ) {
            $Auth   =   Cache::get( 'Auth-Token::' . $token );
            if ( isset( $Auth[ 'user_id' ] ) ) {
                
                $user   =   User::find( $Auth[ 'user_id' ] );

                if ( $user instanceof User ) {
                    Auth::loginUsingId( $Auth[ 'user_id' ] );
                    return redirect( urldecode( $forward ) );
                }
                throw new AccessDeniedException( __( 'Unable to authenticate the user using the provided tokens.' ) );
            }
            throw new Exception( __( 'Unable to authenticate the request' ) );
        }
        throw new Exception( __( 'Invalid request send to the server' ) );
    }

    public function authToken( Request $request )
    {
        return app()->make( AuthService::class )
            ->authToken( $request->input( 'token' ) );
    }

    /**
     * Proceed to a password recovery
     * @param Request
     * @return void
     */
    public function passwordRecovery( RecoveryRequest $request )
    {
        return $this->authService->lostPassword( $request->all() );
    }

    /**
     * post recovery code
     * @param Request
     * @return void
     */
    public function postNewPassword( $id, PasswordChangeRequest $request )
    {
        return $this->authService->saveNewPassword( $id, $request->input( 'authorization' ), $request->all() );
    }

    /**
     * subtmit a user activation
     * @param Request
     * @return Response
     */
    public function postActivation( Request $request )
    {
        if ( $request->input( 'code' ) !== null && $request->input( 'user_id' ) !== null ) {
            return $this->usersService->activateAccount( 
                $request->input( 'code' ),
                $request->input( 'user_id' )
            );
        }

        abord(400); // the request is not well formed
    }

    /**
     * send activation link
     * to an unactivated account
     * @param Request
     * @return Response
     */
    public function requestActivation( Request $request )
    {
        $this->__CheckGoogleRecaptcha();
        
        if ( $request->input( 'email' ) !== null ) {
            $user   =   User::where( 'email', $request->input( 'email' ) )->first();

            if ( ! $user instanceof User || $user->active ) {
                throw new \Exception( __( 'Unable to proceed with the activation.' ) );
            }

            $this->userService->sendActivationEmail( $user );

            return [
                'status'    =>  'success',
                'message'   =>  __( 'The activation has been send to your address.' )
            ];
        }

        throw new \Exception( __( 'Unable to proceed with the activation.' ) );
    }
}