<?php
namespace CloudBreeze\Core\Exceptions;

use Exception;

class RedirectException extends Exception
{
    protected $redirectTo;
    protected $message;
    protected $status;

    public function __construct( $config )
    {
        extract( $config );
        /**
         * expose
         * -> status: string
         * -> message: string
         * -> redirectTo: string
         */
        $this->status       =   $status;
        $this->message      =   $message;
        $this->redirectTo   =   $redirectTo;
    }

    public function getRedirection()
    {
        return $this->redirectTo;
    }
}