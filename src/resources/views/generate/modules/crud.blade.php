@inject( 'Schema', 'Illuminate\Support\Facades\Schema' )
<{{ '?php' }}
namespace Modules\{{ ucwords( $module[ 'namespace' ] ) }}\Crud;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Tendoo\Core\Services\Crud;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Models\User;
use Tendoo\Core\Facades\Hook;

class {{ ucwords( camel_case( str_plural( $resource_name ) ) ) }} extends Crud
{
    /**
     * define the base table
     */
    protected $table      =   '{{ strtolower( trim( $table_name ) ) }}';

    /**
     * base route name
     */
    protected $mainRoute      =   '{{ strtolower( trim( $route_name ) ) }}';

    /**
     * Define namespace
     * @param string
     */
    protected $namespace  =   '{{ strtolower( trim( $namespace ) ) }}';

    /**
     * Model Used
     */
    protected $model      =   '{{ trim( $model_name ) }}';

    /**
     * Adding relation
     */
    public $relations   =  [
        @foreach( $relations as $relation )
        [ '{{ strtolower( trim( $relation[0] ) ) }}', '{{ strtolower( trim( $relation[2] ) ) }}', '=', '{{ strtolower( trim( $relation[1] ) ) }}' ]
        @endforeach
    ];

    /**
     * Define where statement
     * @var array
    **/
    protected $listWhere    =   [];

    /**
     * Fields which will be filled during post/put
     */
    public $fillable    =   [ '{{ strtolower( trim( $fillable ) ) }}' ];

    /**
     * Define Constructor
     * @param 
     */
    public function __construct()
    {
        parent::__construct();

        $this->list_title           =   __( '{{ ucwords( str_plural( trim( $resource_name ) ) ) }} List' );
        $this->list_description     =   __( 'List all {{ strtolower( str_plural( trim( $resource_name ) ) ) }}' );  
        $this->edit_title           =   __( 'Edit a {{ ucwords( str_singular( trim( $resource_name ) ) ) }}' );
        $this->edit_description     =   __( 'Edit a {{ strtolower( str_singular( trim( $resource_name ) ) ) }} details' );  
        $this->create_title         =   __( 'Create {{ ucwords( str_singular( trim( $resource_name ) ) ) }}' );
        $this->create_description   =   __( 'Create a new {{ strtolower( str_singular( trim( $resource_name ) ) ) }}.' );

        Hook::addFilter( 'crud.entry', [ $this, 'setActions' ], 10, 2 );
    }

    /**
     * Check whether a feature is enabled
     * @return boolean
    **/
    public function isEnabled( $feature )
    {
        return false; // by default
    }

    /**
     * Fields
     * @param object/null
     * @return array of field
     */
    public function getFields( $entry = null ) 
    {
        return [
            // your field here
        ];
    }

    /**
     * Filter POST input fields
     * @param array of fields
     * @return array of fields
     */
    public function filterPostInputs( $inputs )
    {
        return $inputs;
    }

    /**
     * Filter PUT input fields
     * @param array of fields
     * @return array of fields
     */
    public function filterPutInputs( $inputs, {{ trim( $model_name ) }} $entry )
    {
        return $inputs;
    }

    /**
     * After Crud POST
     * @param object entry
     * @return void
     */
    public function afterPost( $inputs )
    {
        return $inputs;
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
     * After Crud PUT
     * @param object entry
     * @return void
     */
    public function afterPut( $inputs )
    {
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
         * Retreive the entry ID from the Route
         */
        $entryId       =   $request->route( 'id' ) ? User::find( $request->route( 'id' ) ) : null;
        
        /**
         * If the current request process {{ strtolower( trim( $namespace ) ) }} namespace
         */
        $fields     =   $this->getFields( $entryId );

        if ( $request->route( 'namespace' ) == '{{ strtolower( trim( $namespace ) ) }}' ) {

            /**
             * Use UserFieldsValidation and add assign it to "crud" validation array
             * the entry object is send to perform validation and ignoring the current edited
             * entry
             */
        }
        return Helper::getFieldsValidation( $fields );
    }

    /**
     * Before Delete
     * @return void
     */
    public function beforeDelete( $namespace, $id ) {
        if ( $namespace == '{{ strtolower( trim( $namespace ) ) }}' ) {
            /**
             *  Perform an action before deleting an entry
             *  In case something wrong, this response can be returned
             *
             *  return response([
             *      'status'    =>  'danger',
             *      'message'   =>  __( 'You\re not allowed to do that.' )
             *  ], 403 );
            **/
        }
    }

    /**
     * Define Columns
     * @return array of columns configuration
     */
    public function getColumns() {
        return [
            @foreach( $Schema::getColumnListing( $table_name ) as $column )
            '{{ $column }}'  =>  [
                'text'  =>  __( '{{ ucwords( $column ) }}' )
            ],
            @endforeach
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
                'url'   =>  route( '{{ strtolower( trim( $route_name ) ) }}.edit', [
                    'entry'     =>  $entry->id
                ]),
                'text'  =>  __( 'Edit' )
            ], 
            'delete'      =>  [
                'type'  =>  'DELETE',
                'url'   =>  route( 'dashboard.crud.delete', [
                    'entry'     =>  $entry->id,
                    'namespace' =>  '{{ strtolower( trim( $namespace ) ) }}'
                ]),
                'text'  =>  __( 'Delete' )
            ]
        ];
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
                // use $status[ 'danger' ]++; in case of error.
                $this->model::find( $id )->delete();
                $status[ 'success' ]++;
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
                [ 'href'    =>  route( '{{ strtolower( trim( $route_name ) ) }}.create' ), 'text' => __( 'Add a {{ ucwords( str_singular( trim( $resource_name ) ) ) }}' ) ]
            ],
            'create'    =>  [
                [ 'href'    =>  route( '{{ strtolower( trim( $route_name ) ) }}.list' ), 'text' => __( 'Return' ), 'class' => 'btn btn-raised btn-secondary' ]
            ],
            'edit'      =>  [
                [ 'href'    =>  route( '{{ strtolower( trim( $route_name ) ) }}.list' ), 'text' => __( 'Return' ), 'class' => 'btn btn-raised btn-secondary' ]
            ]
        ];
    }

    /**
     * Get Bulk actions
     * @return array of actions
    **/
    public function getBulkActions()
    {
        return [];
    }

    /**
     * get exports
     * @return array of export formats
    **/
    public function getExports()
    {
        return [];
    }
}