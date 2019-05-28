<?php
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Oauth;
use Tendoo\Core\Models\Option as OptionModel;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Http\Controllers\DashboardController;
use Tendoo\Core\Facades\Hook;
use Validator;

class FormsController extends DashboardController 
{
    private $fields;
    public function __construct()
    {
        parent::__construct();

        $this->middleware( function( $request, $next ) {
            $this->fields   =   app()->make( Field::class );
            return $next( $request );
        });
    }

    /**
     * get field for a specific namespace
     * @param string
     * @return array of fields
     */
    public function getForm( $namespace, $index = null ) 
    {
        return Hook::filter( 'dashboard.forms', [], $namespace, $index );
    }

    /**
     * save form
     * @param string namespace
     * @param int entry index
     */
    public function postForm( $namespace, $index = null, Request $request ) {
        /**
         * get form first as they are 
         * defined on the getForm method
         */
        $fields     =   $this->getForm( $namespace );

        /**
         * extract fields validation
         */
        $validation     =   [];
        foreach( $fields as $field ) {
            if ( isset( $field->validation ) ) {
                $validation[ $field->name ]     =   $field->validation;
            }
        }

        $validationResult   =   Validator::make( $request->all(), $validation );

        if( $validationResult->fails() ) {
            return response()->json([
                'status'    =>  'failed',
                'message'   =>  __( 'Unable to proceed the form has some errors 🚫!' ),
                'errors'    =>  $validationResult->errors()
            ], 403 );
        }

        /**
         * let's save the form
         * and return a result 
         */
        $result     =   Hook::filter( 
            'dashboard.save.form', 
            $namespace, 
            compact( 'request', 'validationResult', 'validation' ), 
            false 
        );        

        return $result ?? response()->json([
            'status'    =>  'failed',
            'message'   =>  __( 'Unhandled POST form' )
        ], 401 );
    }
}