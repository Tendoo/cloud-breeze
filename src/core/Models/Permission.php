<?php

namespace Tendoo\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Tendoo\Core\Models\Role;

class Permission extends Model
{
    protected $table    =   'tendoo_permissions';

    public function roles()
    {
        return $this->belongsToMany( Role::class, 'tendoo_role_permission' );
    }
}
