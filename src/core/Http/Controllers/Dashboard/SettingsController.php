<?php

namespace Tendoo\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Tendoo\Core\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Event;
use Tendoo\Core\Http\Requests\OptionsRequest;

class SettingsController extends DashboardController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware( function( $request, $next ) {
            $this->checkPermission( 'manage.options' );
            return $next( $request );
        });
    }

    /**
     * Dashboard Settings
     * those settings includes tabs
     * @return view
     */
    public function dashboardSettings( $tab = 'general' )
    {
        $this->setTitle( __( 'Registration Settings' ) );
        return view( 'tendoo::components.backend.settings', compact( 'tab' ) );
    }

    /**
     * Post Options
     * receive and treat options send
     * @param void
     * @return void
     */
    public function postOptions( OptionsRequest $request )
    {
        $inputs     =   $request->except([ '_token', '_route', '_radio', '_checkbox', '_previous' ]);
        
        /**
         * If the field is defined as a radio or  checkbox field, then
         * it's deleted from the db to define new options. 
         * This is performed specially in case where the user 
         * disable a switch field or checkbox
         */

        // deleting _checkbox field
        foreach( ( array )  $request->input( '_checkbox' ) as $key ) {
            if ( in_array( $key, ( array ) $request->input( '_radio' ) ) || in_array( $key, ( array ) $request->input( '_checkbox' ) ) ) {
                $this->options->delete( $key );
            }
        }

        // deleting _radio field
        foreach( ( array ) $request->input( '_radio' ) as $key ) {
            if ( in_array( $key, ( array ) $request->input( '_radio' ) ) ) {
                $this->options->delete( $key );
            }
        }

        /**
         * Loop options and saved it
         * to the option table
         */
        foreach ( $inputs as $key => $value ) {
            /**
             * Saving/updating new value to the database
             */
            if ( ! is_array( $value ) ) {
                $this->options->set( $key, $value );
            } else {
                foreach ( $value as $_optionName => $_optionValue ) {
                    $this->options->set( $key . "[{$_optionName}]", $_optionValue, true ); // set as array
                }
            }
        }

        $response   =   [
            'status'    =>  'success',
            'message'   =>  __( 'The options has been saved.' )
        ];

        /**
         * Redirect to previous route
         */
        if ( $request->ajax() ) {
            return $response;
        } else {
            return redirect( $request->input( '_previous' ) )
                ->with( $response );
        }
    }
}
