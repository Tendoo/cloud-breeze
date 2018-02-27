<?php

namespace Tendoo\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Tendoo\Core\Http\Controllers\TendooController;
use Tendoo\Core\Http\Requests\CrudPostRequest;
use Tendoo\Core\Http\Requests\CrudPutRequest;
use Tendoo\Core\Facades\Hook;
use Illuminate\Support\Facades\Event;

class CrudController extends TendooController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware( function( $request, $next ) {
            return $next( $request );
        });
    }

    /**
     * CRUD delete we expect this request to be 
     * provided by an Ajax Request
     * @param void
     * @return view
     */
    public function crudDelete( $namespace, $id )
    {
        /**
         * Catch event before deleting user
         */
        $crud_config        =   Hook::filter( 'register.crud', null, $namespace, $id );
        $resource           =   new $crud_config;

        if ( empty( $resource ) ) {
            return response([
                'status'    =>  'danger',
                'message'   =>  __( 'The crud resource is either not handled by the system or by any installed module.' )
            ], 403 );
        }

        /**
         * Run the filter before deleting
         */
        if ( is_callable( $resource->beforeDelete ) ) {

            /**
             * the callback should return an empty value to proceed.
             */
            if( ! empty( $response = $resource->beforeDelete( $namespace, $id ) ) ) {
                return $response;
            }
        }

        /**
         * We'll retreive the model and delete it
         */
        $model          =   $resource[ 'model' ];
        $model::find( $id )->delete();

        Event::fire( 'after.deleting.crud', $namespace, $id );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The entry has been successfully delete.' )
        ];
    }

    /**
     * Dashboard Crud POST
     * receive and treat POST request for CRUD Resource
     * @param void
     * @return void
     */
    public function crudPost( String $namespace, CrudPostRequest $request )
    {
        $crud_config        =   Hook::filter( 'register.crud', null, $namespace );
        $resource           =   new $crud_config;

        /**
         * In case nothing handle this crud
         */
        if ( empty( $resource ) ) {
            return redirect()->route( 'errors', [ 'code' => 'unhandled-crud-resource' ]);
        }

        $model      =   $resource->getModel();
        $entry      =   new $model;

        /**
         * We might give the capacity to update/change stuff 
         * this behaviour shouldn't only be allowed to the CRUD resource
         * but it should be hookable.
         */
        $inputs     =   Hook::filter( 'filter.crud.post', $request->all(), $namespace );
        
        foreach ( $inputs as $name => $value ) {

            /**
             * If submitted field are part of fillable fields
             */
            if ( in_array( $name, $resource->getFillable() ) ) {

                /**
                 * We might give the capacity to filter fields 
                 * before storing. This can be used to apply specific formating to the field.
                 */
                if ( method_exists( $resource, 'filterPost' ) ) {
                    $entry->$name   =   $resource->filterPost( $value, $name );
                } else {
                    $entry->$name   =   $value;
                }
            }
        }

        $entry->save();

        /**
         * Create an event after crud post
         */
        Event::fire( 'after.crudPost', $entry );

        /**
         * Once the request is done, 
         * we might redirect the user to the users list page
         */

        /**
         * @todo adding a link to edit the new entry
         */

        return redirect()->route( $resource->getMainRoute() )->with([
            'status'    =>  'success',
            'message'   =>  __( 'An new entry has been successfully created.' )
        ]);
    }

    /**
     * Dashboard CRUD PUT
     * receive and treat a PUT request for CRUD resource
     * @param string resource namespace
     * @param int primary key
     * @param object request : CrudPutRequest
     * @return void
     */
    public function crudPut( String $namespace, $entry, CrudPutRequest $request  ) 
    {
        /**
         * Trigger event before submitting put request for CRUD resource
         */
        $crud_config        =   Hook::filter( 'register.crud', null, $namespace );
        $resource           =   new $crud_config;

        /**
         * In case nothing handle this crud
         */
        if ( empty( $resource ) ) {
            return redirect()->route( 'errors', [ 'code' => 'unhandled-crud-resource' ]);
        }
        
        $model      =   $resource->getModel();
        $entry      =   $model::find( $entry );

        /**
         * Filter POST input
         */
        $inputs         =   Hook::filter( 'filter.crud.put', $request->all(), $namespace );

        foreach ( $inputs as $name => $value ) {

            /**
             * If submitted field are part of fillable fields
             * The field should not be null
             */
            if ( in_array( $name, $resource->getFillable() ) && $value !== null ) {

                /**
                 * We might give the capacity to filter fields 
                 * before storing. This can be used to apply specific formating to the field.
                 */
                if ( method_exists( $resource, 'filterPut' ) ) {
                    $entry->$name   =   $resource->filterPut( $value, $name );
                } else {
                    $entry->$name   =   $value;
                }
            }
        }

        $entry->save();

        /**
         * Create an event after crud post
         */
        Event::fire( 'after.crudPut', $entry );

        /**
         * Once the request is done, 
         * we might redirect the user to the users list page
         */

        /**
         * @todo adding a link to edit the new entry
         */

        return redirect()->route( $resource->getMainRoute() )->with([
            'status'    =>  'success',
            'message'   =>  __( 'An new entry has been successfully updated.' )
        ]);
    }

    /**
     * CRUD Bulk Action
     * @param string namespace
     * @return void
     */
    public function crudBulkActions( String $namespace, Request $request )
    {
        /**
         * Build CRUD resource
         */
        $crud_config        =   Hook::filter( 'register.crud', null, $namespace );
        $resource           =   new $crud_config;
        
        /**
         * Check if an entry is selected, 
         * else throw an error
         */
        if ( $request->input( 'entry_id' ) == null ) {
            return redirect()->route( $resource->getMainRoute() )->with([
                'status'    =>  'danger',
                'message'   =>  __( 'You must select an entry.' )
            ]);
        }

        if ( $request->input( 'action' ) == null ) {
            return redirect()->route( $resource->getMainRoute() )->with([
                'status'    =>  'danger',
                'message'   =>  __( 'You must select an action to perform.' )
            ]);
        }

        $response           =   $resource->bulkDelete( $request );
        $errors             =   [];


        if ( $response[ 'success' ] > 0 ) {
            $errors[ 'success' ]    =   sprintf( $resource->bulkDeleteSuccessMessage, $response[ 'success' ]);
        } 
        
        if ( $response[ 'danger' ] > 0 ) {
            $errors[ 'danger' ]     =   sprintf( $resource->bulkDeleteDangerMessage, $response[ 'danger' ]);
        }

        return redirect()->route( $resource->getMainRoute() )->with( $errors );
    }
}
