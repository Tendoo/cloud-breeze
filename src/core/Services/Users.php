<?php
namespace Tendoo\Core\Services;

use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Permission;

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

        $this->buildRoles();
        $this->buildUsers();
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
}