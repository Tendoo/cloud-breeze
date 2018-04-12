<?php
namespace Tendoo\Core\Services\Fields;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Event;
use Tendoo\Core\Facades\Hook;

trait AuthFields {

    /**
     * return password field
     * @return object of field
     */
    private static function password()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'password';
        $Field->type            =   'password';
        $Field->label           =   __( 'Password' );
        $Field->placeholder     =   __( 'Password' );
        $Field->validation      =   'required|min:6';
        return $Field;
    }

    /**
     * return checkbox field
     * @return object of field
     */
    private static function rememberme()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'remember_me';
        $Field->type            =   'checkbox';
        $Field->options         =   [
            '1'     =>  __( 'Remember Me' )
        ];
        return $Field;
    }

    /**
     * return password confirm field
     * @return object of field
     */
    private static function passwordConfirm()
    {
        // Password Confir;
        $Field  =   new \StdClass;
        $Field->name            =   'password_confirm';
        $Field->type            =   'password';
        $Field->label           =   __( 'Confirm Password' );
        $Field->placeholder     =   __( 'Confirm Password' );
        $Field->validation      =   'same:password';
        return $Field;
    }

    /**
     * return email field
     * @return object of field
     */
    private static function email()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'email';
        $Field->type            =   'email';
        $Field->label           =   __( 'Email' );
        $Field->placeholder     =   __( 'Email' );
        $Field->validation      =   'required|email|unique:users';
        return $Field;
    }

    /**
     * return email field
     * @return object of field
     */
    private static function recoveryCode()
    {
        $Field  =   new \StdClass;
        $Field->name            =   'recovery_code';
        $Field->type            =   'hidden';
        $Field->validation      =   'required';
        $Field->value           =   @Route::current()->parameter( 'code' );
        return $Field;
    }

    /**
     * return email field
     * @return object of field
     */
    private static function recoveryEmail()
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
    private static function username()
    {
        // UserName
        $Field  =   new \StdClass;
        $Field->name            =   'username';
        $Field->type            =   'text';
        $Field->label           =   __( 'Username' );
        $Field->placeholder     =   __( 'Username' );
        $Field->validation      =   'required|min:5|unique:users';
        return $Field;
    }

    /**
     * return username field
     * @return object of field
     */
    private static function loginUsername()
    {
        // UserName
        $Field  =   new \StdClass;
        $Field->name            =   'username';
        $Field->type            =   'text';
        $Field->label           =   __( 'Username' );
        $Field->placeholder     =   __( 'Username' );
        $Field->validation      =   'required|min:5';
        return $Field;
    }

    /**
     * Return Login fields
     * @return array of login fields
     */
    public static function login()
    {
        /**
         * @Hook:login.fields
         */
        return Hook::filter( 'login.fields', [
            self::loginUsername(),
            self::password(),
            self::rememberme()
        ]);
    }

    /**
     * Register Fields
     * @return array of fields object
     */
    public static function register()
    {
        $fields                 =   [
            'username'          =>  self::username(),
            'email'             =>  self::email(),
            'password'          =>  self::password(),
            'password_confirm'  =>  self::passwordConfirm(),
        ];

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
    public static function recovery()
    {
        return [ self::recoveryEmail() ];
    }

    /**
     * Change Password Fields
     * @return array of fields
     */
    public static function changePassword()
    {
        return [
            self::password(),
            self::passwordConfirm(),
            self::recoveryCode()
        ];
    }
}