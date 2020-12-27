<?php
namespace Tendoo\Core\Crud;
use Tendoo\Core\Services\Crud;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Application;
use Tendoo\Core\Models\Option as OptionModel;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Exceptions\CrudException;
use Tendoo\Core\Exceptions\AccessDeniedException;

class ApplicationCrud extends Crud
{
    /**
     * define the base table
     */
    protected $table      =   'tendoo_apps';

    /**
     * base route name
     */
    protected $mainRoute      =   'dashboard.applications.list';

    /**
     * Define namespace
     * @param string
     */
    protected $namespace  =   'tendoo-apps';

    /**
     * Model Used
     */
    protected $model      =   'Tendoo\Core\Models\Application';

    /**
     * Adding relation
     */
    public $relations   =  [
        [ 'tendoo_users', 'tendoo_users.id', '=', 'tendoo_apps.user_id' ]
    ];

    /**
     * Fields which will be filled during post/put
     */
    public $fillable    =   [ 'name', 'client_key', 'client_secret', 'active', 'description', 'user_id', 'callback_url' ];

    /**
     * Define Constructor
     * @param 
     */
    public function __construct()
    {
        parent::__construct();

        Hook::addFilter( 'crud.entry', [ $this, 'setActions' ], 10, 2 );
    }

    /**
     * Fields
     * @param object/null
     * @return array of field
     */
    public function getFields( $entry = null ) 
    {
        return $fields->applicationsFields( $entry );
    }

    /**
     * Filter POST input fields
     * @param array of fields
     * @return array of fields
     */
    public function filterPostInputs( $inputs )
    {
        foreach( $inputs as $name => $value ) {
            if ( in_array( $name, [ 'client_key', 'client_secret' ] ) ) {
                if ( empty( $inputs[ $name ] ) ) {
                    $inputs[ $name ]    =   Str::random(40);
                }
            }
        }

        $inputs[ 'user_id' ]    =   Auth::id();

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
            if ( in_array( $name, [ 'client_key', 'client_secret' ] ) ) {
                if ( empty( $inputs[ $name ] ) ) {
                    $inputs[ $name ]    =   Str::random(40);
                }
            }
        }

        $inputs[ 'user_id' ]    =   Auth::id();

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
         * Retreive the application if id is provided
         */
        $application       =   $request->route( 'id' ) ? Application::find( $request->route( 'id' ) ) : false;
        
        /**
         * If the current request process users namespace
         */
        $fields     =   $this->getFields( $application );

        return Helper::getFieldsValidation( $fields );
    }

    /**
     * Before Delete
     * @return void
     */
    public function beforeDelete( $namespace, $id ) {
        return [ 
            'status'    =>  'success',
            'message'   =>  __( 'Hasn been deleted' )
        ];
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

    public function getLabels()
    {
        return [
            'list_title'            =>  __( 'Applications List' ),
            'list_description'      =>  __( 'Display all registered applications.' ),
            'no_entry'              =>  __( 'No applications has been registered' ),
            'create_new'            =>  __( 'Add a new application' ),
            'create_title'          =>  __( 'Register a new application' ),
            'create_description'    =>  __( 'Applications has access to the application.' ),
            'edit_title'            =>  __( 'Edit an application' ),
            'edit_description'      =>  __( 'Rename or change the scope of an existing application.' ),
            'back_to_list'          =>  __( 'Return to the applications' ),
        ];
    }

    public function canAccess( $data )
    {
        $users      =   app()->make( Users::class );
        if ( $users->is([ 'admin' ]) ) {
            return [
                'status'    =>  'success',
                'message'   =>  __( 'Access Granted.' )
            ];
        }
        throw new AccessDeniedException( __( 'You don\'t have access to this resource' ) );
    }

    /**
     * Define Columns
     * @return array of columns configuration
     */
    public function getColumns() {
        return [
            'id'                =>  [
                'label'         =>  __( 'ID' ),
            ],
            'name'              =>  [
                'label'         =>  __( 'Name' )
            ],
            'client_secret'     =>  [
                'label'         =>  __( 'Client Secret' ),
                'truncate'      =>  10,
            ],
            'client_key'        =>  [
                'label'         =>  __( 'Client Key' ),
                'truncate'      =>  10,
            ],
            'callback_url'      =>  [
                'label'         =>  __( 'Callback' )
            ],
            'tendoo_users_username'    =>  [
                'label'         =>  __( 'Author' )
            ],
            'created_at'        =>  [
                'label'         =>  __( 'Created On' )
            ],
            'active'        =>  [
                'label'     =>  __( 'Active' )
            ],
            '$actions'      =>  [
                'label'     =>  __( 'Actions' )
            ]
        ];
    }

    /**
     * Define actions
     */
    public function setActions( $entry, $namespace )
    {
        $entry->{'$actions'}    =   [
            [
                'label'         =>      __( 'Edit' ),
                'namespace'     =>      'edit.application',
                'type'          =>      'GOTO',
                'index'         =>      'id',
                'url'           =>      '/dashboard/crud/tendoo-apps/edit/' . $entry->id
            ], [
                'label'     =>  __( 'Delete' ),
                'namespace' =>  'delete',
                'type'      =>  'DELETE',
                'index'     =>  'id',
                'url'       =>  'tendoo/crud/tendoo-apps/' . $entry->id,
                'confirm'   =>  [
                    'message'  =>  __( 'Would you like to delete this application ?' ),
                    'title'     =>  __( 'Delete an application' )
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
        if ( $request->input( 'action' ) == 'delete_selected' ) {
            $status     =   [
                'success'   =>  0,
                'danger'    =>  0
            ];

            foreach ( $request->input( 'entry_id' ) as $id ) {
                if ( ( int ) $id == Auth::id() ) {
                    $status[ 'danger' ]++;
                } else {
                    /**
                     * This filter might block the
                     * deletion
                     */
                    if ( Hook::filter( 'delete.user', true, $id ) ) {
                        $this->model::find( $id )->delete();
                        $this->deleteOptions( $id );
                        $status[ 'success' ]++;
                    }
                }
            }
            return $status;
        }
        return false;
    }

    /**
     * get Links
     * @return array of links
     */
    public function getLinks()
    {
        return  [
            'create'    =>  '/dashboard/crud/tendoo-apps/create',
            'list'    =>  '/dashboard/crud/tendoo-apps',
            'edit'    =>  '/dashboard/crud/tendoo-apps/edit/#',
        ];
    }
}