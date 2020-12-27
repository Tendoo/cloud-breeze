<?php
namespace Tendoo\Core\Exceptions;

use Exception;

class ExpiredRequestException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->message  =   __( 'Unable to proceed an expired request.' );
    }
}