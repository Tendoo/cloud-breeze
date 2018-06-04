<?php
namespace Tendoo\Core\Crud;
use Tendoo\Core\Services\Crud;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Application;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Models\Option as OptionModel;

class Applications extends Crud
{
    /**
     * define the base table
     */
    protected $table      =   'applications';

    /**
     * base route name
     */
    protected $mainRoute      =   'dashboard.applications.list';

    /**
     * Define namespace
     * @param string
     */
    protected $namespace  =   'applications';

    /**i
     * Model Used
     */
    protected $model      =   'Tendoo\Core\Models\Application';

    /**
     * Adding relation
     */
    public $relations   =  [
        [ 'users', 'users.id', '=', 'applications.user_id' ]
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

        $this->list_title           =   __( 'Applications List' );
        $this->list_description     =   __( 'List all applications' );  
        $this->edit_title           =   __( 'Edit an application' );
        $this->edit_description     =   __( 'Edit an application details.' );  
        $this->create_title         =   __( 'Create an application' );
        $this->create_description   =   __( 'Create a new application which can use the Oauth Services.' );

        Hook::addFilter( 'crud.entry', [ $this, 'setActions' ], 10, 2 );
    }

    /**
     * Fields
     * @param object/null
     * @return array of field
     */
    public function getFields( $entry = null ) 
    {
        $fields     =   app()->make( Field::class );
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
                    $inputs[ $name ]    =   str_random(40);
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
                    $inputs[ $name ]    =   str_random(40);
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

        if ( $request->route( 'namespace' ) == 'applications' ) {

            /**
             * Use UserFieldsValidation and add assign it to "crud" validation array
             * the user object is send to perform validation and ignoring the current edited
             * user
             */
        }
        return Helper::getFieldsValidation( $fields );
    }

    /**
     * Before Delete
     * @return void
     */
    public function beforeDelete( $namespace, $id ) {
        // not required
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
            'name'  =>  [
                'text'  =>  __( 'Name' )
            ],
            'client_secret'  =>  [
                'text'  =>  __( 'Client Secret' )
            ],
            'client_key'    =>  [
                'text'      =>  __( 'Client Key' )
            ],
            'callback_url'  =>[
                'text'      =>  __( 'Callback' )
            ],
            'users_username'    =>  [
                'text'      =>  __( 'Author' )
            ],
            'created_at'  =>  [
                'text'  =>  __( 'Created On' )
            ],
            'active'    =>  [
                'text'  =>  __( 'Active' ),
                'filter'    =>  function( $value ) {
                    if ( ( int ) $value ) {
                        return __( 'Active' );
                    }
                    return __( 'Unactive' );
                }
            ]
        ];
    }

    /**
     * Define actions
     */
    public function setActions( $entry, $namespace )
    {
        $entry->{'$actions'}    =   [
            'edit'      =>  [
                'type'  =>  'GET',
                'url'   =>  route( 'dashboard.applications.edit', [
                    'entry'     =>  $entry->id
                ]),
                'text'  =>  __( 'Edit' )
            ], 
            'delete'      =>  [
                'type'  =>  'DELETE',
                'url'   =>  route( 'dashboard.crud.delete', [
                    'entry'     =>  $entry->id
                ]),
                'text'  =>  __( 'Delete' )
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
            'list'  =>  [
                [ 'href'    =>  route( 'dashboard.applications.create' ), 'text' => __( 'Add an application' ) ]
            ],
            'create'    =>  [
                [ 'href'    =>  route( 'dashboard.applications.list' ), 'text' => __( 'Return' ), 'class' => 'btn btn-raised btn-secondary' ]
            ],
            'edit'      =>  [
                [ 'href'    =>  route( 'dashboard.applications.list' ), 'text' => __( 'Return' ), 'class' => 'btn btn-raised btn-secondary' ]
            ]
        ];
    }
}