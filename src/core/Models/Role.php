<?php

namespace Tendoo\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Tendoo\Core\Models\Permission;
use Illuminate\Support\Facades\DB;

class Role extends Model
{
    private static $cachedPermissions   =   [];

    /**
     * Relation with users
     * @return void
    **/

    public function user()
    {
        return $this->hasMany( User::class );
    }

    /**
     * Relation with Permissions
     * @return void
    **/

    public function permissions()
    {
        return $this->belongsToMany( Permission::class, 'role_permission' );
    }

    /**
     * Get Name
     * @param string role name
     * @return model
    **/

    public static function namespace( $name )
    {
        return self::where( 'namespace', $name )->first();
    }

    /**
     * Permission
     * @param string role name
     * @param array permission array
    **/

    public static function AddPermissions( $role_name, $permissions ) 
    {
        $role       =   self::namespace( $role_name );
        
        if( $role ) {
            
            $relations          =   [];

            foreach( ( array ) $permissions as $permission ) {
                $perm       =   explode( '.', $permission );
               

                if( $perm[0] == 'crud' ) {
                    foreach( [ 'create', 'read', 'update', 'delete' ] as $prefix ) {

                        /**
                         * Caching permission, to avoid more request during the installation
                         */
                        if ( @self::$cachedPermissions[ $prefix . '.' . $perm[1] ] == null ) {
                            self::$cachedPermissions[ $prefix . '.' . $perm[1] ]   =   Permission::where( 'namespace', $prefix . '.' . $perm[1] )->first();
                        }

                        
                        $getPerm =  self::$cachedPermissions[ $prefix . '.' . $perm[1] ];

                        $relations[]    =   [
                            'role_id'           =>  $role->id,
                            'permission_id'     =>  $getPerm->id
                        ];
                    }
                } else {
                    if ( @self::$cachedPermissions[ $permission ] == null ) {
                        self::$cachedPermissions[ $permission ]   =   Permission::where( 'namespace', $permission )->first();
                    }

                    $getPerm                =   self::$cachedPermissions[ $permission ];

                    $relations[]    =   [
                        'role_id'           =>  $role->id,
                        'permission_id'     =>  $getPerm->id
                    ];
                }
            }

            /**
             * if the relation array is set, then we can insert all
             */
            if ( $relations ) {
                DB::table( 'role_permission' )->insert( $relations );
            }
            return true;
        }

        return false;
    }
}
