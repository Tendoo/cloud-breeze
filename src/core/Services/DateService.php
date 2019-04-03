<?php
namespace Tendoo\Core\Services;
use Carbon\Carbon;
use DateTimeZone;
use JsonSerializable;

class DateService extends Carbon
{
    public function __construct( $time = 'now', $timeZone = 'Europe/London' )
    {
        parent::__construct( $time, new DateTimeZone( $timeZone ) );
    }
}