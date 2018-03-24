<?php
namespace Tendoo\Core\Exceptions;
use Exception;

class ApiMissingTokenException extends Exception 
{
    public function __construct()
    {
        parent::__construct();
        $this->message  =   __( 'The request can\'t be handled, the "token" keys are missing.' );
    }
}