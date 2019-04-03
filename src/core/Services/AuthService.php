<?php
namespace Tendoo\Core\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
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
         * A hook can control the user registration
         */
        if ( $redirect instanceof RedirectResponse ) {
            return $redirect;
        }

        $shouldActivate     =   $options->get( 'validate_users', 'false' ) === 'true' ? true : false;

        /**
         * Create user instance
         */
        $user               =   new User;
        $user->username     =   $request->input( 'username' );
        $user->password     =   bcrypt( $request->input( 'password' ) );
        $user->email        =   $request->input( 'email' );
        $user->role_id      =   $options->get( 'register_as', 1 ); // default user
        $user->active       =   $shouldActivate ? 1 : 0;
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

        if ( $shouldActivate ) {
            $userService->sendActivationEmail( $user );
        }

        /**
         * let's notify all admin with admin role a user has been registered
         * @todo adding a filter for role selected to receive an email
         */
        if ( $options->get( 'registration_notification' ) == 'yes' ) {
            foreach( Role::where( 'namespace', 'admin' )->first()->user as $admin ) {
                Mail::to( $admin->email )
                    ->queue( new UserRegistrationMail([
                        'link'  =>  route( 'dashboard.users.list' ),
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
                ->addMinutes(60)
                ->toDateTimestring(),
        ];
        
        Cache::forget( $tokenKey );
        Cache::put( $tokenKey, $config, $dateService
            ->copy()
            ->addMinutes(60) ); // expire in one hour.
        Log::info( json_encode( $config ) );

        return $newKey;
    }

    /**
     * Authenticate the request
     * @param string token
     * @return AsyncResponse
     */
    public function authToken( $token )
    {
        $dateService    =   app()->make( DateService::class );
        $tokenKey       =   'Auth-Token::' . $token;

        if ( Cache::has( $tokenKey ) ) {
            
            $cached            =   Cache::get( $tokenKey );

            if ( @$cached[ 'browser' ] === request()->header( 'User-Agent' ) ) {

                Auth::loginUsingId( $cached[ 'user_id' ] );

                Cache::put( $tokenKey, [
                    'key'       =>  $tokenKey,
                    'user_id'   =>  $cached[ 'user_id' ],
                    'browser'   =>  request()->header( 'User-Agent' ),
                    'expires'   =>  $dateService
                        ->copy()
                        ->addMinutes(60)
                        ->toDateTimestring(),
                ], $dateService
                    ->copy()
                    ->addMinutes(60) );

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

            throw new AccessDeniedException( __( 'The current authentication request is invalid' ) );
        }

        throw new SessionExpiredException( __( 'Unable to proceed your session has expired.' ) );
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
            if ( $dateService->copy()->addMinutes(5)->gt( $cached[ 'expire' ] ) ) {
                Cache::forget( $tokenKey );
                Cache::put( $tokenKey, [
                    'key'       =>  $newKey,
                    'user_id'   =>  $user->id,
                    'browser'   =>  request()->header( 'User-Agent' ),
                    'expires'   =>  $dateService
                        ->copy()
                        ->addMinutes(60)
                        ->toDateTimestring(),
                ], $dateService
                    ->copy()
                    ->addMinutes(60) );
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
}