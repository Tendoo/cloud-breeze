<?php
namespace Tendoo\Core\Exceptions;
use Exception;

class FloodRequestException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->title    =   __( 'Flood Request Exception' );
        $this->message  =   __( 'The request can\'t been handled due to the amount of request send by the client.' );
    }

    /**
     * get Title
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }
}