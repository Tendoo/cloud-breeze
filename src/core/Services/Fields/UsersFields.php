<?php
namespace Tendoo\Core\Services\Fields;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Services\Helper;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

trait UsersFields
{
    public function createUserFields( $user = false )
    {
        $request                =   app()->make( Request::class );

        $username               =   new \stdClass;
        $username->name         =   'username';
        $username->label        =   __( 'Username' );
        $username->type         =   'text';
        $username->placeholder  =   __( 'Username' );
        $username->description  =   __( 'Please choose a unique username' );
        $username->validation   =   'required|min:5|unique:users';
        
        $email                  =   new \stdClass;
        $email->name            =   'email';
        $email->label           =   __( 'Email' );
        $email->type            =   'text';
        $email->placeholder     =   __( 'Email' );
        $email->validation      =   'required|email|unique:users';
        
        $active                     =   new \stdClass;
        $active->name               =   'active';
        $active->label              =   __( 'Active' );
        $active->type               =   'md-select';
        $active->placeholder        =   __( 'Active' );
        $active->validation         =   'required';
        $active->options            =   [ __( 'No' ), __( 'Yes' ) ];
        $active->description        =   __( 'The user will be able to login without validating his account.' );
        
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
        $role->type                 =   'md-select';
        $role->placeholder          =   __( 'Role' );
        $role->validation           =   'required';
        $role->options              =   Helper::toOptions( Role::all(), [ 'id', 'name' ]);
        $role->description          =   __( 'Make sure to know all permission allowed per roles.' );

        /**
         * The validation should be unique according
         * to the operation
         */
        if ( is_object( $user ) ) {
            $email->validation      =   [
                'required',
                'email',
                Rule::unique('users')->ignore( $user->id )
            ];

            $username->validation   =   [ 
                'required', 
                'min:5', 
                Rule::unique('users')->ignore( $user->id ),
            ];

            $password->validation       =   'sometimes|nullable|min:6';
            $confirm->validation        =   'sometimes|nullable|same:password';
        }

        $fields     =   [ $username, $active, $role, $email, $password, $confirm ];

        /**
         * populate fields when required
         */
        if ( $user ) {
            foreach ( $fields as &$field ) {
                /**
                 * Field the field when provided
                 */
                if ( $field->name != 'password' ) {
                    $field->value       =   @$user->{$field->name};
                }
            }
        }
        return $fields;
    }
}