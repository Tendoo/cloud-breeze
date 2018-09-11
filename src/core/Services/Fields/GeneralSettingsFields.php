<?php
namespace Tendoo\Core\Services\Fields;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Facades\Field;

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
        
        $enable_maintenance                  =   new \StdClass;
        $enable_maintenance->name            =   'enable_maintenance';
        $enable_maintenance->label           =   __( 'Maintenance Status' );
        $enable_maintenance->type            =   'switch';
        $enable_maintenance->value           =   $options->get( $enable_maintenance->name );
        $enable_maintenance->options         =   [
            'true'   =>  __( 'Enabled' )
        ];
        $enable_maintenance->description  =   __( 'Only Administrator will be allowed to login and registration will be disabled.' );

        return [ $app_name, $timezone, $multisite, $enable_maintenance ];
    }

    public static function registration()
    {
        $options    =   app()->make( 'Tendoo\Core\Services\Options' );

        $allow_registration                  =   new \StdClass;
        $allow_registration->name            =   'allow_registration';
        $allow_registration->label           =   __( 'Open Registration' );
        $allow_registration->type            =   'switch';
        $allow_registration->value           =   $options->get( $allow_registration->name );
        $allow_registration->description     =   __( 'Let anyone sees the registration page and register an account' );
        $allow_registration->options         =   [
            'true'   =>  __( 'Allow registration' )
        ];
        
        $allow_login                  =   new \StdClass;
        $allow_login->name            =   'allow_login';
        $allow_login->label           =   __( 'Allow Login' );
        $allow_login->type            =   'switch';
        $allow_login->value           =   $options->get( $allow_login->name );
        $allow_login->description     =   __( 'Allow login for registered users' );
        $allow_login->options         =   [
            'true'   =>  __( 'Allow' )
        ];

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
        
        $notifyAfterRegistration                    =   new \StdClass;
        $notifyAfterRegistration->name              =   'registration_notification';
        $notifyAfterRegistration->label             =   __( 'Registration Notification' );
        $notifyAfterRegistration->type              =   'select';
        $notifyAfterRegistration->desccription      =   __( 'Notify the administrator each time a new user is registering.' );
        $notifyAfterRegistration->options           =   [
            'no'    =>  __( 'No' ),
            'yes'   =>  __( 'Yes' )
        ];
        $notifyAfterRegistration->value             =   $options->get( $notifyAfterRegistration->name );

        return [ 
            $allow_registration, 
            $allow_login,
            $allow_password_recovery, 
            $reset_activation_link, 
            $validate_users, 
            $register_as, 
            $notifyAfterRegistration
        ];
    }

    /**
     * Email Settings Fields
     * @return void
     */
    public static function emailSettingsFields()
    {
        $options                    =   app()->make( 'Tendoo\Core\Services\Options' );

        $email_type                 =   new \StdClass;
        $email_type->name           =   'app_mail_driver';
        $email_type->label          =   __( 'Email Driver' );
        $email_type->type           =   'select';
        $email_type->options        =   [
            'disable'  =>  __( 'Disable' ),
            'smtp'  =>  __( 'SMTP' ),
            'mandrill'  =>  __( 'Mandrill' ),
            'mailgun'  =>  __( 'Mailgun' ),
            'sendmail'  =>  __( 'Sendmail' ),
            'ses'  =>  __( 'SES' ),
            'sparkpost'  =>  __( 'Sparkpost' ),
        ];

        $email_type->description      =   __( 'This will define the gateway used to send email.' );
        $email_type->placeholder      =   $email_type->label;
        $email_type->validation       =   'sometimes';
        $email_type->value            =   $options->get( $email_type->name );

        $mail_host                  =   new \stdClass;
        $mail_host->name            =   'app_mail_host';
        $mail_host->label           =   __( 'Mail Host' );
        $mail_host->type            =   'text';
        $mail_host->validation      =   'sometimes';
        $mail_host->description     =   __( 'Provide the Host for the current mail driver.' );
        $mail_host->value           =   $options->get( $mail_host->name );
        
        $mail_port                  =   new \stdClass;
        $mail_port->name            =   'app_mail_port';
        $mail_port->label           =   __( 'Mail Port' );
        $mail_port->type            =   'text';
        $mail_port->validation      =   'sometimes';
        $mail_port->description     =   __( 'Provide the port for the current mail driver.' );
        $mail_port->value           =   $options->get( $mail_port->name );
        
        $mail_from_address                  =   new \stdClass;
        $mail_from_address->name            =   'app_mail_from_address';
        $mail_from_address->label           =   __( 'Mail From Address' );
        $mail_from_address->type            =   'text';
        $mail_from_address->validation      =   'sometimes|email';
        $mail_from_address->description     =   __( 'Provide the mail address of the sender.' );
        $mail_from_address->value           =   $options->get( $mail_from_address->name );
        
        $mail_from_name                  =   new \stdClass;
        $mail_from_name->name            =   'app_mail_from_name';
        $mail_from_name->label           =   __( 'Mail From Name' );
        $mail_from_name->type            =   'text';
        $mail_from_name->validation      =   'sometimes';
        $mail_from_name->description     =   __( 'Provide the mail name of the sender.' );
        $mail_from_name->value           =   $options->get( $mail_from_name->name );

        $fields     =   [ $email_type, $mail_host, $mail_from_address, $mail_from_name ];

        /**
         * if the driver is smtp
         * let's provide username for the driver
         */
        if ( $options->get( 'app_mail_driver' ) === 'smtp' ) {
            $mail_smtp_username                  =   new \stdClass;
            $mail_smtp_username->name            =   'app_mail_smtp_username';
            $mail_smtp_username->label           =   __( 'SMTP Username' );
            $mail_smtp_username->type            =   'text';
            $mail_smtp_username->validation      =   'sometimes';
            $mail_smtp_username->description     =   __( 'Provide the username of the smtp.' );
            $mail_smtp_username->value           =   $options->get( $mail_smtp_username->name );
            
            $mail_smtp_password                  =   new \stdClass;
            $mail_smtp_password->name            =   'app_mail_smtp_password';
            $mail_smtp_password->label           =   __( 'SMTP Password' );
            $mail_smtp_password->type            =   'password';
            $mail_smtp_password->validation      =   'sometimes';
            $mail_smtp_password->description     =   __( 'Provide the password of the smtp.' );
            $mail_smtp_password->value           =   $options->get( $mail_smtp_password->name );

            $fields     =   array_merge( $fields, [ $mail_smtp_username, $mail_smtp_password ]);
        }

        return $fields;
    }
}