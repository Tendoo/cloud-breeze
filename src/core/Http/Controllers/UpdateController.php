<?php
namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Tendoo\Core\Services\Page;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Exceptions\AccessDeniedException;

class UpdateController extends TendooController 
{
    protected $options;

    public function __construct(
        Options $options
    )
    {
        parent::__construct();
        $this->options  =   $options;

        $this->middleware( function( $request, $next ){
            if ( $this->options->get( 'db_version' ) === config( 'tendoo.db_version' ) ) {
                throw new AccessDeniedException( __( 'Unable to access to the update' ) );
            }

            return $next( $request );
        });
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

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The database has been correctly updated. You\'ll be redirected shortly.' )
        ];
    }
}