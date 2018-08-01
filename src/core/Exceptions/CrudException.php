<?php
namespace Tendoo\Core\Exceptions;

use Exception;
use Tendoo\Core\Services\Page;

class CrudException extends Exception
{
    public function __construct( $crudData )
    {
        Page::setTitle( __( 'Exception Occured' ) );
        $this->message  =   @$crudData[ 'message' ];
        $this->data     =   $crudData;
    }

    /**
     * Get Array Response
     * @return array
     */
    public function getResponse()
    {
        return $this->data;
    }
}