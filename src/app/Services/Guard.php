<?php
namespace Tendoo\Cms\App\Services;
use Tendoo\Cms\App\Models\User;
use Tendoo\Cms\App\Models\Role;

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