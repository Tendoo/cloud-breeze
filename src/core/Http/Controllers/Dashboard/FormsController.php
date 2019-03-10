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
            case 'dashboard.profile.security': 
                return Field::userSecurityFields();
            break;
            case 'dashboard.profile.general': 
                return Field::userGeneralFields();
            break;
            case 'dashboard.settings.general': 
                return Field::generalSettings();
            break;
            case 'dashboard.settings.registration': 
                return Field::registration();
            break;
            case 'dashboard.settings.email': 
                return Field::emailSettingsFields();
            break;
            case 'dashboard.settings.recaptcha': 
                return Field::recaptchaFields();
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
         * proceed to saving the form
         */
        switch( $namespace ) {
            case 'dashboard.profile.general':  
            case 'dashboard.profile.security':  
                /**
                 * this should actually be save separately 
                 * on a specific service
                 */
                return $this->__saveProfile( $request->only([ 'email', 'password', 'old_password' ]) );
            break;
            case 'dashboard.settings.general':  
            case 'dashboard.settings.registration':  
            case 'dashboard.settings.email':  
                /**
                 * this should actually be save separately 
                 * on a specific service
                 */
                return $this->__saveSettings( $request );
            break;
        }
    }

    /**
     * Save settings
     * @return json
     */
    private function __saveSettings( Request $request )
    {
        $inputs     =   $request->except([ '_token', '_route', '_radio', '_checkbox', '_previous' ]);

        /**
         * Before ssaving an option
         * we might trigger an even so that 
         * it can be cauth
         */
        // $inputs     =   Hook::filter( 'before.update.options', $inputs );
        
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

        return $response   =   [
            'status'    =>  'success',
            'message'   =>  __( 'The options has been saved.' )
        ];
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