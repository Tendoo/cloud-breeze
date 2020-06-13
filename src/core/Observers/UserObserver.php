<?php
namespace CloudBreeze\Core\Observers;

use CloudBreeze\Core\Models\User;

use Illuminate\Support\Facades\DB;
use CloudBreeze\Core\Models\Permission;
use CloudBreeze\Core\Services\UserOptions;

class UserObserver 
{
    public function retrieved( User $user )
    {
        $user->options          =   new UserOptions( $user->id );
    }
}