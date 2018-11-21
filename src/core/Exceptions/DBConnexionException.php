<?php
namespace Tendoo\Core\Exceptions;

use Exception;

class DBConnexionException extends Exception
{
    public function __construct( $errorBag )
    {
        $this->message  =   @$errorBag[ 'message' ] ?: __( 'No proper error has been provided for the error' );
        $this->title    =   __( 'Database Connexion Exception' );
    }
}