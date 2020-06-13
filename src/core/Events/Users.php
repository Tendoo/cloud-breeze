<?php
namespace CloudBreeze\Core\Events;

use Illuminate\Foundation\Http\FormRequest;
use CloudBreeze\Core\Services\Field;
use Illuminate\Support\Facades\Mail;
use CloudBreeze\Core\Services\Users as UsersServices;
use CloudBreeze\Core\Models\Role;
use CloudBreeze\Core\Mail\PasswordResetRequested;

class Users
{
    /**
     * Create Profile Field Validation
     * @param array of validation
     * @param FormRequest
     * @return array of field validation
     */
    public function profileSecurity( $validations, FormRequest $request )
    {
        return array_merge( $validations, Field::buildValidation( 'userSecurityFields' ) );
    }

    /**
     * Create General Field Validation
     * @param array of validation
     * @param FormRequest
     * @return array of field validation
     */
    public function profileGeneral( $validations, FormRequest $request ) 
    {
        return array_merge( $validations, Field::buildValidation( 'userGeneralFields' ) );
    }

    /**
     * Register Fields Valiadtion
     * @param array of validation
     * @param FormRequest
     * @return array of validation
     */
    public function registration( $validations, FormRequest $request )
    {
        return array_merge( $validations, Field::buildValidation( 'register' ) );
    }

    /**
     * Notify Password recovery to administrators
     * @param user
     * @param string hash code
     * @return void
     */
    public function notifyPasswordResetToAdmins( $user, $hashCode ) 
    {
        $options    =   app()->make( 'CloudBreeze\Core\Services\Options' );

        /**
         * Only notify when the option is enabled
         */
        if ( $options->get( 'app_notify_password_reset', 'false' ) === 'true' ) {
            $admins     =   Role::where( 'namespace', 'admin' )->get();
            $admins->map( function( $role ) {
                $role->user->map( function( $user ) {
                    Mail::to( $user->email )
                        ->queue( new PasswordResetRequested( $user ) );        
                });
            });
        }
    }
}