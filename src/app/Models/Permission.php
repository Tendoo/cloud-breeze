<?php

namespace Tendoo\Cms\App\Models;

use Illuminate\Database\Eloquent\Model;
use Tendoo\Cms\App\Models\Role;

class Permission extends Model
{
    public function roles()
    {
        return $this->belongsToMany( Role::class, 'role_permission' );
    }
}
