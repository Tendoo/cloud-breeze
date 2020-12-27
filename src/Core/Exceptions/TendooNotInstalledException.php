<?php
namespace Tendoo\Core\Exceptions;

use Exception;

class TendooNotInstalledException extends Exception
{
    public function __construct( $message = '' )
    {
        $this->message  =   $message ?: __( 'Unable to proceed, Tendoo CMS is not installed' );
        $this->class    =   self::class;
        $this->title    =   __( 'Require Installation' );
    }
}