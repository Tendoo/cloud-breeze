<?php

namespace Tendoo\Cms\App\Models;

use Illuminate\Notifications\Notifiable;
// use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Tendoo\Cms\App\Services\UserOptions;

class User extends Authenticatable
{
    use Notifiable;

    public $user_id;

    /**
     * The attributes that are mass assignable.
     *
        * @var array
     */
    protected $fillable = [
        'email', 'password', 'role_id', 'active', 'username'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * Permission for a specific user
     * @var array
     */
    protected static $permissions  =   [];

    /**
     * Relation with roles
     * @return void
    **/

    public function role()
    {
        return $this->belongsTo( Role::class );
    }

    /**
     * Relation with permissions
     * @return object
     */
    public static function permissions( $user_id = null )
    {
        /**
         * If user id is not provided
         */
        if ( $user_id == null ) {
            $user_id    =   Auth::user()->role_id;
        } 

        if ( empty( @self::$permissions[ $user_id ] ) ) {

            $rawPermissions   =   Role::find( $user_id )->permissions;

            /**
             * if the permissions hasn't yet been cached
             */
            
            // start caching the user permissions
            self::$permissions[ $user_id ]    =   [];
    
            /**
             * if there is a rawPermission available
             */
            if ( $rawPermissions->count() ) {
                foreach ( $rawPermissions as $permission ) {
                    self::$permissions[ $user_id ][]  =   $permission->namespace;
                }
            }
        }

        return self::$permissions[ $user_id ];
    }

    /**
     * Check if a user can perform an action
     */
    public static function allowedTo( $action )
    {
        if ( ! is_array( $action ) ) {
            // check if there is a wildcard on the permission request
            $partials       =   explode( '.', $action );

            if ( $partials[0] == '*' ) {

                $collection     =   collect( self::permissions() );

                /**
                 * Getting all defined permission 
                 * instead of harcoding it
                 */
                $permissions    =   $collection->filter( function( $value, $key ) use( $partials ) {
                    return substr( $value, -strlen( $partials[1] ) ) === $partials[1];
                });

                return self::allowedTo( $permissions->toArray() );
            }

            /**
             * We assume the search is not an array but a string. We
             * can then perform a search
             */
            if ( in_array( $action, self::permissions() ) ) {
                return true;
            }
            return false;

        } else {

            /**
             * While looing, if one permission is not granted, exit the loop and return false
             */
            if( $action ) {
                foreach ( $action as $_permission ) {
                    if ( ! self::allowedTo( $_permission ) ) {
                        return false;
                    }
                }    
                return true;
            }
            return false;
        }
    }

    /**
     * Get authenticated user pseudo
     * @return string
     */
    public function pseudo()
    {
        $user   =   Auth::user();
        return $user->username;
    }

    /**
     * Assign user to a role
     * @param int user id
     * @param role name
     * @return boolean
     */
    public static function setAs( $id, $roleName )
    {
        $role   =   Role::namespace( $roleName );

        if ( $role ) {
            /**
             * check if model is already provided
             */
            if ( is_object( $id ) ) {
                $user   =   $id;
            } else {
                $user   =   self::find( $id );
            }

            $user->role()->associate( $role );
            $user->save();
        }
        return false;
    }

    /**
     * Set object as a role
     * basically assigning role to user
     * @param object user
     * @return User<Model>
     */
    public static function set( $user ) 
    {
        if ( $user ) {
            return User::define( $user->id );
        }
        return false;
    }

    /**
     * Define user id
     * @param int user
     */
    public static function define( $user_id ) 
    {
        $user   =   new User;
        $user->user_id  =   $user_id;
        return $user;
    }

    /**
     * Assign a role
     * @param string role namespace
     * @return void
     */
    public function as( $role )
    {
        return self::setAs( $this->user_id, $role );
    }
    
    /**
     * mutator
     * mutate active field
     * @param string value
     * @return boolean
     */
    public function getActiveAttribute( $value ) 
    {
        if ( $value == '1' ) {
            return true;
        }
        return false;
    }
}
