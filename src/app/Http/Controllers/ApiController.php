<?php

namespace Tendoo\App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Tendoo\App\Servies\Modules;

class ApiController extends Controller
{
    /**
     * get All
     * @return json
     */
    public function getAll( $resource )
    {
        /**
         * Load route and pass resource loaded
         */
        $details    =   Event::fire( 'before.loading.api', $resource );
        
        if ( count( $details ) == 1 ) {

            return [
                'entries'   =>  $details[0]->model::all(),
            ];

        } else if ( count( $details ) > 1 ) {

            /**
             * The resource is declared more that once. We don't know what to procees first.
             */
            return response([
                'status'    =>   'failed',
                'message'   =>  'the resource is declared more that once',
                'declared'  =>  $details
            ], 400 );
            
        } else {

            /**
             * If resource is not handled
             */
            return response([
                'status'    =>   'failed',
                'message'   =>  'unable to locate the resource. This resource may not be handled'
            ], 400 );

        }
    }

    /**
     * get One
     * @return json
     */
    public function getOne( $resource, $id )
    {
        /**
         * Load route and pass resource loaded
         */
        $details    =   Event::fire( 'before.loading.api', $resource );
        if ( $details ) {
            $model  =   $details->model::find( $id );
            return $model->first();
        }

        /**
         * If resource is not handled
         */
        return response([
            'status'    =>   'failed',
            'message'   =>  'unable to locate the resource. This resource may not be handled'
        ], 400 );
    }
}
