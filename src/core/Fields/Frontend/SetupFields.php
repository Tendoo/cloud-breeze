<?php
namespace Tendoo\Core\Fields\Frontend;

class SetupFields
{
    /**
     * Setup Applications Fields
     * @return array
     */
    public static function setupAppDetails()
    {
        $Fields                 =   [];

        // User Name
        $Field  =   new \StdClass;
        $Field->name            =   'username';
        $Field->type            =   'text';
        $Field->label           =   __( 'Username' );
        $Field->placeholder     =   __( 'Username' );
        $Field->description     =   __( 'Provide the name of the administrator.' );
        $Field->value           =   __( 'Admin' );
        $Field->validation      =   'required|min:5';
        $Fields[]               =   $Field;
        
        // User Name
        $Field  =   new \StdClass;
        $Field->name            =   'email';
        $Field->type            =   'text';
        $Field->label           =   __( 'Email' );
        $Field->placeholder     =   __( 'Email' );
        $Field->description     =   __( 'Provide the email for the administrator.' );
        $Field->validation      =   'required|email';
        $Fields[]               =   $Field;
        
        // Password
        $Field  =   new \StdClass;
        $Field->name            =   'password';
        $Field->type            =   'password';
        $Field->label           =   __( 'Password' );
        $Field->placeholder     =   __( 'Password' );
        $Field->description     =   __( 'Administrator password.' );
        $Field->validation      =   'required|min:6';
        $Fields[]               =   $Field;

        // Application Name
        $Field  =   new \StdClass;
        $Field->name            =   'application_name';
        $Field->type            =   'text';
        $Field->label           =   __( 'Application Name' );
        $Field->placeholder     =   __( 'Application Name' );
        $Field->description     =   __( 'A short name which describe your application.' );
        $Field->value         =   __( 'Tendoo Application' );
        $Field->validation      =   'required|min:6';
        $Fields[]               =   $Field;
        
        // Password Confirm
        $Field  =   new \StdClass;
        $Field->name            =   'confirm';
        $Field->type            =   'password';
        $Field->label           =   __( 'Confirm' );
        $Field->placeholder     =   __( 'Confirm' );
        $Field->description     =   __( 'Confirm administrator password.' );
        $Field->validation      =   'same:password';
        $Fields[]               =   $Field;

        return $Fields;
    }
}