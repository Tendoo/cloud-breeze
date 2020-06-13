<?php
namespace CloudBreeze\Core\Exceptions;
use Exception;

class ApiForbiddenScopeException extends Exception 
{
    public function __construct()
    {
        parent::__construct();
        $this->message  =   __( 'Unauthorized scope access.' );
    }
}