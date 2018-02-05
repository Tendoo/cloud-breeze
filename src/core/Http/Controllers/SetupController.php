<?php

namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Event;
use Tendoo\Core\Services\Page;
use Tendoo\Core\Http\Requests\SetupDatabaseRequest;
use Tendoo\Core\Http\Requests\SetupAppDetailsRequest;
use Tendoo\Core\Services\Setup;

class SetupController extends Controller
{
    private $setup;

    public function __construct() 
    {
        $this->setup    =   new Setup;
    }

    /**
     * Display setup steps
     * @return void
     */
    public function steps( string $step = '' )
    {
        if ( $step == '' ) {
            Page::setTitle( 'Setup Tendoo CMS' );
            return view( 'tendoo::components.frontend.setup.step-home' );
        } else if ( $step == 'database' ) {
            Page::setTitle( __( 'Database Configuration' ) );
            return view( 'tendoo::components.frontend.setup.step-database' );
        } else if ( $step == 'app-details' ) {
            Page::setTitle( __( 'Database Configuration' ) );
            return view( 'tendoo::components.frontend.setup.step-app-details' );
        }
    }

    /**
     * Post Database details
     * @since 1.0
     */
    public function post_database( SetupDatabaseRequest $request )
    {
        $errors = $this->setup->saveDatabaseSettings( $request );
        
        if ( $errors !== true ) {
            $validator    =   Validator::make( $request->all(), [] );
            $validator->errors()->add( $errors[ 'name' ], $errors[ 'message' ] );
            return redirect()->route( 'setup.step', [ 'step' => 'database' ])->withErrors( $validator );
        }

        // the setup is successful
        return redirect()->route( 'setup.step', [ 'step' => 'app-details' ]);
    }

    /**
     * Post App details
     * @since 1.0
     */
    public function post_appdetails( SetupAppDetailsRequest $request )
    {
        $this->setup->runMigration( $request );

        // fire event when database is installed
        Event::fire( 'after.setup.app', $request );

        return redirect()->route( 'login.index' );
    }
}
