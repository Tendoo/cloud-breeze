<?php

namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Tendoo\Core\Services\Setup;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Exceptions\NotFoundException;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Tendoo\Core\Services\Options;

class HomeController extends BaseController
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

            $options    =   app()->make( Options::class );

            return [
                'status'    =>  'installed',
                'migrations' =>  [
                    'system'    =>  [
                        'db'    =>  [
                            'new_version'   =>  TENDOO_DB_VERSION,
                            'old_version'   =>  $options->get( 'db_version' )
                        ],
                        'assets' =>  [
                            'new_version'   =>  TENDOO_ASSETS_VERSION,
                            'old_version'   =>  $options->get( 'assets_version' )
                        ]
                    ],
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

    /**
     * Extract module
     * @param string module namespace
     * @todo review
     * @return void
     */
    public function extractModule( $module, Request $request )
    {
        /**
         * let's make sure the url is valid
         */
        if ( ! $request->hasValidSignature() ) {
            throw new AccessDeniedException( __( 'This url is not valid or has expired.' ) );
        }

        $moduleDetails     =   $this->modules->extract( $module );

        return response()->download( 
            $moduleDetails[ 'path' ], 
            strtolower( $moduleDetails[ 'module' ][ 'namespace' ] ) . '-' . $moduleDetails[ 'module' ][ 'version' ] . '.zip' 
        )->deleteFileAfterSend( true );
    }
}
