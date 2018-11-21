<?php
namespace Tendoo\Core\Exceptions;

use Exception;

class TendooInstalledException extends Exception
{
    public function __construct( $message = '' )
    {
        $this->message  =   $message ?: __( 'Tendoo is aleady installed. A new setup can\'t be launched' );
    }
}