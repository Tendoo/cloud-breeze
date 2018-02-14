<?php
namespace Tendoo\Core\Exceptions;
use Exception;

class FeatureDisabledException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        $this->message  =   __( 'You can\'t access to this feature since it has been disabled or you don\'t have access to that feature' );
    }
}