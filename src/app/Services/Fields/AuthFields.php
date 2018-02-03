<?php
namespace Tendoo\App\Services\Fields;

trait AuthFields {
    /**
     * Return Login fields
     * @return array of login fields
     */
    public static function login()
    {
        $Fields                 =   [];

        // UserName
        $Field  =   new \StdClass;
        $Field->name            =   'username';
        $Field->type            =   'text';
        $Field->label           =   __( 'Username' );
        $Field->placeholder     =   __( 'Username' );
        $Field->validation      =   'required|min:5';
        $Fields[]               =   $Field;

        // Password
        $Field  =   new \StdClass;
        $Field->name            =   'password';
        $Field->type            =   'password';
        $Field->label           =   __( 'Password' );
        $Field->placeholder     =   __( 'Password' );
        $Field->validation      =   'required|min:6';
        $Fields[]               =   $Field;
        
        // Password
        $Field  =   new \StdClass;
        $Field->name            =   'remember_me';
        $Field->type            =   'checkbox';
        $Field->options         =   [
            '1'     =>  __( 'Remember Me' )
        ];
        $Fields[]               =   $Field;

        return $Fields;
    }

    /**
     * Register Fields
     * @return array of fields object
     */
    public static function register()
    {
        $Fields                 =   [];

        // UserName
        $Field  =   new \StdClass;
        $Field->name            =   'username';
        $Field->type            =   'text';
        $Field->label           =   __( 'Username' );
        $Field->placeholder     =   __( 'Username' );
        $Field->validation      =   'required|min:5|unique:users';
        $Fields[]               =   $Field;
        
        // Email
        $Field  =   new \StdClass;
        $Field->name            =   'email';
        $Field->type            =   'email';
        $Field->label           =   __( 'Email' );
        $Field->placeholder     =   __( 'Email' );
        $Field->validation      =   'required|email|unique:users';
        $Fields[]               =   $Field;

        // Password
        $Field  =   new \StdClass;
        $Field->name            =   'password';
        $Field->type            =   'password';
        $Field->label           =   __( 'Password' );
        $Field->placeholder     =   __( 'Password' );
        $Field->validation      =   'required|min:6';
        $Fields[]               =   $Field;

        // Password Confir;
        $Field  =   new \StdClass;
        $Field->name            =   'password_confirm';
        $Field->type            =   'password';
        $Field->label           =   __( 'Confirm Password' );
        $Field->placeholder     =   __( 'Confirm Password' );
        $Field->validation      =   'same:password';
        $Fields[]               =   $Field;

        return $Fields;
    }
}