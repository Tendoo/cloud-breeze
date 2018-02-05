<?php

namespace Tendoo\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Tendoo\Core\Models\Role;

class Permission extends Model
{
    public function roles()
    {
        return $this->belongsToMany( Role::class, 'role_permission' );
    }
}
