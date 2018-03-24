<?php
namespace Tendoo\Core\Exceptions;
use Exception;

class ApiUnknowTokenException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->message  =   __( 'The request can\'t be handled, wrong tokens has been provided.' );
    }
}