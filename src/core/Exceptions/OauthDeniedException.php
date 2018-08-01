<?php
namespace Tendoo\Core\Exceptions;
use Exception;
use Tendoo\Core\Services\Page;

class OauthDeniedException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        Page::setTitle( __( 'Exception Occured' ) );
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