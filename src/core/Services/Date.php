<?php
namespace Tendoo\Core\Services;
use Carbon\Carbon;
use DateTimeZone;

class Date 
{
    private $instance;

    public function __construct( $timeZone = 'Europe/London' )
    {
        $this->instance     =   Carbon::now( new DateTimeZone( $timeZone ) );
    }

    /**
     * get current date
     */
    public function instance()
    {
        return $this->instance;
    }
}