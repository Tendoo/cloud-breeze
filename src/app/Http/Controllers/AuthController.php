<?php

namespace Tendoo\Cms\App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Tendoo\Cms\App\Services\Page;
use Tendoo\Cms\App\Services\Options;
use Tendoo\Cms\App\Http\Requests\LoginRequest;
use Tendoo\Cms\App\Http\Requests\PostRegisterRequest;
use Tendoo\Cms\App\Models\User;


class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware( 'can.register' )->only([ 'registerIndex', 'postRegister' ]);
    }
    
    /**
     * Login Controller
     * @return view
     */
    public function loginIndex()
    {
        Page::setTitle( __( 'Login' ) );
        return view( 'components.frontend.auth.login' );
    }

    /**
     * Register Controller
     * @return view
     */
    public function registerIndex()
    {
        Page::setTitle( __( 'Registration' ) );
        return view( 'components.frontend.auth.register' );
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
         * @since 1.0
         */
        Event::fire( 'before.login' );

        if ( Auth::attempt([
            'username'  => $request->input( 'username' ), 
            'password'  => $request->input( 'password' )
        ], $request->input( 'remember_me' ) ? true : false ) ) {

            /**
             * if the user is not active then we should let him know that
             */
            if ( ! ( boolean ) Auth::user()->active ) {
                
                Auth::logout();

                return redirect()->route( 'login.index' )->with([
                    'status'    =>  'danger',
                    'message'   =>  __( 'Your account hasn\'t yet been activated. You might need to check your email to activate it or contact the administrator.' )
                ]);
            }
            
            /**
             * We might perform an action before login
             */
            Event::fire( 'after.login' );

            /**
             * Redirect user to the dashboard
             */
            return redirect()->intended( route( config( 'tendoo.redirect.authenticated' ) ) );
        }

        return redirect()->route( 'login.index' )->withErrors([
            'status'    =>  'danger',
            'message'   =>  __( 'Wrong username or password.' )
        ]);
    }

    /**
     * post register
     * @param object register Request
     * @return void
     */
    public function postRegister( PostRegisterRequest $request, Options $options )
    {
        $shouldActive       =   $options->get( 'validate_users', 'false' ) === 'true' ? true : false;

        $user   =   new User;
        $user->username     =   $request->input( 'username' );
        $user->password     =   bcrypt( $request->input( 'password' ) );
        $user->email        =   $request->input( 'email' );
        $user->role_id      =   $options->get( 'register_as', 1 ); // default user
        $user->active       =   $shouldActive ? 1 : 0;
        $user->save();

        /**
         * if it shouldn't activate the user, we might send an email
         * for letting him know his account has been created
         */
        if ( ! $shouldActive ) {

        }

        return redirect()->route( 'login.index' )->with([
            'status'    =>  'success',
            'message'   =>  __( 'Your account has been created.' )
        ]);
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
}
