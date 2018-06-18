<?php

namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Auth;
use Tendoo\Core\Services\Menus;
use Tendoo\Core\Services\Dashboard\MenusConfig;

class DashboardController extends TendooController
{
    public function __construct()
    {
        parent::__construct();

        // register a singleton a menu
        app()->singleton( 'Tendoo\Core\Services\Menus', function( $app ) {
            return new Menus();
        });

        // register dashboard menu singleton
        app()->singleton( 'Tendoo\Core\Services\Dashboard\MenusConfig', function( $app ) {
            return new MenusConfig( $app->make( Menus::class ) );
        });
    }
}
