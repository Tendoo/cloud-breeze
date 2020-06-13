<?php
namespace CloudBreeze\Core\Exceptions;

use Exception;

class WrongOauthScopeException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->title    =   __( 'Wrong Scope Exception' );
        $this->message  =   __( 'Unable to proceed since the scopes provided are invalid or has not yet be registered.' );
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