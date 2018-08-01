<?php
namespace Tendoo\Core\Exceptions;
use Exception;
use Tendoo\Core\Services\Page;

class FeatureDisabledException extends Exception
{
    public function __construct()
    {
        parent::__construct();
        Page::setTitle( __( 'Exception Occured' ) );
        $this->title    =   __( 'Feature Disabled' );
        $this->message  =   __( 'You can\'t access to this feature since it has been disabled or you don\'t have access to that feature.' );
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