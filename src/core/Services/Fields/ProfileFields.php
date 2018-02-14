<?php
namespace Tendoo\Core\Services\Fields;

trait ProfileFields 
{
    /**
     * Profile Fields
     * @return array of profile field
     */
    static function userSecurityFields()
    {
        $oldPassword                        =   new \stdClass;
        $oldPassword->name                  =   'old_password';
        $oldPassword->label                 =   __( 'Old Password' );
        $oldPassword->type                  =   'password';
        $oldPassword->validation            =   'sometimes|required|min:6';
        $oldPassword->description           =   __( 'Provide the previous password.' );

        $password                           =   new \stdClass;
        $password->name                     =   'new_password';
        $password->label                    =   __( 'New Password' );
        $password->type                     =   'password';
        $password->validation               =   'sometimes|required|min:6|different:old_password';
        $password->description              =   __( 'Provide a unique and complex password.' );
        
        $passwordConfirm                    =   new \stdClass;
        $passwordConfirm->name              =   'password_confirm';
        $passwordConfirm->label             =   __( 'Confirm the Password' );
        $passwordConfirm->type              =   'password';
        $passwordConfirm->validation        =   'sometimes|required|same:new_password';
        $passwordConfirm->description       =   __( 'Confirm the new password.' );

        return [ $oldPassword, $password, $passwordConfirm ];
    }

    /**
     * User General Fields
     * @return array fields
     */
    static function userGeneralFields()
    {
        $theme                  =   new \stdClass;
        $theme->name            =   'theme_class';
        $theme->label           =   __( 'Theme' );
        $theme->type            =   'md-select';
        $theme->description     =   __( 'Change the dashboard theme.' );
        $theme->validation      =   'sometimes|required|min:3';
        $theme->options         =   [
            'dark-theme'      =>  __( 'Dark' ),
            'red-theme'       =>  __( 'Red' ),
            'green-theme'     =>  __( 'Green' ),
            'blue-theme'      =>  __( 'Blue' ),
            'white-theme'     =>  __( 'White' ),
        ];

        return [ $theme ];
    }
}