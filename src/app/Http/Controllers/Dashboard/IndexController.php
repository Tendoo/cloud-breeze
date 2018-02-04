<?php

namespace Tendoo\Cms\App\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Tendoo\Cms\App\Http\Controllers\TendooController;

class IndexController extends TendooController
{
    public function __construct()
    {
        parent::__construct();
        
        $this->middleware( function( $request, $next ) {
            return $next( $request );
        });
    }

    
    /** 
     * Dashboard index
     * @since 1.0
     */
    public function index()
    {
        $this->setTitle( __( 'Dashboard Index' ) );
        return view( 'components.backend.dashboard.index' );
    }
}
