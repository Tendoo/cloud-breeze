<?php
namespace Tendoo\Core\Services\Fields;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Event;
use Tendoo\Core\Facades\Hook;
use Illuminate\Validation\Rule;

trait ApplicationsFields {

    /**
     * return password field
     * @return object of field
     */
    private static function name()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'application_name';
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
    private static function active()
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
    private static function clientKey( $entry )
    {
        // Password Confir;
        $Field  =   new \StdClass;
        $Field->name            =   'client_key';
        $Field->type            =   'text';
        $Field->label           =   __( 'Client Key' );
        $Field->placeholder     =   __( 'Client Key' );
        $Field->description     =   __( 'Leave Empty and the system will generate a random client key.' );

        if ( $entry == null ) {
            $Field->validation      =   'unique:applications';
        } else {
            $Field->validation      =   [ Rule::unique( 'applications' )->ignore( $entry->id ) ];
        }

        return $Field;
    }

    /**
     * return callback fields
     * @return object of field
     */
    private static function callback()
    {
        // Password Confir;
        $Field  =   new \StdClass;
        $Field->name            =   'callback_url';
        $Field->type            =   'text';
        $Field->label           =   __( 'Callback' );
        $Field->placeholder     =   __( 'Callback URL' );
        $Field->description     =   __( 'Where the Auth Request should redirect once approuved.' );
        $Field->validation      =   'url';
        return $Field;
    }

    /**
     * return email field
     * @return object of field
     */
    private static function secretKey( $entry )
    {
        $Field  =   new \StdClass;
        $Field->name            =   'client_secret';
        $Field->type            =   'text';
        $Field->label           =   __( 'Client Secret' );
        $Field->placeholder     =   __( 'Client Secret' );
        $Field->description     =   __( 'Leave Empty and the system will generate a random secret key.' );

        if ( $entry == null ) {
            $Field->validation      =   'unique:applications';
        } else {
            $Field->validation      =   [ Rule::unique( 'applications' )->ignore( $entry->id ) ];
        }

        return $Field;
    }

    /**
     * return email field
     * @return object of field
     */
    private static function description()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'description';
        $Field->type            =   'textarea';
        $Field->validation      =   '';
        $Field->label           =   __( 'Description' );
        return $Field;
    }

    /**
     * Return Application Field for the Crud Purpose
     * Only Administrator should use theses fields.
     * @return array of Fields
     */
    public static function applicationsFields( $entry ) 
    {
        $fields     =   [
            self::name( $entry ),
            self::active( $entry ),
            self::clientKey( $entry ),
            self::secretKey( $entry ),
            self::callback( $entry ),
            self::description( $entry ),
        ];

        /**
         * Let's fill back the fields
         */
        if ( is_object( $entry ) ) {
            foreach( $fields as &$field ) {
                if ( isset( $entry->{$field->name} ) ) {
                    $field->value   =   $entry->{$field->name};
                }
            }
        }

        return $fields;
    }
}