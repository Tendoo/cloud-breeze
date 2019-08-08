<?php
namespace Tendoo\Core\Services;
use Carbon\Carbon;

class DateService extends Carbon
{
    public function __construct( $time = 'now', $timeZone = 'Europe/London' )
    {
        parent::__construct( $time, $timeZone );
    }
}