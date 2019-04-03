<?php
namespace Tendoo\Core\Services;

use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Permission;
use Tendoo\Core\Services\UserOptions;
use Tendoo\Core\Mail\ActivateAccountMail;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class Users
{
    private $roles  =   [];
    private $users  =   [];

    public function __construct(
        Role $role,
        User $user,
        Permission $permission
    )
    {
        $this->role         =   $role;
        $this->user         =   $user;
        $this->permission   =   $permission;

        // $this->buildRoles();
        // $this->buildUsers();
    }

    /**
     * get all user from a specific group
     * @param string
     * @return array of users
     */
    public function all( $namespace = null ) 
    {
        if ( $namespace != null ) {
            return @$this->roles[ $namespace ][ 'users' ];
        } else {
            return $this->users;
        }
    }

    /**
     * BuildRoles
     * @deprecated
     * @return void
     */
    public function buildRoles()
    {
        $roles  =   $this->role->all();

        foreach( $roles as $role ) {
            $this->roles[ $role->namespace ][ 'details' ]    =   $role->toArray();
        }
    }

    /**
     * Build Users
     * @deprecated
     * @return void
     */
    public function buildUsers()
    {
        $users  =   $this->user->all();
        
        foreach( $users as $user ) {

            /***
             * if the role is not cached
             */
            if ( @$this->roles[ $user->role->namespace ][ 'users' ] == null ) {
                $this->roles[ $user->role->namespace ][ 'users' ]     =   [];
            }

            $this->roles[ $user->role->namespace ][ 'users' ][]   =   $user;
            $this->users[]      =   $user;
        }
    }

    /**
     * Send Activation Email
     * @param user id
     */
    public function sendActivationEmail( User $user )
    {
        /**
         * Send user activation code
         */
        $activationCode     =   Str::random( 10 ) . $user->id;
        $userOptions        =   new UserOptions( $user->id );
        $userOptions->set( 'activation-code', $activationCode );

        /**
         * @todo
         * if it shouldn't activate the user, we might send an email
         * for letting him know his account has been created
         */
        Mail::to( $user->email )
            ->queue( new ActivateAccountMail( url()->route( 'register.activate', [
                'code'  =>  $activationCode,
                'user'  =>  $user->id
            ]), $user ) );
    }

    /**
     * Check if a user belongs to a group
     * @param mixed group of user
     * @return boolean
     */
    public function is( $group_name ) 
    {
        if ( is_array( $group_name ) ) {
            return in_array( Auth::user()->role->namespace, $group_name );
        } else {
            return Auth::user()->role->namespace === $group_name;
        }
    }
}