<?php
namespace CloudBreeze\Core\Services;
use CloudBreeze\Core\Models\User;
use CloudBreeze\Core\Models\Role;

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