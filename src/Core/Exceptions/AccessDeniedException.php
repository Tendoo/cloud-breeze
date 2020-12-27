<?php
namespace Tendoo\Core\Exceptions;
use Exception;

class AccessDeniedException extends Exception
{
    public function __construct( $message )
    {
        parent::__construct();
        $this->title    =   __( 'Access Denied' );
        $this->message  =   $message;
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