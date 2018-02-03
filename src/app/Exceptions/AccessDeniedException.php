<?php
namespace Tendoo\App\Exceptions;
use Exception;

class AccessDeniedException extends Exception
{
    public function __construct( $permission )
    {
        parent::__construct();
        $this->message  =   sprintf( __( 'You\'re not allowed to see that page. You don\'t have the permission: "%s" within your permissions list.' ), $permission );
    }
}