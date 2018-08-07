<?php
namespace Tendoo\Core\Services;
use Carbon\Carbon;
use DateTimeZone;
use JsonSerializable;

class DateService extends Carbon
{
    public function __construct( $timeZone = 'Europe/London' )
    {
        parent::__construct( 'now', new DateTimeZone( $timeZone ) );
    }
}