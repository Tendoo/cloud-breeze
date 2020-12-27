<?php
namespace Tendoo\Core\Services;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Role;

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