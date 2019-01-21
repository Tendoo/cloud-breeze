<?php
namespace Tendoo\Core\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;
use Tendoo\Core\Facades\Hook;

class Crud 
{
    /**
     * Toggle feature array
     * @param boolean
     */
    protected $features       =   [
        'bulk-actions'      =>  true, // enable bulk action
        'single-action'     =>  true, // enable single action
        'checkboxes'        =>  true // enable checkboxes
    ];


    /**
     * Actions Array
     */
    protected $actions  =   [];

    /**
     * Protected columns
     */
    protected   $columns    =   [];

    /**
     * Link
     * @return array
     */
    protected   $links       =   [
        'list'      =>  [],
        'edit'      =>  [],
        'create'    =>  []
    ];

    /**
     * Define a where for getEntries
     * @var array
     */
    protected $listWhere    =   [];

    /**
     * Bulk Options
     * @param array
     */
    protected $bulkActions  =   [];

    /**
     * Construct Parent
     */
    public function __construct()
    {
        /**
         * @todo provide more build in actions
         */
        $this->bulkActions  =   [
            'delete_selected'   =>  __( 'Delete Selected entries' )
        ];

        /**
         * Bulk action messages
         */
        $this->bulkDeleteSuccessMessage     =   __( '%s entries has been deleted' );
        $this->bulkDeleteDangerMessage      =   __( '%s entries has not been deleted' );
    }

    /**
     * Is enabled
     * Return whether a feature is enabled (true) or not (false)
     * @param string feature name
     * @return boolean/null
     */
    public function isEnabled( $feature )
    {
        return @$this->features[ $feature ];
    }

    /**
     * Get namespace
     * @return string current namespace
     */
    public function getNamespace()
    {
        return $this->namespace;
    }


    /**
     * Get Bulk Actions
     * @return array of bulk actions
     */
    public function getBulkActions()
    {
        return $this->bulkActions;
    }

    /**
     * get Entries
     * @param crud config
     * @return entries
     */
    public function getEntries()
    {
        $request            =   app()->make( Request::class );
        $query              =   DB::table( $this->table );
        $columnsLongName    =   [];
        /**
         * Let's loop relation if they exists
         */
        if ( $this->relations ) {
            /**
             * First loop to retreive the columns and rename it
             */
            $select         =   [];

            /**
             * Building Select field for primary table
             * We're caching the table columns, since we would like to 
             * avoid many DB Calls
             */
            if( ! empty( Cache::get( 'table-columns-' . $this->table ) ) ) {
                $columns        =   Cache::get( 'table-columns-' . $this->table );
            } else {
                $columns        =   Schema::getColumnListing( $this->table );
                Cache::put( 'table-columns-' . $this->table, $columns, Carbon::now()->addDays(1) );
            }

            foreach( $columns as $index => $column ) {
                $__name             =   $this->table . '.' . $column;
                $columnsLongName[]  =   $__name;
                $select[]           =  $__name . ' as ' . $column;
            }

            /**
             * Build Select for joined table
             */
            
            foreach( $this->relations as $relation ) {
                /**
                 * We're caching the columns to avoid once again many DB request
                 */
                if( ! empty( Cache::get( 'table-columns-' . $relation[0] ) ) ) {
                    $columns        =   Cache::get( 'table-columns-' . $relation[0] );
                } else {
                    $columns    =   Schema::getColumnListing( $relation[0] );
                    Cache::put( 'table-columns-' . $relation[0], $columns, Carbon::now()->addDays(1) );
                }

                foreach( $columns as $index => $column ) {
                    $__name             =   $relation[0] . '.' . $column;
                    $columnsLongName[]  =   $__name;
                    $select[]           =   $__name . ' as ' . $relation[0] . '_' . $column;
                }
            }

            $query          =   call_user_func_array([ $query, 'select' ], $select );

            foreach( $this->relations as $relation ) {
                $query->join( $relation[0], $relation[1], $relation[2], $relation[3] );
            }

            /**
             * check if the query has a where statement
             */
            if ( $this->listWhere ) {
                foreach( $this->listWhere as $key => $value ) {
                    $query->where( $key, $value );
                }
            }
        }

        /**
         * Order the current result, according to the mentionned columns
         */
        if ( $request->query( 'direction' ) && $request->query( 'active' ) ) {
            $query->orderBy( 
                $request->query( 'active' ),
                $request->query( 'direction' )
            );
        }

        /**
         * let's make the "perPage" value adjustable
         */
        $perPage    =   20;
        if ( $request->query( 'per_page' ) ) {
            $perPage    =   $request->query( 'per_page' );
        }

        /**
         * searching
         */
        if ( $request->query( 'search' ) ) {
            $query->where( function( $query ) use ( $request, $columnsLongName ) {
                foreach( $columnsLongName as $index => $column ) {
                    if ( $index == 0 ) {
                        $query->where( $column, 'like', "%{$request->query( 'search' )}%" );
                    } else {
                        $query->orWhere( $column, 'like', "%{$request->query( 'search' )}%" );
                    }
                }
            });
        }

        $entries    =   $query->paginate( $perPage )->toArray();

        /**
         * looping entries to provide inline 
         * options
         */
        foreach( $entries[ 'data' ] as &$entry ) {
            /**
             * @hook crud.entry
             */
            $entry  =   Hook::filter( 'crud.entry', $entry, [
                'namespace'     =>  $this->getNamespace()
            ]);
        }

        return $entries;
    }

    /**
     * Get action
     * @return array of actions
     */
    public function getActions()
    {
        return $this->actions;
    }

    /**
     * Get link
     * @return array of link
     */
    public function getLinks()
    {
        return $this->links;
    }

    /**
     * Get route
     * @return string 
     */
    public function getMainRoute()
    {
        return $this->mainRoute;
    }

    /**
     * Get Model
     * @return current model
     */
    public function getModel()
    {
        return $this->model;
    }

    /**
     * Get Fillable fields
     * @return array of string as field name
     */
    public function getFillable()
    {
        return $this->fillable;
    }
}