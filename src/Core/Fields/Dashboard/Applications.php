<?php
namespace Tendoo\Core\Fields\Dashboard;

use Tendoo\Core\Models\Application;
use Illuminate\Validation\Rule;

class Applications 
{
    public function getFields( $entry = null )
    {
        $fields     =   [
            $this->name( $entry ),
            $this->active( $entry ),
            $this->clientKey( $entry ),
            $this->secretKey( $entry ),
            $this->callback( $entry ),
            $this->description( $entry ),
        ];

        /**
         * Let's fill back the fields
         */
        if ( $entry instanceof Application ) {
            foreach( $fields as &$field ) {
                if ( isset( $entry->{$field->name} ) ) {
                    $field->value   =   $entry->{$field->name};
                }
            }
        }

        return $fields;
    }

    /**
     * return password field
     * @return object of field
     */
    private function name()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'name';
        $Field->type            =   'text';
        $Field->label           =   __( 'Name' );
        $Field->placeholder     =   __( 'Application Name' );
        $Field->validation      =   'required|min:5';
        return $Field;
    }

    /**
     * return checkbox field
     * @return object of field
     */
    private function active()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'active';
        $Field->type            =   'select';
        $Field->label           =   __( 'Status' );
        $Field->validation      =   'required';
        $Field->options         =   [
            [
                'label'     =>  __( 'Active' ),
                'value'     =>  1
            ], [
                'label'     =>  __( 'Not Active' ),
                'value'     =>  0
            ]
        ];
        $Field->description     =   __( 'If an application is not active it won\'t be available on Oauth Service' );
        return $Field;
    }

    /**
     * return password confirm field
     * @return object of field
     */
    private function clientKey( $entry )
    {
        // Password Confir;
        $Field  =   new \StdClass;
        $Field->name            =   'client_key';
        $Field->type            =   'text';
        $Field->label           =   __( 'Client Key' );
        $Field->placeholder     =   __( 'Client Key' );
        $Field->description     =   __( 'Leave Empty and the system will generate a random client key.' );

        if ( $entry == null ) {
            $Field->validation      =   'unique:tendoo_apps';
        } else {
            $Field->validation      =   [ Rule::unique( 'tendoo_apps' )->ignore( $entry->id ) ];
        }

        return $Field;
    }

    /**
     * return callback fields
     * @return object of field
     */
    private function callback()
    {
        // Password Confir;
        $Field  =   new \StdClass;
        $Field->name            =   'callback_url';
        $Field->type            =   'text';
        $Field->label           =   __( 'Callback' );
        $Field->placeholder     =   __( 'Callback URL' );
        $Field->description     =   __( 'Where the Auth Request should redirect once approuved.' );
        $Field->validation      =   '';
        return $Field;
    }

    /**
     * return email field
     * @return object of field
     */
    private function secretKey( $entry )
    {
        $Field  =   new \StdClass;
        $Field->name            =   'client_secret';
        $Field->type            =   'text';
        $Field->label           =   __( 'Client Secret' );
        $Field->placeholder     =   __( 'Client Secret' );
        $Field->description     =   __( 'Leave Empty and the system will generate a random secret key.' );

        if ( $entry == null ) {
            $Field->validation      =   'unique:tendoo_apps';
        } else {
            $Field->validation      =   [ Rule::unique( 'tendoo_apps' )->ignore( $entry->id ) ];
        }

        return $Field;
    }

    /**
     * return email field
     * @return object of field
     */
    private function description()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'description';
        $Field->type            =   'textarea';
        $Field->validation      =   '';
        $Field->label           =   __( 'Description' );
        return $Field;
    }
}