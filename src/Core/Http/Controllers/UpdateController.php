<?php
namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Tendoo\Core\Services\Update;
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
            
            $this->options      =   app()->make( 'Tendoo\Core\Services\Options' );

            if ( $this->options->get( 'assets_version' ) === config( 'tendoo.assets_version' ) ) {
                throw new \Exception( __( 'Updating the files is not required.' ) );
            }

            return $next( $request );
        })->only([ 'filesIndex', 'postFiles' ]);
    }

    /**
     * Post Database Update
     * @return void
     */
    public function postUpdate( Request $request)
    {
        $options    =   app()->make( 'Tendoo\Core\Services\Options' );
        $update     =   app()->make( Update::class );

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

        /**
         * including migrations files
         */
        $files  =   Storage::disk( 'cb-root' )->allFiles( CB_DBMIGRATIONS_PATH );
        foreach ( $files as $file ) {
            include_once( DATABASE_MIGRATIONS_PATH . $file );
        }

        $databaseFiles  =   $update->getUpdates();

        /**
         * including update files
         */
        foreach( $databaseFiles as $file ) {
            
            /**
             * including the files
             */
            include_once( DATABASE_UPDATES_PATH . $file );

            /**
             * creating class details
             */
            $details    =   pathinfo( $file );
            $version    =   str_replace( '.', '_',  $details[ 'dirname' ] );
            $className  =   Str::studly( $details[ 'filename' ] );
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
            'message'   =>  __( 'Database migration complete !' )
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
        $options    =   app()->make( 'Tendoo\Core\Services\Options' );
        $options->set( 'assets_version', config( 'tendoo.assets_version' ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The assets has been udpated !' )
        ];
    }
}