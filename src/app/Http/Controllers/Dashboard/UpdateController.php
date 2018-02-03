<?php

namespace Tendoo\App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Tendoo\App\Http\Controllers\TendooController;
use Illuminate\Support\Facades\Event;

class UpdateController extends TendooController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware( function( $request, $next ) {
            return $next( $request );
        });
    }

    /**
     * Refresh Installation
     * Pull content from github
     * @return view
     */
    public function update()
    {
        $this->setTitle( __( 'Update Tendoo CMS' ) );
        return view( 'components.backend.dashboard.update' );
    }
}
