<?php

namespace Tendoo\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Tendoo\Core\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Event;
use Tendoo\Core\Http\Requests\OptionsRequest;
use Tendoo\Core\Facades\Hook;

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
     * Post Options
     * receive and treat options send
     * @todo review
     * @param void
     * @return void
     */
    public function postOptions( OptionsRequest $request )
    {
        $inputs     =   $request->except([ '_token', '_route', '_radio', '_checkbox', '_previous' ]);

        /**
         * Before ssaving an option
         * we might trigger an even so that 
         * it can be cauth
         */
        $inputs     =   Hook::filter( 'before.update.options', $inputs );
        
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
            if ( is_bool( $value ) ) {
                $value === true ? $this->options->set( $key, $value ) : $this->options->delete( $key );
            } else {
                $this->options->set( $key, $value );
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

    /**
     * get specific setings
     * @param string settings namespace
     * @return json
     */
    public function get( $namespace )
    {
        return Hook::filter( 'dashboard.settings', [], $namespace );
    }
}
