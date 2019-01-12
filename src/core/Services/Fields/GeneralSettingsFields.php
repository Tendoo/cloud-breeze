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
        $timezone->validation       =   'required';
        $timezone->description      =   __( 'This will see the default time used over the application.' );
        $timezone->options          =   Helper::kvToJsOptions( generate_timezone_list() );
        $timezone->value            =   $options->get( $timezone->name );

        $multisite                  =   new \StdClass;
        $multisite->name            =   'multisite_enabled';
        $multisite->label           =   __( 'Enable the multisite' );
        $multisite->type            =   'switch';
        $multisite->validation      =   'required';
        $multisite->description     =   __( 'Enable a multi site feature which let you have multiple instance of the application with on database.' );
        $multisite->options         =   Helper::booleanToggle();
        $multisite->value           =   ( bool ) intval( $options->get( $multisite->name ) );        
        
        $enable_maintenance                  =   new \StdClass;
        $enable_maintenance->name            =   'enable_maintenance';
        $enable_maintenance->label           =   __( 'Maintenance Status' );
        $enable_maintenance->type            =   'switch';
        $enable_maintenance->value           =   ( bool ) intval( $options->get( $enable_maintenance->name ) );
        $enable_maintenance->options         =   Helper::booleanToggle();
        $enable_maintenance->description  =   __( 'Only Administrator will be allowed to login and registration will be disabled.' );

        return [ $app_name, $timezone, $multisite, $enable_maintenance ];
    }

    public static function registration()
    {
        $options    =   app()->make( 'Tendoo\Core\Services\Options' );

        $allow_registration                         =   new \StdClass;
        $allow_registration->name                   =   'allow_registration';
        $allow_registration->label                  =   __( 'Open Registration' );
        $allow_registration->type                   =   'switch';
        $allow_registration->value                  =   $options->get( $allow_registration->name );
        $allow_registration->description            =   __( 'Let anyone sees the registration page and register an account' );
        $allow_registration->options                =   Helper::booleanToggle();
        
        $app_restricted_login                       =   new \StdClass;
        $app_restricted_login->name                 =   'app_restricted_login';
        $app_restricted_login->label                =   __( 'Restrict Login For Admins' );
        $app_restricted_login->type                 =   'switch';
        $app_restricted_login->value                =   $options->get( $app_restricted_login->name );
        $app_restricted_login->description          =   __( 'Allow login for only administrators.' );
        $app_restricted_login->options              =   Helper::booleanToggle();
        
        $notify_password_reset                      =   new \StdClass;
        $notify_password_reset->name                =   'app_notify_password_reset';
        $notify_password_reset->label               =   __( 'Notify Password Reset' );
        $notify_password_reset->type                =   'switch';
        $notify_password_reset->value               =   $options->get( $notify_password_reset->name );
        $notify_password_reset->description         =   __( 'Notify administrators when somebody attempt to reset his account.' );
        $notify_password_reset->options             =   Helper::booleanToggle();

        $allow_password_recovery                    =   new \StdClass;
        $allow_password_recovery->name              =   'allow_recovery';
        $allow_password_recovery->label             =   __( 'Allow Password Recovery' );
        $allow_password_recovery->type              =   'switch';
        $allow_password_recovery->value             =   $options->get( $allow_password_recovery->name );
        $allow_password_recovery->options           =   Helper::booleanToggle();
        $allow_password_recovery->description       =   __( 'Let user reset their password in case the lost it, from the login page.' );

        $validate_users                             =   new \StdClass;
        $validate_users->name                       =   'validate_users';
        $validate_users->label                      =   __( 'Validate Users' );
        $validate_users->type                       =   'switch';
        $validate_users->value                      =   $options->get( $validate_users->name );
        $validate_users->options                    =   Helper::booleanToggle();
        $validate_users->description                =   __( 'Everytime a user will register, his account will be set as active immediately' );
        
        $reset_activation_link                      =   new \StdClass;
        $reset_activation_link->name                =   'reset_activation_link';
        $reset_activation_link->label               =   __( 'Resend Activation Link' );
        $reset_activation_link->type                =   'switch';
        $reset_activation_link->value               =   $options->get( $reset_activation_link->name );
        $reset_activation_link->options             =   Helper::booleanToggle();
        $reset_activation_link->description         =   __( 'If the user didn\'t get the email, he\'ll be able to receive another email if his account is not activated.' );

        $register_as                                =   new \StdClass;
        $register_as->name                          =   'register_as';
        $register_as->label                         =   __( 'Register As' );
        $register_as->type                          =   'select';
        $register_as->desccription                  =   __( 'Define the default role when user register' );
        $register_as->options                       =   Helper::toJsOptions( Role::all(), [ 'id', 'name' ]);
        $register_as->value                         =   $options->get( $register_as->name );
        
        $notifyAfterRegistration                    =   new \StdClass;
        $notifyAfterRegistration->name              =   'registration_notification';
        $notifyAfterRegistration->label             =   __( 'Registration Notification' );
        $notifyAfterRegistration->type              =   'switch';
        $notifyAfterRegistration->validation        =   'sometimes';
        $notifyAfterRegistration->desccription      =   __( 'Notify the administrator each time a new user is registering.' );
        $notifyAfterRegistration->options           =   Helper::booleanToggle();
        $notifyAfterRegistration->value             =   $options->get( $notifyAfterRegistration->name );

        return [ 
            $allow_registration, 
            $app_restricted_login,
            $allow_password_recovery, 
            $reset_activation_link, 
            $notify_password_reset,
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

        $mail_driver                 =   new \StdClass;
        $mail_driver->name           =   'app_mail_driver';
        $mail_driver->label          =   __( 'Email Driver' );
        $mail_driver->type           =   'select';
        $mail_driver->options        =   [
            [
                'value'     =>  'disable',
                'label'     =>  __( 'Disable' )
            ],
            [
                'value'     =>  'mail',
                'label'     =>  __( 'Default PHP Mail' )
            ],
            [
                'value'     =>  'log',
                'label'     =>  __( 'Log' )
            ],
            [
                'value'     =>  'smtp',
                'label'     =>  __( 'SMTP' )
            ],
            [
                'value'     =>  'mandrill',
                'label'     =>  __( 'Mandrill' )
            ],
            [
                'value'     =>  'mailgun',
                'label'     =>  __( 'Mailgun' )
            ],
            [
                'value'     =>  'sendmail',
                'label'     =>  __( 'Sendmail' )
            ],
            [
                'value'     =>  'ses',
                'label'     =>  __( 'SES' )
            ],
            [
                'value'     =>  'sparkpost',
                'label'     =>  __( 'Sparkpost' )
            ],
        ];

        
        $mail_driver->description      =   __( 'This will define the gateway used to send email.' );
        $mail_driver->placeholder      =   $mail_driver->label;
        $mail_driver->validation       =   'sometimes';
        $mail_driver->value            =   $options->get( $mail_driver->name );
        
        if ( $options->get( 'app_mail_driver' ) === 'mail' ) {
            return [ $mail_driver ];
        }

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
        
        $mail_sendmail_path                  =   new \stdClass;
        $mail_sendmail_path->name            =   'app_sendmail_path';
        $mail_sendmail_path->label           =   __( 'SendMail path' );
        $mail_sendmail_path->type            =   'text';
        $mail_sendmail_path->validation      =   'sometimes';
        $mail_sendmail_path->description     =   __( 'Provide the path of the server o SendMail.' );
        $mail_sendmail_path->value           =   $options->get( $mail_from_name->name );

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
        
        $mail_encryption                  =   new \stdClass;
        $mail_encryption->name            =   'app_mail_encryption';
        $mail_encryption->label           =   __( 'Mail Encryption' );
        $mail_encryption->type            =   'text';
        $mail_encryption->validation      =   'sometimes';
        $mail_encryption->description     =   __( 'Provide the encryption for the gateaway selected.' );
        $mail_encryption->value           =   $options->get( $mail_encryption->name );
        
        $mail_mailgun_domain                  =   new \stdClass;
        $mail_mailgun_domain->name            =   'app_mail_mailgun_domain';
        $mail_mailgun_domain->label           =   __( 'Mailgun Domain' );
        $mail_mailgun_domain->type            =   'text';
        $mail_mailgun_domain->validation      =   'sometimes';
        $mail_mailgun_domain->description     =   __( 'Provide the mailgun domain.' );
        $mail_mailgun_domain->value           =   $options->get( $mail_mailgun_domain->name );
        
        $mail_mailgun_secret                  =   new \stdClass;
        $mail_mailgun_secret->name            =   'app_mail_mailgun_secret';
        $mail_mailgun_secret->label           =   __( 'Mailgun Secret' );
        $mail_mailgun_secret->type            =   'text';
        $mail_mailgun_secret->validation      =   'sometimes';
        $mail_mailgun_secret->description     =   __( 'Provide e mailgun secret.' );
        $mail_mailgun_secret->value           =   $options->get( $mail_mailgun_secret->name );
        
        $mail_sparkpost_driver                  =   new \stdClass;
        $mail_sparkpost_driver->name            =   'app_mail_' . 'sparkpost_driver';
        $mail_sparkpost_driver->label           =   __( 'Sparkpost Driver' );
        $mail_sparkpost_driver->type            =   'text';
        $mail_sparkpost_driver->validation      =   'sometimes';
        $mail_sparkpost_driver->description     =   __( 'Provide the sparkpost driver.' );
        $mail_sparkpost_driver->value           =   $options->get( $mail_sparkpost_driver->name );

        $mail_sparkpost_endpoint                  =   new \stdClass;
        $mail_sparkpost_endpoint->name            =   'app_mail_' . 'sparkpost_endpoint';
        $mail_sparkpost_endpoint->label           =   __( 'Sparkpost Endpoint' );
        $mail_sparkpost_endpoint->type            =   'text';
        $mail_sparkpost_endpoint->validation      =   'sometimes';
        $mail_sparkpost_endpoint->description     =   __( 'Provide the sparkpost endpoint' );
        $mail_sparkpost_endpoint->value           =   $options->get( $mail_sparkpost_endpoint->name );
        
        $mail_ses_key                  =   new \stdClass;
        $mail_ses_key->name            =   'app_mail_' . 'ses_key';
        $mail_ses_key->label           =   __( 'Ses key' );
        $mail_ses_key->type            =   'text';
        $mail_ses_key->validation      =   'sometimes';
        $mail_ses_key->description     =   __( 'Provide the SES key.' );
        $mail_ses_key->value           =   $options->get( $mail_ses_key->name );
        
        $mail_ses_secret                  =   new \stdClass;
        $mail_ses_secret->name            =   'app_mail_' . 'ses_secret';
        $mail_ses_secret->label           =   __( 'Ses Secret' );
        $mail_ses_secret->type            =   'text';
        $mail_ses_secret->validation      =   'sometimes';
        $mail_ses_secret->description     =   __( 'Provide the SES Secret key.' );
        $mail_ses_secret->value           =   $options->get( $mail_ses_secret->name );
        
        $mail_ses_region                  =   new \stdClass;
        $mail_ses_region->name            =   'app_mail_' . 'region';
        $mail_ses_region->label           =   __( 'Ses Region' );
        $mail_ses_region->type            =   'text';
        $mail_ses_region->validation      =   'sometimes';
        $mail_ses_region->description     =   __( 'Provide the SES Region.' );
        $mail_ses_region->value           =   $options->get( $mail_ses_region->name );

        return [ 
            $mail_driver,
            $mail_host,
            $mail_port,
            $mail_from_address, 
            $mail_from_name, 
            $mail_sendmail_path, 
            $mail_smtp_username, 
            $mail_smtp_password,
            $mail_encryption,
            $mail_mailgun_secret, 
            $mail_mailgun_domain, 
            $mail_sparkpost_driver, 
            $mail_sparkpost_endpoint 
        ];
    }
}