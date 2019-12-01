<?php

namespace Tendoo\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

use Tendoo\Core\Models\Permission;

class RolePermission extends Model
{
    protected $table    =   'tendoo_role_permission';
}