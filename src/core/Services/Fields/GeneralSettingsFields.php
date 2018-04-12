<?php
namespace Tendoo\Core\Services\Fields;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Services\Helper;

trait GeneralSettingsFields
{
    public static function generalSettings()
    {
        $options                    =   app()->make( 'Tendoo\Core\Services\Options' );
        $app_name                   =   new \StdClass;
        $app_name->name             =   'app_name';
        $app_name->label            =   __( 'Application Name' );
        $app_name->type             =   'text';
        $app_name->description      =   __( 'This name will be used to identify the application.' );
        $app_name->placeholder      =   $app_name->label;
        $app_name->validation       =   'sometimes|required|min:5';
        $app_name->value            =   $options->get( $app_name->name );

        $timezone                   =   new \StdClass;
        $timezone->name             =   'app_timezone';
        $timezone->label            =   __( 'TimeZone' );
        $timezone->type             =   'select';
        $timezone->description      =   __( 'This will see the default time used over the application.' );
        $timezone->options          =   generate_timezone_list();
        $timezone->value            =   $options->get( $timezone->name );

        $multisite                  =   new \StdClass;
        $multisite->name            =   'multisite_enabled';
        $multisite->label           =   __( 'Enable the multisite' );
        $multisite->type            =   'select';
        $multisite->description     =   __( 'Enable a multi site feature which let you have multiple instance of the application with on database.' );
        $multisite->options         =   [ 'no' => __( 'No' ), 'yes' => __( 'Yes' ) ];
        $multisite->value           =   $options->get( $multisite->name );         

        return [ $app_name, $timezone, $multisite ];
    }

    public static function registration()
    {
        $options    =   app()->make( 'Tendoo\Core\Services\Options' );

        $allow_registration                  =   new \StdClass;
        $allow_registration->name            =   'allow_registration';
        $allow_registration->label           =   __( 'Open Registration' );
        $allow_registration->type            =   'switch';
        $allow_registration->value           =   $options->get( $allow_registration->name );
        $allow_registration->options         =   [
            'true'   =>  __( 'Allow registration' )
        ];
        $allow_registration->description  =   __( 'Let anyone sees the registration page and register an account' );

        $allow_password_recovery                  =   new \StdClass;
        $allow_password_recovery->name            =   'allow_recovery';
        $allow_password_recovery->label           =   __( 'Allow Password Recovery' );
        $allow_password_recovery->type            =   'switch';
        $allow_password_recovery->value           =   $options->get( $allow_password_recovery->name );
        $allow_password_recovery->options         =   [
            'enable_recovery'        =>  __( 'Enable Password Recovery' )
        ];

        $allow_password_recovery->description  =   __( 'Let user reset their password in case the lost it, from the login page.' );

        $validate_users                  =   new \StdClass;
        $validate_users->name            =   'validate_users';
        $validate_users->label           =   __( 'Validate Users' );
        $validate_users->type            =   'switch';
        $validate_users->value           =   $options->get( $validate_users->name );
        $validate_users->options         =   [
            'true'   =>  __( 'Set all users as active after registration' )
        ];
        $validate_users->description  =   __( 'Everytime a user will register, his account will be set as active immediately' );
        
        $reset_activation_link                  =   new \StdClass;
        $reset_activation_link->name            =   'reset_activation_link';
        $reset_activation_link->label           =   __( 'Resend Activation Link' );
        $reset_activation_link->type            =   'switch';
        $reset_activation_link->value           =   $options->get( $reset_activation_link->name );
        $reset_activation_link->options         =   [
            'true'   =>  __( 'Display a link to receive the activation email.' )
        ];
        $reset_activation_link->description  =   __( 'If the user didn\'t get the email, he\'ll be able to receive another email if his account is not activated.' );

        $register_as                    =   new \StdClass;
        $register_as->name              =   'register_as';
        $register_as->label             =   __( 'Register As' );
        $register_as->type              =   'select';
        $register_as->desccription      =   __( 'Define the default role when user register' );
        $register_as->options           =   Helper::toOptions( Role::all(), [ 'id', 'name' ]);
        $register_as->value             =   $options->get( $register_as->name );

        return [ $allow_registration, $allow_password_recovery, $reset_activation_link, $validate_users, $register_as ];
    }
}