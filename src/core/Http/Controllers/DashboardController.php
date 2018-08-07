<?php

namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Auth;
use Tendoo\Core\Services\Menus;
use Tendoo\Core\Services\Dashboard\MenusConfig;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Modules;
use Tendoo\Core\Models\User;
use Tendoo\Core\Services\Page;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\DateService;
use Tendoo\Core\Services\UserOptions;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Tendoo\Core\Exceptions\RoleDeniedException;


class DashboardController extends BaseController
{
    protected $menus;

    public function __construct()
    {
        parent::__construct();

        /**
         * Redirect user if he's not authenticated
         */
        $this->middleware( 'expect.logged' );

        // register a singleton a menu
        app()->singleton( 'Tendoo\Core\Services\Menus', function( $app ) {
            return new Menus();
        });

        // register dashboard menu singleton
        app()->singleton( 'Tendoo\Core\Services\Dashboard\MenusConfig', function( $app ) {
            return new MenusConfig( $app->make( Menus::class ) );
        });

        if ( Helper::AppIsInstalled() ) {
            $this->middleware( function( $request, $next ){

                /**
                 * Registering stuff from middleware
                 */
                $this->menus        =   app()->make( MenusConfig::class );

                /**
                 * @hook:dashboard.loaded
                 * run when the dashboard is loaded
                 */
                Hook::action( 'dashboard.loaded' );

                return $next($request);
            });
        } 
    }
}
