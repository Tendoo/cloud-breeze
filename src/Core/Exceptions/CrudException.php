<?php
namespace Tendoo\Core\Exceptions;

use Exception;

class CrudException extends Exception
{
    public function __construct( $crudData )
    {
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