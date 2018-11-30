<?php
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Tendoo\Core\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;
use Tendoo\Core\Http\Requests\PostModuleRequest;
use Tendoo\Core\Exceptions\CoreException;

class ModulesController extends DashboardController
{
    public function __construct()
    {
        parent::__construct();
        $this->middleware( function( $request, $next ) {
            $this->checkPermission( 'manage.modules' );
            return $next( $request );
        });
    }

    public function modules()
    {
        return $this->modules->get();
    }

    /**
     * Module List
     * @return view
     */
    public function modulesList()
    {        
        $this->setTitle( __( 'Modules' ) );
        return view( 'tendoo::components.backend.modules' );
    }

    /**
     * Enable module
     * @param string module namespace
     * @return void
     */
    public function enableModule( $namespace )
    {
        /**
         * check if the module has a migration
         * if a migration exist, then we'll return to the migration page
         */
        $migration  =   $this->modules->getMigrations( $namespace );

        if ( $migration ) {
            throw new \Exception( __( 'Should redirect to the migration page' ) );
        }

        // @todo check if the user has the right to perform this action.
        Event::fire( 'before.enabling.module', $namespace );

        $result     =   $this->modules->enable( $namespace );

        if ( $result[ 'status' ] == 'success' ) {
            // when the module has been enabled
            Event::fire( 'after.enabling.module', $result[ 'module' ] );

            return [
                'status'    =>  'success',
                'message'   =>  sprintf( __( 'The module %s has been enabled' ), $result[ 'module' ][ 'name' ] )
            ];

        } else {

            /**
             * When the module activation throw an error
             */
            throw new CoreException( sprintf( __( 'The module <strong>%s</strong> has been disabled, since it throw that error : <strong>%s</strong>' ), $result[ 'module' ][ 'name' ], $result[ 'message' ] ) );
        }

        throw new CoreException( __( 'Unable to locate the module.' ) );
    }

    /**
     * Disable Module
     * @param string module namespace
     * @return void
     */
    public function disableModule( $namespace )
    {
        // @todo check if the user has the right to perform this action.
        Event::fire( 'before.disabling.module', $namespace );

        $result     =   $this->modules->disable( $namespace );

        if ( $result[ 'code' ] == 'module_disabled' ) {
            // when the module has been enabled
            Event::fire( 'after.disabling.module', $result[ 'module' ] );

            return [
                'status'    =>  'success',
                'message'   =>  sprintf( __( 'The module <strong>%s</strong> has been disabled' ), $result[ 'module' ][ 'name' ] )
            ];
        }

        throw new CoreException( __( 'Unable to locate the module.' ) );
    }

    /**
     * Extract module
     * @param string module namespace
     * @return void
     */
    public function extractModule( $module )
    {
        $moduleDetails     =   $this->modules->extract( $module );
        
        return response()->download( 
            $moduleDetails[ 'path' ], 
            strtolower( $moduleDetails[ 'module' ][ 'namespace' ] ) . '-' . $moduleDetails[ 'module' ][ 'version' ] . '.zip' 
        )->deleteFileAfterSend( true );
    }

    /**
     * Upload Module
     * @param void
     * @return string view
     */
    public function uploadModule()
    {
        $this->setTitle( __( 'Upload Module' ) );
        return view( 'tendoo::components.backend.upload-module' );
    }

    /**
     * Method to post a module
     * @param Request
     * @return void
     */
    public function postModule( PostModuleRequest $request )
    {
        Event::fire( 'before.uploading.module', $request );

        $result     =   $this->modules->upload( $request->file( 'module' ) );

        /**
         * Treat Response
         */
        switch ( $result[ 'code' ] ) {
            case 'invalid_module' :
                Event::fire( 'after.uploading.module', $result );
                throw new CoreException([
                    'message'   =>  __( 'The zip file is not a valid module.' )
                ]);
            break;
            case 'old_module' : 
                Event::fire( 'after.uploading.module', $result );
                throw new CoreException([
                    'message'    =>  __( 'The similar module found is up-to-date. Please remove this module before proceeding' )
                ]);
            break;
            case 'valid_module':
                Event::fire( 'after.uploading.module', $result );
                return [
                    'status'    =>  'success',
                    'message'   =>  __( 'The module has been installed' )
                ];
            break;
            case 'check_for_migration':
                Event::fire( 'after.uploading.module', $result );
                return [
                    'status'    =>  'success',
                    'message'   =>  __( 'the module has been installed.' ),
                    'action'    =>  'check.migration',
                    'module'    =>  $result[ 'module' ]
                ];
            break;
            default:
                Event::fire( 'after.uploading.module', $result );
                throw new CoreException([
                    'message'   =>  __( 'An unexpected error has occured' )
                ]);
            break;
        }
    }

    /**
     * Run migration for a specific module 
     * @param string namespace
     * @return view
     */
    public function migrateModule( $namespace )
    {
        $module     =   $this->modules->get( $namespace );
        
        if ( $module ) {
            /**
             * get module migrations
             */
            $versions  =   $this->modules->getMigrations( $namespace );

            $this->setTitle( __( 'Module Migration' ) );
            return view( 'tendoo::components.backend.module-migration', compact( 'module', 'versions' ) );
        }

        /**
         * if the module doesn't exist, then we can redirect it
         */
        $message    =   sprintf( __( 'The namespace <strong>%s</strong> does\'nt seems to belong to any installed module. The migration has failded.' ), $namespace );
        Log::info( $message );

        return redirect()->route( 'dashboard.modules.list' )->with([
            'status'    =>  'danger',
            'message'   =>  $message
        ]);
    }

    /**
     * Run Migration
     * @param string namespace
     * @return string json
     */
    public function runMigration( $namespace, Request $request )
    {
        $response     =   $this->modules->runMigration( 
            $namespace,
            $request->input( 'version' ), 
            $request->input( 'file' ) 
        );

        if ( $response[ 'status' ] === 'success' ) {
            return [
                'status'    =>  'success',
                'message'   =>  __( 'Migration has been correctly executed' )
            ];
        }

        /**
         * Probaly the file/version aren't correct
         */
        throw new CoreException( $response );
    }

    /**
     * Delete Module
     */
    public function deleteModule( $namespace )
    {
        /**
         * @todo check if the user can delete a module
         */
        Event::fire( 'before.deletingModule', $namespace );

        $result     =   $this->modules->delete( $namespace );

        if ( $result[ 'code' ] == 'module_deleted' ) {
            return redirect()->route( 'dashboard.modules.list' )->with([
                'status'    =>  'success',
                'message'   =>  sprintf( __( 'The module <strong>%s</strong> has been deleted.' ), $result[ 'module' ][ 'name' ] )
            ]);
        }

        return redirect()->route( 'dashboard.modules.list' )->with([
            'status'    =>  'danger',
            'message'   =>  __( 'unable to locate the module.' )
        ]);
    }
}