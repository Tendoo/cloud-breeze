<?php
namespace Tendoo\Core\Exceptions;

use Exception;

class ApiUnknowScopeException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->message  =   __( 'The request can\'t be handled, one or more scopes aren\'t recognized.' );
    }
}