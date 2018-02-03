<?php
namespace Tendoo\App\Services;
use Tendoo\App\Models\User;
use Tendoo\App\Models\Role;

class Guard
{
    /**
     * Ask For permission
     * @return view or empty
     */
    public function allow( $permission ) 
    {
        if ( ! User::allowedTo( $permission ) ) {

            
        }
    }
}