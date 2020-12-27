<?php
namespace Tendoo\Core\Exceptions;

use Exception;

class ApiUnknowEndpointException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->message  =   __( 'The request can\'t be handled. The current endpoint is not registered.' );
    }
}