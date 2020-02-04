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

    public static function databaseDetails()
    {
        $Fields                 =   [];

        // Database
        $HostName  =   new \StdClass;
        $HostName->name             =   'host';
        $HostName->type             =   'text';
        $HostName->label            =   __( 'Host' );
        $HostName->placeholder      =   __( 'Host' );
        $HostName->description      =   __( 'provide the host anme.' );
        $HostName->value            =   'localhost';
        $HostName->validation       =   'required|min:5';
        $Fields[]                   =   $Database;

        // Database
        $Database  =   new \StdClass;
        $Database->name             =   'database';
        $Database->type             =   'text';
        $Database->label            =   __( 'Database' );
        $Database->placeholder      =   __( 'Database' );
        $Database->description      =   __( 'provide the database name.' );
        $Database->value            =   'cloud-breeze';
        $Database->validation       =   'required|min:5';
        $Fields[]                   =   $Database;

        // Username
        $Username  =   new \StdClass;
        $Username->name             =   'username';
        $Username->type             =   'text';
        $Username->label            =   __( 'Username' );
        $Username->placeholder      =   __( 'Username' );
        $Username->description      =   __( 'provide username having access to the database.' );
        $Username->value            =   __( 'root' );
        $Username->validation       =   'required|min:5';
        $Fields[]                   =   $Username;

        // Password
        $Password  =   new \StdClass;
        $Password->name             =   'password';
        $Password->type             =   'text';
        $Password->label            =   __( 'Password' );
        $Password->placeholder      =   __( 'Password' );
        $Password->description      =   __( 'provide username having access to the database.' );
        $Password->value            =   '';
        $Password->validation       =   'required|min:5';
        $Fields[]                   =   $Password;

        // Password
        $DbPrefix  =   new \StdClass;
        $DbPrefix->name             =   'db_prefix';
        $DbPrefix->type             =   'text';
        $DbPrefix->label            =   __( 'DB Prefix' );
        $DbPrefix->placeholder      =   __( 'DB Prefix' );
        $DbPrefix->description      =   __( 'provide the database prefix.' );
        $DbPrefix->value            =   'cb_';
        $DbPrefix->validation       =   'required|min:5';
        $Fields[]                   =   $Password;
    }
}