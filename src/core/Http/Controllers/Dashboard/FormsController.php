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
        switch( $namespace ) {
            case 'dashboard.users.create':
            case 'dashboard.users.edit':
                return [
                    'url'   =>  [
                        'post'  =>  route( 'dashboard.post.user' ),
                        'put'   =>  route( 'dashboard.put.user', [
                            'id'    =>  $index
                        ]),
                    ],
                    'fields'    =>  Field::setupUserFields( User::find( $index ) )
                ];
            break;
            case 'dashboard.profile': 
                return [
                    [
                        'type'          =>  'text',
                        'name'          =>  'email',
                        'label'         =>  __( 'Email' ),
                        'validation'    =>  'sometimes|email',
                        'value'         =>  Auth::user()->email
                    ], [
                        'type'          =>  'password',
                        'name'          =>  'old_password',
                        'label'         =>  __( 'Old Password' ),
                        'validation'    =>  'sometimes|min:6'
                    ], [
                        'type'          =>  'password',
                        'name'          =>  'password',
                        'label'         =>  __( 'New Password' ),
                        'validation'    =>  'sometimes|min:6'
                    ], [
                        'type'          =>  'password',
                        'name'          =>  'confirm_password',
                        'label'         =>  __( 'Confirm Password' ),
                        'validation'    =>  'sometimes|min:6|same:password'
                    ]
                    ];
            break;
        }
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
            $validation[ $field[ 'name' ] ]     =   $field[ 'validation' ];
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
         * proceed to saving the form
         */
        switch( $namespace ) {
            case 'dashboard.profile':  
                /**
                 * this should actually be save separately 
                 * on a specific service
                 */
                return $this->__saveProfile( $request->only([ 'email', 'password', 'old_password' ]) );
            break;
        }
    }

    /**
     * Save user Profile
     * @return void
     */
    private function __saveProfile( $data ) 
    {
        $user   =   User::find( Auth::user()->id );

        if ( isset( $data[ 'email' ] ) ) {
            /**
             * let's check if the email is used
             */
            $mayExists  =   User::where( 'email', $data[ 'email' ] )->first();

            /**
             * if the email already exists
             * we should stop proceecing the script
             */
            if( $mayExists instanceof User && $mayExists->id !== Auth::user()->id ) {
                return response()->json([
                    'status'    =>  'failed',
                    'message'   =>  __( 'Unable to proceed '),
                    'errors'    =>  [
                        'email' =>  [
                            __( 'This email is already in use 🚫!' )
                        ]
                    ]
                ], 403 );
            }
        }

        /**
         * Make sure the old password if it's provided
         * matche the currently saved password
         */
        if ( isset( $data[ 'old_password' ] ) && Hash::check( $data[ 'old_password' ], $user->password ) ) {
            return response()->json([
                'status'    =>  'failed',
                'message'   =>  __( 'Unable to proceed '),
                'errors'    =>  [
                    'old_password' =>  [
                        __( 'The old password is not correct 👮!' )
                    ]
                ]
            ], 403 );
        }
        // because we won't save it
        unset( $data[ 'old_password' ] );

        /**
         * loop the field 
         * to save them and make sure to 
         * encrypt the password
         */
        foreach( $data  as $key => $value ) {
            if ( in_array( $key, [ 'password' ] ) ) {
                $user->{$key}   =   bcrypt( $value );
            } else {
                $user->{$key}   =   $value;
            }
        }

        $user->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The user profile has been saved 👍.' )
        ];
    }
}