<?php
namespace Tendoo\Core\Exceptions;
use Exception;

class AccessDeniedException extends Exception
{
    public function __construct( $permission )
    {
        parent::__construct();
        $this->title    =   __( 'Access Denied' );
        $this->message  =   sprintf( __( 'You\'re not allowed to see that page. You don\'t have the permission: "%s" within your permissions list.' ), $permission );
    }

    /**
     * get Title
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }
}