<?php
namespace Modules\Bar\Events;

// use App\Services\Menus;
// use App\Services\Helper;

/**
 * Register Events
**/
class BarEvent
{
    public function __construct( Menus $menus )
    {
        $this->menus    =   $menus;
    }
}