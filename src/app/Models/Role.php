<?php

namespace Tendoo\Cms\App\Models;

use Illuminate\Database\Eloquent\Model;
use Tendoo\Cms\App\Models\Permission;

class Role extends Model
{
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
            foreach( ( array ) $permissions as $permission ) {
                $perm       =   explode( '.', $permission );
                if( $perm[0] == 'crud' ) {
                    foreach( [ 'create', 'read', 'update', 'delete' ] as $prefix ) {
                        $getPerm        =   Permission::where( 'namespace', $prefix . '.' . $perm[1] )->first();
                        if( $role->permissions()->find( $getPerm[ 'id' ] ) == null ) {
                            $role->permissions()->attach( $getPerm );
                        }                        
                    }
                } else {
                    $getPerm        =   Permission::where( 'namespace', $permission )->first();
                    $role->permissions()->attach( $getPerm );
                }
            }
            return true;
        }

        return false;
    }
}
