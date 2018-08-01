<?php
namespace Tendoo\Core\Exceptions;
use Exception;
use Tendoo\Core\Services\Page;

class RecoveryException extends Exception
{
    public function __construct( $message = null )
    {
        parent::__construct();
        Page::setTitle( __( 'Exception Occured' ) );
        $this->title    =   __( 'Recovery Exception' );
        $this->message  =   ( $message == null ) ? __( 'You\'re not allowed to reset a password for this account, the refresh link may have expired. Please try again.' ) : $message;
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