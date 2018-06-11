<?php
namespace Tendoo\Core\Services;

class CustomApiEndpoint 
{
    private $ctrl_func;

    public function __construct( $ctrl_func )
    {
        $this->ctrl_func   =   $ctrl_func;
    }

    /**
     * get the ctrl class
     * @return string;
     */
    public function register()
    {
        return $this->ctrl_func();
    }
}