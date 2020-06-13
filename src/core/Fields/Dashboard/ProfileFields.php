<?php
namespace CloudBreeze\Core\Fields\Dashboard;

use Illuminate\Support\Facades\Auth;

class ProfileFields
{
    /**
     * Profile Fields
     * @return array of profile field
     */
    public function userSecurityFields()
    {
        $oldPassword                        =   new \stdClass;
        $oldPassword->name                  =   'old_password';
        $oldPassword->label                 =   __( 'Old Password' );
        $oldPassword->type                  =   'password';
        $oldPassword->validation            =   'sometimes|required|min:6';
        $oldPassword->description           =   __( 'Provide the previous password.' );

        $password                           =   new \stdClass;
        $password->name                     =   'password';
        $password->label                    =   __( 'New Password' );
        $password->type                     =   'password';
        $password->validation               =   'sometimes|required|min:6|different:old_password';
        $password->description              =   __( 'Provide a unique and complex password.' );
        
        $passwordConfirm                    =   new \stdClass;
        $passwordConfirm->name              =   'password_confirm';
        $passwordConfirm->label             =   __( 'Confirm the Password' );
        $passwordConfirm->type              =   'password';
        $passwordConfirm->validation        =   'sometimes|required|same:password';
        $passwordConfirm->description       =   __( 'Confirm the new password.' );

        return [ $oldPassword, $password, $passwordConfirm ];
    }

    /**
     * User General Fields
     * @return array fields
     */
    public function userGeneralFields()
    {
        $userOptions            =   app()->make( 'CloudBreeze\Core\Services\UserOptions' );
        
        $email              =   new \stdClass;
        $email->type        =   'email';
        $email->name        =   'email';
        $email->label       =   __( 'Email' );
        $email->validation  =   'sometimes|email';
        $email->value       =   Auth::user()->email;

        return [ $email ];
    }
}