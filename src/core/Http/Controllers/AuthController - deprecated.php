<?php

namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Str;
use Tendoo\Core\Services\Page;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\AuthService;
use Tendoo\Core\Services\UserOptions;
use Tendoo\Core\Http\Requests\LoginRequest;
use Tendoo\Core\Http\Requests\PostRegisterRequest;
use Tendoo\Core\Http\Requests\RecoveryRequest;
use Tendoo\Core\Http\Requests\PasswordChangeRequest;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Mail\PasswordReset;
use Tendoo\Core\Mail\PasswordUpdated;
use Tendoo\Core\Mail\UserRegistrationMail;
use Tendoo\Core\Exceptions\RecoveryException;
use Tendoo\Core\Facades\Hook;
use Carbon\Carbon;

class AuthController extends BaseController
{
    protected $userService;
    protected $authService;

    public function __construct()
    {
        parent::__construct();

        $this->middleware( 'can.register' )->only([ 'registerIndex', 'postRegister' ]);
        $this->middleware( function( $request, $next ) {
            /**
             * If the feature is not enabled according to the options
             * an exception is thrown FeatureDisabledException
             */
            $this->checkFeature( 'allow_recovery', 'true' );
            
            return $next($request);
        })->only([ 'recoveryIndex', 'recoveryPassword', 'postRecoveryPassword' ]);

        $this->middleware( function( $request, $next ) {
            $this->authService  =   app()->make( AuthService::class );
            return $next( $request );
        });
    }
    
    /**
     * Login Controller
     * @return view
     */
    public function loginIndex()
    {
        Page::setTitle( __( 'Login' ) );
        return view( 'tendoo::components.frontend.auth.login' );
    }

    /**
     * Register Controller
     * @return view
     */
    public function registerIndex()
    {
        /**
         * If the feature is not enabled according to the options
         * an exception is thrown FeatureDisabledException
         */
        $this->checkFeature( 'allow_registration', 'true' );

        Page::setTitle( __( 'Registration' ) );
        return view( 'tendoo::components.frontend.auth.register' );
    }

    /**
     * Post Login
     * Authenticate user and redirect
     * @return void
     */
    public function postLogin( LoginRequest $request )
    {
        /**
         * Event: before.login
         * It might return a redirection
         * @since 1.0
         */
        $response   =   Hook::filter( 'before.login', '' );
        if ( $response instanceof RedirectResponse ) {
            return $response;
        }

        if ( Auth::attempt([
            'username'  => $request->input( 'username' ), 
            'password'  => $request->input( 'password' )
        ], $request->input( 'remember_me' ) ? true : false ) ) {

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

                return [
                    'status'    =>  'danger',
                    'message'   =>  __( 'Unable to login, Your role is not allowed to login.')
                ];
            }

            /**
             * if the user is not active then we should let him know that
             */
            if ( ! ( boolean ) Auth::user()->active ) {
                
                $userId     =   Auth::user()->id;

                Auth::logout();

                if( $this->options->get( 'reset_activation_link' ) == 'true' ) {
                    return [
                        'status'    =>  'danger',
                        'message'   =>  __( 'Your account hasn\'t yet been activated.' ),
                        'data'      =>  [
                            'url'   =>  url()->route( 'register.send-activation', [
                                'user'  =>  $userId
                            ])
                        ]
                    ];
                }

                return [
                    'status'    =>  'danger',
                    'message'   =>  __( 'Your account hasn\'t yet been activated. You might need to check your email to activate it or contact the administrator.' )
                ];
            }
            
            /**
             * We might perform an action before login
             */
            Hook::action( 'after.login', $request );

            /**
             * Redirect user to the dashboard
             */
            $loginRoute     =   route( Hook::filter( 'after.login.route', config( 'tendoo.redirect.authenticated' ), Auth::user() ) );
            
            return $loginRoute;
        }

        return [
            'status'    =>  'danger',
            'message'   =>  __( 'Wrong username or password.' )
        ];
    }

    /**
     * Send Activation Email
     * @param object user
     * @return void
     */
    public function sendActivation( User $user )
    {
        /**
         * only if the user is not active
         */
        if ( intval( $user->active ) == 0 ) {
            $this->userService->sendActivationEmail( $user );
            return redirect()->route( 'login.index' )->with([
                'status'    =>  'success',
                'message'   =>  __( 'An activation link has been send to your mail.' )
            ]);
        }

        return redirect()->route( 'login.index' )->with([
            'status'    =>  'failed',
            'message'   =>  __( 'Only unactive account can request the activation mail.' )
        ]);
    }

    /**
     * post register
     * @param object register Request
     * @return void
     */
    public function postRegister( PostRegisterRequest $request, Options $options )
    {
        $this->authService->register( $request );

        return redirect()->route( 'login.index' )->with([
            'status'    =>  'success',
            'message'   =>  __( 'Your account has been created.' )
        ]);
    }

    /**
     * Register Activate Account
     * @param int user id
     * @param string activation code
     * @return void
     */
    public function registerActivate( User $user, $code )
    {
        $userOptions    =   new UserOptions( $user->id );
        
        if ( $userOptions->get( 'activation-code' ) === $code ) {

            /**
             * Set the user as active
             */
            $user->active   =   1;
            $user->save();

            $userOptions->delete( 'activation-code' );

            return redirect()->route( 'login.index' )->with([
                'status'    =>  'success',
                'message'   =>  __( 'Your account has been successfully activated.' )
            ]);
        } else {

            /**
             * Wrong activation link provided. redirect the user to the login page
             */
            return redirect()->route( 'login.index' )->with([
                'status'    =>  'danger',
                'message'   =>  __( 'Unable to activate the account %s. Wrong activation code provided' )
            ]);
        }
    }

    /**
     * Logout user
     * @return void
     */
    public function logoutIndex()
    {
        Event::fire( 'before.logout' );
        Auth::logout();
        return redirect()->route( config( 'tendoo.redirect.not-authenticated' ) );
    }

    /**
     * Recover Password
     * @return void
     */
    public function recoveryIndex()
    {
        Page::setTitle( __( 'Password Recover' ) );
        return view( 'tendoo::components.frontend.auth.recovery' );
    }

    /**
     * Post User Recovery
     * @return void
     */
    public function postRecovery( RecoveryRequest $request )
    {
        $user   =   User::where( 'email', $request->input( 'email' ) )->first();

        if ( $user == null ) {
            return redirect()->route( 'recovery.index' )->with([
                'status'    =>  'danger',
                'message'   =>  __( 'This email is not currently in use on the system.' )
            ]);
        }

        /**
         * Check if the user is active
         * otherwise we can't reset that user password
         */
        if ( ! ( bool ) intval( $user->active ) ) {
            return redirect()->route( 'recovery.index' )->with([
                'status'    =>  'danger',
                'message'   =>  __( 'Unable to reset a password for a non active user.' )
            ]);
        }

        /**
         * Generating a hashed code according to the username
         */
        $hashedCode     =   Str::random( strlen( $user->username ) ) . $this->date->timestamp;
        $userOptions    =   new UserOptions( $user->id );
        $userOptions->set( 'recovery-token', $hashedCode );
        $userOptions->set( 'recovery-validity', 
            $this->date
            ->copy()
            ->addDay()
            ->toDateTimeString()
        );

        Hook::action( 'before.send-recovery-email', $user, $hashedCode );

        /**
         * Sending an email which expire
         */
        Mail::to( $user->email )
            ->queue( new PasswordReset( url()->route( 'recovery.password', [
                'user'  =>  $user->id,
                'code'  =>  $hashedCode
            ]), $user ) );

        Hook::action( 'after.send-recovery-email', $user, $hashedCode );      

        return redirect()->route( 'login.index' )->with([
            'status'    =>  'success',
            'message'   =>  __( 'An email has been send with password reset details.' )
        ]);
    }

    /**
     * A UI to display a form where the user can change his password
     * @return void
     */
    public function recoveryPassword( User $user, $code )
    {
        $this->__checkRefreshValidity( $user, $code );
        Page::setTitle( __( 'Change Password' ) );
        return view( 'tendoo::components.frontend.auth.change-password', compact( 'user' ) );
    }

    /**
     * Recovery password post
     * @return void
     */
    public function postRecoveryPassword( User $user, PasswordChangeRequest $request )
    {
        $this->__checkRefreshValidity( $user, $request->input( 'recovery_code' ) );
        
        /**
         * If the script reach this 
         * the everything is fine so far
         */
        $user->password     =   Hash::make( $request->input( 'password' ) );
        $user->save();

        /**
         * Delete the keys so that the password can't be changed with the same
         * keys
         */
        $userOptions    =   new UserOptions( $user->id );
        $userOptions->delete( 'recovery-token' );
        $userOptions->delete( 'recovery-validity' );

        /**
         * @todo:email we might inform the user that his password has been reseted
         */
        Mail::to( $user->email )
            ->queue( new PasswordUpdated( $user ) );
        
        return redirect()->route( 'login.index' )->with([
            'status'    =>  'success', 
            'message'   =>  __( 'Your password has been successfully updated!' )
        ]);
    }

    /**
     * Check Refresh Validity
     * @return void
     */
    private function __checkRefreshValidity( $user, $code )
    {
        $userOptions    =   new UserOptions( $user->id );
        $expiration     =   $userOptions->get( 'recovery-validity' );

        /**
         * Check if the recovery code has not expired
         */
        if ( $this->date->gt( 
            Carbon::parse( $expiration ) 
        ) || empty( $expiration ) ) {
            throw new RecoveryException;
        }

        /**
         * Check if the recovery code is similar to what the user has on his options
         */
        if ( $userOptions->get( 'recovery-token' ) !== $code ) {
            /**
             * do we need to provide more information about this issue ?
             */
            throw new RecoveryException( 
                __( 'The token provided is incorrect or may have expired.' )
            );
        }
    }

    /**
     * get scopes
     * @return array of scopes
     */
    public function getScopes( $application, Request $request )
    {
        
    }
}
