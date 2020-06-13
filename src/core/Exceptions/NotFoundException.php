<?php
namespace CloudBreeze\Core\Exceptions;
use Exception;

class NotFoundException extends Exception
{
    public function __construct( $config )
    {
        parent::__construct();
        extract( $config );
        $this->title    =   @$title ?: __( 'Not Found' );
        $this->message    =   @$message ?: __( 'The ressource you\'re looking for can\'t be found or has been deleted.' );
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