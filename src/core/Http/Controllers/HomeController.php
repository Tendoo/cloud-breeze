<?php

namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Tendoo\Core\Services\Setup;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Exceptions\NotFoundException;

class HomeController extends Controller
{
    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('tendoo::home' );
    }

    /**
     * ping the website to retreive installation informations
     */
    public function ping()
    {
        $helper  =   app()->make( Helper::class );
        if ( $helper->AppIsInstalled() ) {
            return [
                'status'    =>  'installed',
                'migrations' =>  [
                    'system'    => [],
                    'modules'   => []
                ],
                'localisation'  => [
                    'eng'   => [],
                    'fr'    => []
                ],
                'message'   =>  __( 'Tendoo is installed.' )
            ];
        } else {
            return [
                'status'    =>  'not-installed',
                'message'   =>  __( 'Tendoo is not installed.' )
            ];
        }
    }
}
