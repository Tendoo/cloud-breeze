<?php

namespace CloudBreeze\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

use CloudBreeze\Core\Models\Permission;

class RolePermission extends Model
{
    protected $table    =   'cb_role_permission';
}