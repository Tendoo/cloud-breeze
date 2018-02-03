<?php

namespace Tendoo\App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Tendoo\App\Services\Page;
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
        $message    =   Event::fire( 'before.showing.errors', $code );

        if ( $message ) {
            Page::setTitle( $message[0][ 'title' ] );
            return view( 'errors.show', $message[0] );
        }

        /**
         * In case nothing hook into that event. 
         * This error should never occur !!!
         */

        Page::setTitle( __( 'Lonely Event' ) );

        return view( 'errors.show', [
            'message'   =>  __( 'The event %s has run, but nothing has been hooked to it.' ),
            'title'     =>  __( 'Lonely Event' )
        ]);
    }
}
