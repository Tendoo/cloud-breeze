<?php
namespace Tendoo\Core\Exceptions;

use Exception;

class BadRequestException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->message  =   __( 'Unable to proceed. the request is not well formed to be understood by the server.' );
    }
}