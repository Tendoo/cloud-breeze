<?php

namespace Tendoo\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Tendoo\Core\Http\Controllers\DashboardController;
use Tendoo\Core\Facades\Hook;
use Symfony\Component\HttpFoundation\RedirectResponse;

class PageBuilderController extends DashboardController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware( function( $request, $next ) {
            return $next( $request );
        });
    }

    /**
     * List builder components
     */
    public function list()
    {
        return View::make( 'tendoo::interfaces.backend.vue-table' );
    }
}