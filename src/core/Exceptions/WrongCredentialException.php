<?php
namespace CloudBreeze\Core\Exceptions;

use Exception;

class WrongCredentialException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->title    =   __( 'Wrong Credential' );
        $this->message  =   __( 'Unable to login, a wrong username/email or password has been provided.' );
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