<?php

namespace Tendoo\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

use Tendoo\Core\Models\Permission;

class Role extends Model
{

    private static $cachedPermissions   =   [];
    protected $table    =   'tendoo_roles';

    
    /**
     * Relation with users
     * @return void
    **/

    public function users()
    {
        return $this->hasMany( User::class );
    }
    
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
        return $this->belongsToMany( Permission::class, 'tendoo_role_permission' );
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
     * @deprecated
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
                DB::table( 'tendoo_role_permission' )->insert( $relations );
            }
            return true;
        }

        return false;
    }

    public static function addPermission( $role_name, $permissions, $silent = true )
    {
        $role   =   self::namespace( $role_name );

        if ( $role instanceof Role ) {
            if ( is_string( $permissions ) ) {
                $permission     =   Permission::namespace( $permissions )->first();

                if ( $permission instanceof Permission ) {
                    self::__createRelation( $role, $permission, $silent );
                }
            } else if ( is_array( $permissions ) ) {
                $relations   =   [];
                foreach( $permissions as $permission ) {
                    $permission     =   Permission::namespace( $permissions )->first();

                    if ( $permission instanceof Permission ) {
                        self::__createRelation( $role, $permission, $silent );
                    }
                }
            }
        }
    }

    private static function __createRelation( $role, $permission, $silent )
    {
        $exists     =   DB::table( 'tendoo_role_permission' )
            ->where( 'role_id', $role->id )
            ->where( 'permission_id', $permission->id )
            ->first();

        if ( empty( $exists ) ) {
            DB::table( 'tendoo_role_permission' )->insert([
                'role_id'           =>  $role->id,
                'permission_id'     =>  $permission->id
            ]);
        } else if ( $silent === false ) {
            throw new CoreException([
                'status'    =>  'failed',
                'message'   =>  sprintf(
                    __( 'A relation already exist because role "%s" and permission "%s".' ),
                    $role->name,
                    $permission->name
                )
            ]);
        }
    }

    /**
     * add permissions to 
     * an role model
     * @param array|Collection string permissions
     */
    public function scopeGrantPermissions( $query, $permissions )
    {
        if ( $permissions instanceof Collection ) {
            $roleNamespace      =   $this->namespace;
            $permissions->map( function( $permission ) use ( $roleNamespace ) {
                self::AddPermissions( $roleNamespace, $permission->namespace );
            });
        } else {
            if ( ! is_array( $permissions ) ) {
                return self::AddPermissions( $this->namespace, [ $permissions ]);
            }
            return self::AddPermissions( $this->namespace, $permissions );
        }
    }

    /**
     * @todo remove permission
     * Remove one or more permission to a specific role.
     */
    public static function RemovePermissions( $role_name, $permissions )
    {
        $AllPermissions   =   Permission::whereIn( 'namespace', $permissions );
    }
}
