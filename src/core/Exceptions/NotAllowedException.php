<?php
namespace CloudBreeze\Core\Exceptions;
use Exception;

class NotAllowedException extends Exception
{
    public function __construct( $config )
    {
        parent::__construct();

        extract( $config );
        /**
         * ->status
         * ->message
         */

        $this->status       =   @$status ?: 'failed';
        $this->message      =   @$message ?: __( 'You\'re not allowed to perform this action.' );
    }

    /**
     * get Title
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }
}