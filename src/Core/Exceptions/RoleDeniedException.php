<?php
namespace Tendoo\Core\Exceptions;
use Exception;

class RoleDeniedException extends Exception
{
    public function __construct( $roles )
    {
        parent::__construct();
        $this->title    =   __( 'Role Denied' );
        $this->message  =   sprintf( __( 'You\'re not allowed to see that page. You don\'t have the required role(s): "%s".' ), implode( ', ', $roles ) );
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