<?php
namespace Tendoo\Core\Crud;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

use Tendoo\Core\Services\Crud;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Models\User;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Models\Option as OptionModel;
use Tendoo\Core\Services\Users as UserService;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Tendoo\Core\Fields\Dashboard\UserRegistration;

class Users extends Crud
{
    /**
     * define the base table
     */
    protected $table      =   'tendoo_users';

    /**
     * base route name
     */
    protected $mainRoute      =   'dashboard.users.list';

    /**
     * Define namespace
     * @param string
     */
    protected $namespace  =   'tendoo-users';

    /**
     * Model Used
     */
    protected $model      =   'Tendoo\Core\Models\User';

    /**
     * Adding relation
     */
    public $relations   =  [
        [ 'tendoo_roles', 'tendoo_users.role_id', '=', 'tendoo_roles.id' ]
    ];

    protected $fields   =   UserRegistration::class;

    /**
     * Fields which will be filled during post/put
     */
    public $fillable    =   [ 'username', 'email', 'password', 'role_id', 'active' ];

    /**
     * Define Constructor
     * @param 
     */
    public function __construct()
    {
        parent::__construct();

        $this->list_title           =   __( 'User List' );
        $this->list_description     =   __( 'List all users and roles' );  
        $this->edit_title           =   __( 'Edit a user' );
        $this->edit_description     =   __( 'Edit a user details.' );  
        $this->create_title         =   __( 'Create User' );
        $this->create_description   =   __( 'Create a new user.' );
        $this->users                =   app()->make( UserService::class );

        Hook::addFilter( 'crud.entry', [ $this, 'setActions' ], 10, 2 );
    }

    /**
     * Fields
     * @param object/null
     * @return array of field
     */
    public function getFields( $entry = null ) 
    {
        return Field::setupUserFields( $entry );
    }

    /**
     * Filter POST input fields
     * @param array of fields
     * @return array of fields
     */
    public function filterPostInputs( $inputs )
    {
        foreach( $inputs as $name => $value ) {
            if ( $name == 'password' && ! empty( $value ) ) {
                $inputs[ $name ]    =   bcrypt( $value );
            }
        }
        return $inputs;
    }

    /**
     * Filter PUT input fields
     * @param array of fields
     * @return array of fields
     */
    public function filterPutInputs( $inputs )
    {
        foreach( $inputs as $name => $value ) {
            if ( $name == 'password' && ! empty( $value ) ) {
                $inputs[ $name ]    =   bcrypt( $value );
            }
        }
        return $inputs;
    }

    /**
     * Validation Rule for POST/PUT request
     * @param object Request
     * @return void
     */
    public function validationRules( $request )
    {
        /**
         * Retreive the user if here provided
         */
        $user       =   $request->route( 'id' ) ? User::find( $request->route( 'id' ) ) : false;
        
        /**
         * If the current request process users namespace
         */
        $fields     =   $this->getFields( $user );

        if ( $request->route( 'namespace' ) == 'tendoo-users' ) {

            /**
             * Use UserFieldsValidation and add assign it to "crud" validation array
             * the user object is send to perform validation and ignoring the current edited
             * user
             */
        }
        
        return Helper::getFieldsValidation( $fields );
    }

    public function getLabels()
    {
        return [
            'list_title'            =>  __( 'Users List' ),
            'list_description'      =>  __( 'Display all registered users.' ),
            'no_entry'              =>  __( 'No applications has been registered' ),
            'create_new'            =>  __( 'Add a new user' ),
            'create_title'          =>  __( 'Register a new user' ),
            'create_description'    =>  __( 'Will create a new using which has access to the application.' ),
            'edit_title'            =>  __( 'Edit a user' ),
            'edit_description'      =>  __( 'Change a registered user informations.' ),
            'back_to_list'          =>  __( 'Return to the Users list' ),
        ];
    }

    public function canAccess( $data )
    {
        if ( $this->users->is([ 'admin' ]) && true ) {
            return [
                'status'    =>  'success',
                'message'   =>  __( 'Access Granted.' )
            ];
        }
        
        throw new AccessDeniedException( __( 'You don\'t have access to this resource' ) );
    }

    /**
     * Before Delete
     * @return void
     */
    public function beforeDelete( $namespace, $id ) {
        if ( $namespace == 'tendoo-users' ) {
            if ( ! $this->users->is([ 'admin' ]) ) {
                throw new AccessDeniedException(
                    __( 'You are not allowed to perform this action.' )
                );
            }

            /**
             * @todo we might check if the 
             * user has the right to delete
             */
            if ( Auth::id() === ( int ) $id && Hook::filter( 'delete.user', true, $id ) ) {
                return response([
                    'status'    =>  'danger',
                    'message'   =>  __( 'You can\'t delete your own account' )
                ], 403 );
            }

            /**
             * Delete user options
             * when the request is allowed to delete
             * the users
             */
            $this->deleteOptions( $id );
        }
    }

    /**
     * get
     * @param string
     * @return mixed
     */
    public function get( $param )
    {
        switch( $param ) {
            case 'model' : return $this->model ; break;
        }
    }

    /**
     * Define Columns
     * @return array of columns configuration
     */
    public function getColumns() {
        return [
            'id'    =>  [
                'label' =>  __( 'ID' ),
            ],
            'username'  =>  [
                'label' =>  __( 'Username' )
            ],
            'tendoo_roles_name' =>  [
                'label' =>   __( 'Role' )
            ],
            'active'        =>  [
                'label'     =>  __( 'Active' ),
                'type'      =>  'boolean',
                'replace'   =>  [
                    '1'             =>  __( 'Yes' ),
                    '0'             =>  __( 'No' ),
                    '$default'      =>  __( 'Undefined' )
                ]
            ],
            'email'     =>  [
                'label' =>  __( 'Email' )
            ],
            'created_at'    =>  [
                'label' =>  __( 'Joined On' )
            ],
            '$actions'      =>  [
                'label' =>  __( 'Actions' )
            ]
        ];
    }

    /**
     * Define actions
     */
    public function setActions( $entry, $namespace )
    {
        $actions                =   '$actions';
        $isAuthenticated        =   Auth::id() === $entry->id;
        $entry->{$actions}      =   [
            [
                'label'     =>  $isAuthenticated ? __( 'Profile' ) : __( 'Edit' ),
                'namespace' =>  $isAuthenticated ? 'profil' : 'edit',
                'type'      =>  'GOTO',
                'index'     =>  'id',
                'url'       =>  $isAuthenticated ? '/dashboard/profile' : '/dashboard/users/edit/' . $entry->id
            ], [
                'label'     =>  __( 'Delete' ),
                'namespace' =>  'delete',
                'type'      =>  'DELETE',
                'index'     =>  'id',
                'url'       =>  'tendoo/crud/tendoo-users/' . $entry->id,
                'confirm'   =>  [
                    'message'  =>  __( 'Would you like to delete this account ?' ),
                    'title'     =>  __( 'Delete a user' )
                ]
            ]
        ];
        return $entry;
    }

    /**
     * Bulk Delete Action
     * @param object Request with object
     * @return false/array
     */
    public function bulkDelete( Request $request ) 
    {
        if ( $request->input( 'action' ) == 'bulk-delete' ) {
            $status     =   [
                'success'   =>  [],
                'error'    =>  []
            ];

            foreach ( $request->input( 'entries_id' ) as $id ) {
                if ( ( int ) $id == Auth::id() ) {
                    $status[ 'error' ][]    =   __( 'You cannot delete your own account' );
                } else {
                    /**
                     * This filter might block the
                     * deletion
                     */
                    if ( Hook::filter( 'delete.user', true, $id ) ) {
                        $user       =   $this->model::find( $id );
                        $message    =   '';
                        if ( $user instanceof User ) {
                            $message    =   sprintf( __( '%s has been deleted' ), $user->username );
                            $user->delete();
                            $this->deleteOptions( $id );
                        }
                        $status[ 'success' ][]  =   $message;
                    }
                }
            }
            return $status;
        }
        return false;
    }

    /**
     * Delete the users Options
     * @param int user id
     * @return void
     */
    public function deleteOptions( $user_id )
    {
        OptionModel::where( 'user_id', $user_id )->delete();
    }

        /**
     * get Links
     * @return array of links
     */
    public function getLinks()
    {
        return  [
            'create'    =>  '/dashboard/crud/tendoo-users/create',
            'list'    =>  '/dashboard/crud/tendoo-users',
            'edit'    =>  '/dashboard/crud/tendoo-users/edit/#',
        ];
    }
}