<?php
namespace CloudBreeze\Core\Fields\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

use CloudBreeze\Core\Models\Role;
use CloudBreeze\Core\Models\User as UserModel;
use CloudBreeze\Core\Services\Helper;

class User
{
    public function getFields( $user = null )
    {
        $request                =   app()->make( Request::class );

        $username               =   new \stdClass;
        $username->name         =   'username';
        $username->label        =   __( 'Username' );
        $username->type         =   'text';
        $username->placeholder  =   __( 'Username' );
        $username->description  =   __( 'Please choose a unique username' );
        $username->validation   =   'required|min:5|unique:tendoo_users';
        
        $email                  =   new \stdClass;
        $email->name            =   'email';
        $email->label           =   __( 'Email' );
        $email->type            =   'text';
        $email->placeholder     =   __( 'Email' );
        $email->validation      =   'required|email|unique:tendoo_users';
        
        $active                     =   new \stdClass;
        $active->name               =   'active';
        $active->label              =   __( 'Active' );
        $active->type               =   'select';
        $active->placeholder        =   __( 'Active' );
        $active->validation         =   'required';
        $active->description        =   __( 'The user will be able to login without validating his account.' );
        $active->options            =   [ 
            [
                'value'     =>  0,
                'label'     =>  __( 'No' )
            ], [
                'value'     =>  1,
                'label'     =>  __( 'Yes' )
            ]
        ];
        
        $password                  =   new \stdClass;
        $password->name            =   'password';
        $password->label           =   __( 'Password' );
        $password->type            =   'password';
        $password->placeholder     =   __( 'Password' );
        $password->validation      =   'required|min:6';

        $confirm                  =   new \stdClass;
        $confirm->name            =   'confirm';
        $confirm->label           =   __( 'Confirm' );
        $confirm->type            =   'password';
        $confirm->placeholder     =   __( 'Confirm' );
        $confirm->validation      =   'required|same:password';

        $role                       =   new \stdClass;
        $role->name                 =   'role_id';
        $role->label                =   __( 'Role' );
        $role->type                 =   'select';
        $role->placeholder          =   __( 'Role' );
        $role->validation           =   'required';
        $role->options              =   Helper::toJsOptions( Role::all(), [ 'id', 'name' ]);
        $role->description          =   __( 'Make sure to know all permission allowed per roles.' );

        /**
         * The validation should be unique according
         * to the operation
         */
        if ( $user instanceof UserModel ) {
            $email->validation      =   [
                'required',
                'email',
                Rule::unique('tendoo_users')->ignore( $user->id ),
            ];

            $username->validation   =   [ 
                'required', 
                'min:5', 
                Rule::unique('tendoo_users')->ignore( $user->id ),
            ];

            $password->validation       =   'sometimes|nullable|min:6';
            $confirm->validation        =   'sometimes|nullable|same:password';
        }

        $fields     =   [ $username, $active, $role, $email, $password, $confirm ];

        /**
         * populate fields when required
         */
        if ( $user instanceof UserModel ) {
            foreach ( $fields as &$field ) {
                if ( $field->type === 'select' && $field->name === 'active' ) {
                    foreach( $field->options as &$data ) {
                        if ( @$user->{$field->name} === true && intval( $data[ 'value' ] ) === 1 ) {
                            $field->value           =   1;
                        } else if ( @$user->{$field->name} === false && intval( $data[ 'value' ] ) === 0 ) {
                            $field->value           =   0;
                        }
                    }
                } else if ( $field->type != 'password' ) {
                    $field->value       =   @$user->{$field->name};
                }
            }
        }

        return $fields;
    }
}