<?php
namespace Tendoo\Core\Fields\Frontend;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Event;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Options;

class Authentication 
{

    /**
     * return password field
     * @return object of field
     */
    private function password()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'password';
        $Field->type            =   'password';
        $Field->label           =   __( 'Password' );
        $Field->placeholder     =   __( 'Password' );
        $Field->value           =   '';
        $Field->description     =   __( 'Provide your unique password.' );
        $Field->validation      =   'required|min:6';
        return $Field;
    }

    /**
     * return checkbox field
     * @return object of field
     */
    private function rememberme()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'keep_me_in';
        $Field->type            =   'switch';
        $Field->label           =   __( 'Keep me logged' );
        $Field->options         =   Helper::booleanToggle();
        return $Field;
    }

    /**
     * return password confirm field
     * @return object of field
     */
    private function passwordConfirm()
    {
        // Password Confir;
        $Field  =   new \StdClass;
        $Field->name            =   'password_confirm';
        $Field->type            =   'password';
        $Field->label           =   __( 'Confirm Password' );
        $Field->placeholder     =   __( 'Confirm Password' );
        $Field->description     =   __( 'This field should be similar to the password.' );
        $Field->validation      =   'same:password';
        return $Field;
    }

    /**
     * return email field
     * @return object of field
     */
    private function email()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'email';
        $Field->type            =   'email';
        $Field->label           =   __( 'Email' );
        $Field->placeholder     =   __( 'Email' );
        $Field->description     =   __( 'Provide a unique email that will be used along with your account.' );
        $Field->validation      =   'required|email|unique:tendoo_users';
        return $Field;
    }

    /**
     * return email field
     * @return object of field
     */
    private function recoveryEmail()
    {
        // Password Config;
        $Email  =   new \StdClass;
        $Email->name            =   'email';
        $Email->type            =   'email';
        $Email->label           =   __( 'Email' );
        $Email->placeholder     =   __( 'Enter your email' );
        $Email->validation      =   'required|email';
        $Email->description     =   __( 'An link for password recovery will be send to that email if it\'s used by any account on the system.' );
        return $Email;
    }

    /**
     * return username field
     * @return object of field
     */
    private function username()
    {
        // UserName
        $Field  =   new \StdClass;
        $Field->name            =   'username';
        $Field->type            =   'text';
        $Field->label           =   __( 'Username' );
        $Field->placeholder     =   __( 'Username' );
        $Field->descruotuib     =   __( 'Provide a unique username for your account.' );
        $Field->validation      =   'required|min:5|unique:tendoo_users';
        return $Field;
    }

    /**
     * return username field
     * @return object of field
     */
    private function loginUsername()
    {
        // UserName
        $Field  =   new \StdClass;
        $Field->name            =   'username';
        $Field->type            =   'text';
        $Field->label           =   __( 'Username' );
        $Field->placeholder     =   __( 'Username' );
        $Field->description     =   __( 'Provide the username used during the registration.' );
        $Field->validation      =   'required|min:5';
        $Field->value           =   '';
        return $Field;
    }

    /**
     * Return Login fields
     * @return array of login fields
     */
    public function login()
    {
        $options    =   app()->make( Options::class );

        /**
         * @Hook:login.fields
         */
        $loginFields    =   [
            $this->loginUsername(),
            $this->password(),
            $this->rememberme()
        ];

        if ( $options->get( 'enable_recaptcha' ) ) {

            $recaptcha              =   $this->recaptcha();
            $loginFields[]          =   $recaptcha;
        }

        return Hook::filter( 'login.fields', $loginFields );
    }

    /**
     * provide a recaptcha field
     * @return Field recaptcha
     */
    public function recaptcha()
    {
        $options                =   app()->make( Options::class );
        $recaptcha              =   new \stdClass;
        $recaptcha->name        =   'recaptcha';
        $recaptcha->label       =   __( 'Recaptcha' );
        $recaptcha->type        =   'recaptcha';
        $recaptcha->validation  =   'required';
        $recaptcha->data        =   [
            'siteKey'           =>  $options->get( 'recaptcha_site_key' )
        ];

        return $recaptcha;
    }

    /**
     * Register Fields
     * @return array of fields object
     */
    public function register()
    {
        $fields                 =   [
            $this->username(),
            $this->email(),
            $this->password(),
            $this->passwordConfirm(),
        ];

        $options        =   app()->make( Options::class );

        if ( $options->get( 'enable_recaptcha' ) ) {
            $fields[]       =   $this->recaptcha();
        }

        /**
         * @Hook:register.fields
         */
        $fields     =   Hook::filter( 'register.fields', $fields );
        return $fields;
    }

    /**
     * Recovery Fields
     * @return array of fields
     */
    public function recovery()
    {
        $options        =   app()->make( Options::class );
        $fields         =   [ $this->recoveryEmail() ];

        if ( $options->get( 'enable_recaptcha' ) ) {
            $fields[]       =   $this->recaptcha();
        }

        return $fields;
    }

    /**
     * Change Password Fields
     * @return array of fields
     */
    public function changePassword()
    {
        $fields     =   [
            $this->password(),
            $this->passwordConfirm(),
        ];

        $options        =   app()->make( Options::class );

        if ( $options->get( 'enable_recaptcha' ) ) {
            $fields[]       =   $this->recaptcha();
        }
        
        return $fields;
    }
}