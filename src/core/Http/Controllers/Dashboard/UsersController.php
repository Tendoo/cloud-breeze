<?php

namespace Tendoo\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Tendoo\Core\Http\Controllers\DashboardController;
use Tendoo\Core\Http\Requests\UserProfileRequest;
use Tendoo\Core\Http\Requests\PostUserSecurityRequest;
use Tendoo\Core\Http\Requests\PostRegisterRequest;
use Tendoo\Core\Http\Requests\PutUserRequest;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Oauth;
use Tendoo\Core\Models\Option as OptionModel;
use Tendoo\Core\Exceptions\CoreException;

class UsersController extends DashboardController
{
    public function __construct()
    {
        parent::__construct();

        $this->middleware( function( $request, $next ) {
            return $next( $request );
        });
    }

    /**
     * get users
     * @param int optional id
     * @return json
     */
    public function getUsers( $id = null )
    {
        if ( $id !== null ) {
            return User::find( $id );
        }

        return User::all()->map( function( $user ) use ( $id ) {
            $actions                =   '$actions';
            $isAuthenticated        =   Auth::id() === $user->id;
            $user->{$actions}       =   [
                [
                    'label'     =>  $isAuthenticated ? __( 'Profile' ) : __( 'Edit' ),
                    'namespace' =>  $isAuthenticated ? 'profil' : 'edit',
                    'type'      =>  'GOTO',
                    'index'     =>  'id',
                    'url'       =>  $isAuthenticated ? 'dashboard/profile' : '/dashboard/users/edit/#'
                ], [
                    'label'     =>  __( 'Delete' ),
                    'namespace' =>  'delete',
                    'type'      =>  'DELETE',
                    'index'     =>  'id',
                    'url'       =>  route( 'delete.user' ) . '/#',
                    'confirm'   =>  [
                        'message'  =>  __( 'Would you like to delete this account ?' ),
                        'title'     =>  __( 'Delete a user' )
                    ]
                ]
            ];
            return $user;
        });
    }

    /**
     * Delete User
     * @param int user id
     * @return json
     */
    public function deleteUser( $id )
    {
        if ( Auth::id() === intval( $id ) ) {
            throw new CoreException([
                'message'   =>  __( 'You cannot delete your own account.' ),
                'status'    =>  'failed'
            ]);
        }

        User::find( $id )->delete();
        OptionModel::where( 'user_id', $id )->delete();
        
        return [
            'status'    =>  'success',
            'message'   =>  __( 'The user has been deleted.' )
        ];
    }

    /**
     * Edit user
     * @param int user id
     * @return view
     */
    public function editUser( User $user, PutUserRequest $request )
    {
        $this->checkPermission( 'update.users' );

        /**
         * If the user who attempt to edit is the currently logged user.
         * We should redirect him to his profile
         * where he can't edit his role
         */
        if ( Auth::id() == $user->id ) {
            throw new CoreException([
                'message'   =>  __( 'Editing your own profile using that gateway is forbidden !' )
            ]);
        }

        $fields     =   $request->only([ 'active', 'password', 'role_id', 'username', 'email' ]);

        foreach( $fields as $attribute => $value ) {
            if ( $value !== null ) {
                $user->$attribute  =   $value;
            }
        }

        $user->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The user has been successfully updated' )
        ];
    }

    /**
     * Post User Security
     * @return void
     */
    public function postUserSecurity( PostUserSecurityRequest $request )
    {
        $user               =   Auth::user();

        if ( ! Hash::check( $request->input( 'old_password' ), $user->password ) ) {
            return redirect()->route( 'dashboard.users.profile.security' )->withErrors([
                'status'    =>  'danger',
                'message'   =>  __( 'The old password is not correct !' )
            ]);
        }

        $user->password     =   Hash::make( $request->input( 'new_password' ) );
        $user->save();

        /**
         * @todo send an email to the user saying that his password
         * has been changed.
         */

        /**
         * Redirect to the security tag
         */
        return redirect()->route( 'dashboard.users.profile.security' )->with([
            'status'    =>  'success',
            'message'   =>  __( 'Your password has been updated.' )
        ]);
    }

    /**
     * Create a user
     * @param Request
     * @return AsyncResponse
     */
    public function postUser( PostRegisterRequest $request ) 
    {
        $fields     =   $request->only([ 'active', 'password', 'role_id', 'username', 'email' ]);

        if ( $fields ) {
            $user   =   new User;
            foreach( $fields as $field => $value ) {
                $user->$field   =   $value;
            }

            /**
             * might need to perform some extra task here
             */
            $user->save();

            return [
                'status'    =>  'success',
                'message'   =>  __( 'The user has been created' )
            ];
        }
        
        return response()->json([
            'status'    =>  'failed',
            'message'   =>  __( 'Unable to proceed. The Request is not valid' )
        ], 403 );
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

    /**
     * Show Oauth
     * @return view
     */
    public function showOauth()
    {
        $this->checkPermission( 'read.profile' );
        $this->setTitle( __( 'My authorized oauth connexions' ) );

        $oauth      =   Oauth::where( 'user_id', Auth::id() )->get();
        $view_path  =   'tendoo::components.backend.user.oauth';

        return view( 'tendoo::components.backend.user', [
            'tab'           =>  'oauth',
            'view_path'     =>  $view_path,
            'oauth'         =>  $oauth
        ]);
    }

    /**
     * Post User Oauth
     * @return json
     */
    public function postUserOauth( Request $request )
    {
        $token  =   $request->input( 'token' );
        
        /**
         * Delete a key
         */
        Oauth::find( $token[ 'id' ] )->delete();
        
        return [
            'status'    =>  'success',
            'message'   =>  __( 'The access key has been revoked' )
        ];
    }
}
