<?php
namespace CloudBreeze\Core\Exceptions;
use Exception;

class ApiAmbiguousTokenException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->message  =   __( 'Unable to authentify the request. Two same "access_token" has been found.' );
    }
}