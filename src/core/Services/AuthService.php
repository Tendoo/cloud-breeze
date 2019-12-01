<?php
namespace Tendoo\Core\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Oauth;
use Tendoo\Core\Models\Application;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Services\DateService;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Mail\PasswordReset;
use Tendoo\Core\Mail\PasswordUpdated;
use Tendoo\Core\Mail\UserRegistrationMail;
use Tendoo\Core\Exceptions\SessionExpiredException;
use Tendoo\Core\Exceptions\AccessDeniedException;

class AuthService 
{
    public function registerUser( $fields )
    {
        $userService    =   app()->make( Users::class );
        $options        =   app()->make( Options::class );

        /**
         * Trigger Action before registering the users
         * @filter:before.register
         */
        $redirect           =   Hook::filter( 'before.register.user', false, $fields, $options );

        /**
         * simple way to validate 
         * user having the same username
         */
        $user   =   User::where( 'email', $fields[ 'email' ] )
            ->orWhere( 'username', strtolower( $fields[ 'username' ] ) )
            ->first();
            
        if ( $user instanceof User ) {
            if( $user->email === $fields[ 'email' ] ) {
                throw new \Exception( __( 'This email is already in use.' ) );
            } 
            throw new \Exception( __( 'This username is already in use.' ) );
        }

        /**
         * A hook can control the user registration
         */
        if ( $redirect instanceof RedirectResponse ) {
            return $redirect;
        }

        $shouldActivate     =   $options->get( 'validate_users', false ) ? true : false;

        /**
         * Create user instance
         */
        $user               =   new User;
        $user->username     =   $fields[ 'username' ];
        $user->password     =   bcrypt( $fields[ 'password' ] );
        $user->email        =   $fields[ 'email' ];
        $user->role_id      =   $options->get( 'register_as', 1 ); // default user
        $user->active       =   ! $shouldActivate;
        $user->save();

        /**
         * Save user options
         * before registration
         */
        $option             =   new Options( $user->id );
        $option->set( 'theme_class', 'red-theme' );

        /**
         * Trigger Hook for the user
         * @hook:register.user
         */
        Hook::action( 'register.user', $user, $option );

        if ( ( bool ) $shouldActivate ) {
            $userService->sendActivationEmail( $user );
        }

        /**
         * let's notify all admin with admin role a user has been registered
         * @todo adding a filter for role selected to receive an email
         */
        if ( ( bool ) $options->get( 'registration_notification' ) ) {
            foreach( Role::where( 'namespace', 'admin' )->first()->user as $admin ) {
                Mail::to( $admin->email )
                    ->queue( new UserRegistrationMail([
                        'link'  =>  url( '/tendoo/dashboard/crud/tendoo-users/edit/' . $user->id ),
                        'user'  =>  $user
                    ]));
            }
        }

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The user has been succesfully registered' ),
            'data'      =>  compact( 'user' )
        ];
    }

    public function register( Request $request )
    {
        $userService    =   app()->make( Users::class );
        $options        =   app()->make( Options::class );

        /**
         * Trigger Action before registering the users
         * @filter:before.register
         */
        $redirect           =   Hook::filter( 'before.register', false, $request, $options );

        /**
         * simple way to validate 
         * user having the same username
         */
        $user   =   User::where( 'email', $request->input( 'email' ) )
            ->orWhere( 'username', strtolower( $request->input( 'username' ) ) )
            ->first();
            
        if ( $user instanceof User ) {
            if( $user->email === $request->input( 'email' ) ) {
                throw new \Exception( __( 'This email is already in use.' ) );
            } 
            throw new \Exception( __( 'This username is already in use.' ) );
        }

        /**
         * A hook can control the user registration
         */
        if ( $redirect instanceof RedirectResponse ) {
            return $redirect;
        }

        $shouldActivate     =   $options->get( 'validate_users', false ) ? true : false;

        /**
         * Create user instance
         */
        $user               =   new User;
        $user->username     =   $request->input( 'username' );
        $user->password     =   bcrypt( $request->input( 'password' ) );
        $user->email        =   $request->input( 'email' );
        $user->role_id      =   $options->get( 'register_as', 1 ); // default user
        $user->active       =   ! $shouldActivate;
        $user->save();

        /**
         * Save user options
         * before registration
         */
        $option             =   new Options( $user->id );
        $option->set( 'theme_class', 'red-theme' );

        /**
         * Trigger Hook for the user
         * @hook:register.user
         */
        Hook::action( 'register.user', $user, $option );

        if ( ( bool ) $shouldActivate ) {
            $userService->sendActivationEmail( $user );
        }

        /**
         * let's notify all admin with admin role a user has been registered
         * @todo adding a filter for role selected to receive an email
         */
        if ( ( bool ) $options->get( 'registration_notification' ) ) {
            foreach( Role::where( 'namespace', 'admin' )->first()->user as $admin ) {
                Mail::to( $admin->email )
                    ->queue( new UserRegistrationMail([
                        'link'  =>  url( '/tendoo/dashboard/crud/tendoo-users/edit/' . $user->id ),
                        'user'  =>  $user
                    ]));
            }
        }
    }

    /**
     * generate expiring token for a specific user
     * @return token
     */
    public function generateToken( $user )
    {
        $dateService    =   app()->make( DateService::class );
        $newKey         =   Str::random(40);
        $tokenKey       =   'Auth-Token::' . $newKey;
        $config         =   [
            'key'       =>  $tokenKey,
            'user_id'   =>  $user->id,
            'browser'   =>  request()->header( 'User-Agent' ),
            'expires'   =>  $dateService
                ->copy()
                ->addDays(7)
                ->toDateTimestring(),
        ];
        
        Cache::forget( $tokenKey );
        Cache::put( $tokenKey, $config, $dateService
            ->copy()
            ->addDays(7) ); // expire in one hour.

        return $newKey;
    }

    /**
     * Authenticate the request
     * @param string token
     * @return array AsyncResponse
     */
    public function authToken( $token, $client_key = null )
    {
        $result     =   $this->authTokenSilently( $token, $client_key );

        if ( $result[ 'status' ] === 'failed' ) {
            throw new AccessDeniedException( $result[ 'message' ] );
        }

        return $result;
    }

    /**
     * Authenticate the token silently
     * silently without throwing any error
     * @param string token
     * @return array AsyncResponse
     */
    public function authTokenSilently( $token, $client_key )
    {
        $dateService        =   app()->make( DateService::class );
        $tokenKey           =   'Auth-Token::' . $token;
        $oauthConnexion     =   Oauth::token( $token )->valid()->first();

        /**
         * Attempt to authenticate 
         * using a oAuth connexion 
         * which might exists
         */
        if ( $oauthConnexion instanceof Oauth ) {

            /**
             * let's check if the authenticated application
             * is registered within the system
             */
            $application    =   Application::where( 'client_key', $client_key )->first();

            if ( ! $application instanceof Application ) {
                throw new AccessDeniedException([
                    'status'    =>  'failed',
                    'message'   =>  __( 'The authentication request is not secure since, it doesn\'t rely on an registered application.' )
                ]);
            }
            
            return $this->__proceedAuthentication( $oauthConnexion->user_id, $token );

        } else if ( Cache::has( $tokenKey ) ) {
            
            $cached            =   Cache::get( $tokenKey );

            if ( @$cached[ 'browser' ] === request()->header( 'User-Agent' ) || ! config( 'tenodo.auth.strict-browser-match', false ) ) {

                Cache::put( $tokenKey, [
                    'key'       =>  $tokenKey,
                    'user_id'   =>  $cached[ 'user_id' ],
                    'browser'   =>  request()->header( 'User-Agent' ),
                    'expires'   =>  $dateService
                        ->copy()
                        ->addDays(7)
                        ->toDateTimestring(),
                ], $dateService
                    ->copy()
                    ->addDays(7) );

                return $this->__proceedAuthentication( $cached[ 'user_id' ], $token );
            }

            return [
                'status'    =>  'failed',
                'message'   =>  __( 'The current authentication request is invalid' )
            ];
        }

        return [
            'status'    =>  'failed',
            'message'   =>  __( 'Unable to proceed your session has expired.' )
        ];
    }

    private function __proceedAuthentication( $user_id, $token )
    {
        Auth::loginUsingId( $user_id );
        $user           =   Auth::user();
        $user->role     =   $user->role;
        
        return [
            'status'    =>  'success',
            'message'   =>  __( 'You are successfully authenticated' ),
            'data'      =>  [
                'user'      =>  $user,
                'token'     =>  $token
            ]
        ];
    }

    /**
     * refresh key
     * @return boolean
     */
    public function refreshToken( $token )
    {
        $dateService    =   app()->make( DateService::class );
        $tokenKey       =   'Auth-Token::' . $token;

        if ( Cache::has( $tokenKey ) ) {
            $cached            =   Cache::get( $tokenKey );

            /**
             * if the token expire within 5 minutes, 
             * let's refresh it
             */
            if ( $dateService->copy()->addDay()->gt( $cached[ 'expire' ] ) ) {
                Cache::forget( $tokenKey );
                Cache::put( $tokenKey, [
                    'key'       =>  $newKey,
                    'user_id'   =>  $user->id,
                    'browser'   =>  request()->header( 'User-Agent' ),
                    'expires'   =>  $dateService
                        ->copy()
                        ->addDays(7)
                        ->toDateTimestring(),
                ], $dateService
                    ->copy()
                    ->addDays(7) );
            }
        }
        return false;
    }

    /**
     * forget a token
     * @param string token
     * @return void
     */
    public function forget( $token )
    {
        $tokenKey       =   'Auth-Token::' . $token;
        if ( Cache::has( $tokenKey ) ) {
            Cache::forget( $tokenKey );
        }
    }

    public function login( $fields, $keepMeIn = false ) 
    {
        extract( $fields );
        
        $attempt    =   Auth::attempt( compact( 'username', 'password' ), $keepMeIn );

        if ( $attempt ) {

            $this->__checkOnCredentialsSuccessfull();

            $user           =   User::find( Auth::user()->id );
            $user->role     =   $user->role;
            $token          =   $this->generateToken( $user );
            
            return [
                'status'            =>  'success',
                'message'           =>  __( 'The user has been successfully connected' ),
                'user'              =>  $user,
                'token'             =>  $token,
                'redirectTo'        =>  Hook::filter( 'after.login.callback', false )
            ];
        }

        throw new WrongCredentialException;
    }

    /**
     * make a private verification
     * of the authenticated user
     * @param 
     */
    private function __checkOnCredentialsSuccessfull()
    {
        $options    =   app()->make( Options::class );
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
        if ( $options->get( 'app_restricted_login', false ) &&  
            ! in_array( 
                Auth::user()->role->namespace,
                Hook::filter( 'login.roles.allowed', [ 'admin' ])
            )
        ) {
            Auth::logout();
            throw new AccessDeniedException( __( 'Your role is not allowed to login.' ) );
        }
    }
}