<?php

namespace CloudBreeze\Core\Models;

use Illuminate\Database\Eloquent\Model;
use CloudBreeze\Core\Models\Role;

class Permission extends Model
{
    protected $table    =   'cb_permissions';

    public function scopeNamespace( $query, $param ) {
        return $query->where( 'namespace', $param );
    }

    public function roles()
    {
        return $this->belongsToMany( Role::class, 'cb_role_permission' );
    }

    /**
     * return all permissions using
     * a namespace string used for search
     * @param Query
     * @param string search namespace
     * @return Query
     */
    public function scopeIncludes( $query, $search )
    {   
        return $query->where( 'namespace', 'like', '%' . $search );
    }
}
