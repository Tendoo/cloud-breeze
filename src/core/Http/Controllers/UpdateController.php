<?php
namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Tendoo\Core\Services\Page;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Illuminate\Support\Facades\Artisan;

class UpdateController extends Controller 
{
    protected $options;

    public function __construct()
    {
        /**
         * middleware to control the database update
         */
        $this->middleware( function( $request, $next ){
            
            $this->options      =   app()->make( 'Tendoo\Core\Services\Options' );

            if ( $this->options->get( 'db_version' ) === config( 'tendoo.db_version' ) ) {
                throw new \Exception( __( 'Updating the database is not required.' ) );
            }

            return $next( $request );
        })->only([ 'index', 'postUpdate' ]);
        
        /**
         * middleware to control the files update
         */
        $this->middleware( function( $request, $next ){

            if ( ! Storage::disk( 'root' )->exists( 'should-publish-assets' ) ) {
                throw new \Exception( __( 'Updating the files is not required.' ) );
            }

            return $next( $request );
        })->only([ 'filesIndex', 'postFiles' ]);
    }

    /**
     * index page
     * @return view
     */
    public function index()
    {
        Page::setTitle( __( 'Database Update' ) );
        return view( 'tendoo::components.frontend.update.database' );
    }

    /**
     * Updating the files
     * @return view
     */
    public function filesIndex()
    {
        Page::setTitle( __( 'File Update' ) );
        return view( 'tendoo::components.frontend.update.files' );
    }

    /**
     * Post Database Update
     * @return void
     */
    public function postUpdate( Request $request)
    {
        $options    =   app()->make( 'Tendoo\Core\Services\Options' );

        /**
         * this operation can be made only
         * if the database version is not similar to the 
         * version mentionned on the file
         */
        if ( $options->get( 'db_version' ) === config( 'tendoo.db_version' ) ) {
            throw new \Exception(
                __( 'Unable to run the migration, the database may have yet been updated' )
            );
        }

        $data   =   $request->validate([
            'files'     =>  'required'
        ]);

        /**
         * including migrations files
         */
        $files  =   Storage::disk( 'database-migrations' )->allFiles();
        foreach ( $files as $file ) {
            include_once( DATABASE_MIGRATIONS_PATH . $file );
        }

        /**
         * including update files
         */
        foreach( $data[ 'files' ] as $file ) {
            
            /**
             * including the files
             */
            include_once( DATABASE_UPDATES_PATH . $file );

            /**
             * creating class details
             */
            $details    =   pathinfo( $file );
            $version    =   str_replace( '.', '_',  $details[ 'dirname' ] );
            $className  =   studly_case( $details[ 'filename' ] );
            $className  =   'Tendoo\Database\Updates\v' . $version . '\\' . $className;
            $class      =   new $className;

            /**
             * running migration
             * trigger up method
             */
            $class->up();
        }

        /**
         * when the migration is done. Let's update the database version
         */
        $options->set( 'db_version', config( 'tendoo.db_version' ) );

        /**
         * if we're updating the database, we might publish the files as well.
         * @warn this operation might be low.
         * We should consider looking for an easier solution.
         */
        Artisan::call( 'tendoo:publish' );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The database has been correctly updated. You\'ll be redirected shortly.' )
        ];
    }

    /**
     * Post File
     * @return void
     */
    public function postFiles() 
    {
        /**
         * if we're updating the database, we might publish the files as well.
         * @warn this operation might be low.
         * We should consider looking for an easier solution.
         */
        Artisan::call( 'tendoo:publish' );

        /**
         * if the publish is done. We can then close this
         */
        Storage::disk( 'root' )->delete( 'should-publish-assets' );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The file has been published. You\'ll be redirected shortly.' )
        ];
    }
}