<?php
namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;
use Exception;
use Tendoo\Core\Services\Page;
use Tendoo\Core\Services\Oauth;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\UserOptions;
use Tendoo\Core\Services\AuthService;
use Tendoo\Core\Models\Oauth as OauthModel;
use Tendoo\Core\Models\Application;
use Tendoo\Core\Models\User;
use Tendoo\Core\Exceptions\OauthDeniedException;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Tendoo\Core\Exceptions\CoreException;
use Tendoo\Core\Exceptions\WrongCredentialException;
use Tendoo\Core\Exceptions\WrongOauthScopeException;
use Tendoo\Core\Http\Requests\PostRegisterRequest;

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
            return $next( $request );
        });

        $this->oauth        =   new Oauth;
    }

    /**
     * index
     */
    public function index()
    {
        $request    =   app()->make( Request::class );

        /**
         * @hook:before.loading.api
         * trigger an action while loading the API.
         */
        Hook::action( 'load.oauth', $request );

        /**
         * Having Scope is required
         */
        if ( ! $scope = $request->query( 'scopes' ) ) {
            throw new WrongOauthScopeException;
        }
        
        if ( 
            empty( $request->query( 'callback_url' ) ) ||
            ! isUrl( $request->input( 'callback_url' ) )
        ) {
            throw new Exception( __( 'Wrong callback provided for the Oauth resource.' ) );
        }

        /**
         * Authenticating the application
         */
        $application    =   Application::where([
            [ 'client_key',     '=', $request->query( 'client_key' )],
            [ 'client_secret',  '=', $request->query( 'client_secret' )]
        ])->first();

        if( $application === null ) {
            throw new Exception( 'Wrong application credentials are provided' );
        }

        /**
         * get the required parameters from the URL
         */
        $callback_url   = $request->query( 'callback_url' );

        /**
         * @hook:api.scope
         * return the list of scope available
         */
        $scopes     =   Hook::filter( 'api.scopes', $this->oauth->getScopes() );

        /**
         * Explode scopes
         */
        $namespaces  =  explode( ',', $scope );

        foreach( $namespaces as $namespace ) {
            if ( @$scopes[ $namespace ] == null ) {
                throw new WrongOauthScopeException;
            }
        }

        Page::setTitle( 'Authentication Page' );

        return view( 'tendoo::components.frontend.auth.oauth', compact( 
            'scopes', 
            'namespaces', 
            'callback_url', 
            'application' 
        ) );
    }

    /**
     * post Oauth Action
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

    public function postLogin( Request $request )
    {
        if ( Auth::attempt( $request->only( 'username', 'password' ) ) ) {
            $user           =   User::find( Auth::user()->id );
            $user->role     =   $user->role;
            return [
                'status'    =>  'success',
                'message'   =>  __( 'The user has been successfully connected' ),
                'user'      =>  $user,
                'token'     =>  $this->authService->generateToken( $user )
            ];
        }

        throw new WrongCredentialException;
    }

    /**
     * was called by self::postLogin
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

            $access_token           =   str_random(40);
            $refresh_token          =   str_random(30);
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

        $this->authService->register( $request );

        return response()->json([
            'status'    =>  'success',
            'message'   =>  __( 'The registration was successful' )
        ]);
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
}