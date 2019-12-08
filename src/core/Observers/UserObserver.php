<?php
namespace Tendoo\Core\Observers;

use Tendoo\Core\Models\User;

use Illuminate\Support\Facades\DB;
use Tendoo\Core\Models\Permission;
use Tendoo\Core\Services\UserOptions;

class UserObserver 
{
    public function retrieved( User $user )
    {
        $user->options          =   new UserOptions( $user->id );
    }
}