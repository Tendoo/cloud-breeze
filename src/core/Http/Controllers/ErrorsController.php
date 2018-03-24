<?php

namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Tendoo\Core\Services\Page;
use Tendoo\Core\Facades\Hook;
class ErrorsController extends Controller
{
    /**
     * Show Specific errors
     * @param string error code
     * @return string view
     */
    public function show( $code )
    {
        /**
         * Trigger even before showing errors
         */
        $message    =   Hook::filter( 'errors.codes', $code, [] );

        if ( $message ) {
            Page::setTitle( $message[ 'title' ] );
            return view( 'tendoo::errors.show', $message );
        }

        /**
         * In case nothing hook into that event. 
         * This error should never occur !!!
         */

        Page::setTitle( __( 'Lonely Event' ) );

        return view( 'tendoo::errors.show', [
            'message'   =>  __( 'The event %s has run, but nothing has been hooked to it.' ),
            'title'     =>  __( 'Lonely Event' )
        ]);
    }
}
