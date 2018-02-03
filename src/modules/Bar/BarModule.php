<?php
namespace Modules\Bar;

use Illuminate\Support\Facades\Event;
use App\Services\TendooModule;

class BarModule extends TendooModule
{
    public function __construct()
    {
        parent::__construct( __FILE__ );

        /**
         * Register Menus
        **/
        // Event::listen( 'dashboard.loaded', 'Modules\Bar\Events\BarEvents@menus' );
    }
}