<?php
namespace CloudBreeze\Core\Exceptions;
use Exception;

class OauthDeniedException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->title    =   __( 'Oauth Access Denied' );
        $this->message  =   __( 'Unable to authenticate, the access has been denied.' );
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