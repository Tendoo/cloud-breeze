<?php

namespace CloudBreeze\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Auth;
use CloudBreeze\Core\Services\Menus;
use CloudBreeze\Core\Services\Dashboard\MenusConfig;
use CloudBreeze\Core\Facades\Hook;
use CloudBreeze\Core\Services\Helper;
use CloudBreeze\Core\Services\Modules;
use CloudBreeze\Core\Models\User;
use CloudBreeze\Core\Services\Page;
use CloudBreeze\Core\Services\Options;
use CloudBreeze\Core\Services\DateService;
use CloudBreeze\Core\Services\UserOptions;
use CloudBreeze\Core\Services\Users;
use CloudBreeze\Core\Exceptions\AccessDeniedException;
use CloudBreeze\Core\Exceptions\RoleDeniedException;


class DashboardController extends BaseController
{
    protected $menus;

    public function __construct()
    {
        parent::__construct();

        // register dashboard menu singleton
        app()->singleton( 'CloudBreeze\Core\Services\Dashboard\MenusConfig', function( $app ) {
            return new MenusConfig();
        });

        $this->middleware( function( $request, $next ){

            /**
             * Registering stuff from middleware
             */
            $this->menus        =   app()->make( MenusConfig::class );

            return $next($request);
        });
    }
}
