<?php

namespace Tendoo\App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Tendoo\App\Http\Controllers\TendooController;
use Tendoo\App\Http\Requests\UserProfileRequest;
use Tendoo\App\Http\Requests\PostUserSecurityRequest;
use Tendoo\App\Models\User;

class UsersController extends TendooController
{
    public function __construct()
    {
        parent::__construct();

        $this->middleware( function( $request, $next ) {
            return $next( $request );
        });
    }

    /**
     * User List
     * display available users
     * @return view of users
     */
    public function usersList()
    {
        $this->checkPermission( 'read.users' );
        $this->setTitle( __( 'Users' ) );
        return view( 'components.backend.dashboard.users-list' );
    }

    /**
     * Create users
     * @param void
     * @return view
     */
    public function createUser()
    {
        $this->checkPermission( 'create.users' );
        $this->setTitle( __( 'Create a user' ) );
        return view( 'components.backend.dashboard.create-user' );
    }

    /**
     * Edit user
     * @param int user id
     * @return view
     */
    public function editUser( User $entry )
    {
        $this->checkPermission( 'update.users' );

        /**
         * If the user who attempt to edit is the currently logged user.
         * We should redirect him to his profile
         * where he can't edit his role
         */
        if ( Auth::id() == $entry->id ) {
            return redirect()->route( 'dashboard.users.profile' );
        }

        $this->setTitle( __( 'Edit a user' ) );
        return view( 'components.backend.dashboard.edit-user' );
    }

    /**
     * Post User Security
     * @return void
     */
    public function postUserSecurity( PostUserSecurityRequest $request )
    {
        $user               =   User::find( Auth::id() );

        if ( ! Hash::check( $request->input( 'old_password' ), $user->password ) ) {
            return redirect()->route( 'dashboard.users.profile', [
                'tab'   =>  'security'
            ])->withErrors([
                'status'    =>  'danger',
                'message'   =>  __( 'The old password is not correct !' )
            ]);
        }

        $user->password     =   bcrypt( $request->input( 'password' ) );
        $user->save();

        /**
         * We don't want to close session so the user is logged just after
         */
        Auth::logout();
        Auth::loginUsingId( $user->id );

        /**
         * Redirect to the security tag
         */
        return redirect()->route( 'dashboard.users.profile', [
            'tab'   =>  'security'
        ])->with([
            'status'    =>  'success',
            'message'   =>  __( 'Your password has been updated.' )
        ]);
    }
    
    /**
     * Show current logged user profile
     * @param void
     * @return view
     */
    public function showProfile( $tab = 'general' )
    {
        $this->checkPermission( 'read.profile' );
        $this->setTitle( __( 'My Profile' ) );
        return view( 'components.backend.dashboard.user', compact( 'tab' ) );
    }

    /**
     * Post user profile
     * @return void
     */
    public function postUserProfile( UserProfileRequest $request ) 
    {
        /**
         * Check permission for editing profile
         */
        $this->checkPermission( 'update.profile' );

        /**
         * excluse unused fields
         */
        $inputs     =   $request->except([ '_token', '_route', '_radio', '_checkbox', '_previous' ]);
        /**
         * If the field is defined as a radio or  checkbox field, then
         * it's deleted from the db to define new options. 
         * This is performed specially in case where the user 
         * disable a switch field or checkbox
         */

        // deleting _checkbox field
        foreach( ( array )  $request->input( '_checkbox' ) as $key ) {
            if ( in_array( $key, ( array ) $request->input( '_radio' ) ) || in_array( $key, ( array ) $request->input( '_checkbox' ) ) ) {
                $this->userOptions->delete( $key );
            }
        }

        // deleting _radio field
        foreach( ( array ) $request->input( '_radio' ) as $key ) {
            if ( in_array( $key, ( array ) $request->input( '_radio' ) ) ) {
                $this->userOptions->delete( $key );
            }
        }

        /**
         * Loop options and saved it
         * to the option table
         */
        foreach ( $inputs as $key => $value ) {
            /**
             * Saving/updating new value to the database
             */
            if ( ! is_array( $value ) ) {
                $this->userOptions->set( $key, $value );
            } else {
                $this->userOptions->set( $key, $value, true ); // set as array
            }
        }

        $response   =   [
            'status'    =>  'success',
            'message'   =>  __( 'The options has been saved.' )
        ];
        
        /**
         * Redirect to previous route
         */
        if ( $request->ajax() ) {
            return $response;
        } else {
            return redirect( $request->input( '_previous' ) )
                ->with( $response );
        }
    }
}
