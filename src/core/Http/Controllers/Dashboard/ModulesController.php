<?php
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Tendoo\Core\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Log;
use Tendoo\Core\Http\Requests\PostModuleRequest;
use Tendoo\Core\Exceptions\CoreException;
use Tendoo\Core\Exceptions\ModuleMigrationRequiredException;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Tendoo\Core\Exceptions\NotFoundException;
use Tendoo\Core\Facades\Hook;

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
    public function enableModule( Request $request )
    {
        $namespace  =   $request->input( 'module' );

        /**
         * check if the module has a migration
         * if a migration exist, then we'll return to the migration page
         */
        $migration  =   $this->modules->getMigrations( $namespace );

        if ( $migration ) {
            throw new ModuleMigrationRequiredException( $migration );
        }

        // @todo check if the user has the right to perform this action.
        Hook::action( 'before.enabling.module', $namespace );

        $result     =   $this->modules->enable( $namespace );

        if ( $result[ 'status' ] == 'success' ) {
            // when the module has been enabled
            Hook::action( 'after.enabling.module', $result[ 'module' ] );

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
    public function disableModule( Request $request )
    {
        $namespace = $request->input( 'module' );

        // @todo check if the user has the right to perform this action.
        Hook::action( 'before.disabling.module', $namespace );

        $result     =   $this->modules->disable( $namespace );

        if ( $result[ 'code' ] == 'module_disabled' ) {
            // when the module has been enabled
            Hook::action( 'after.disabling.module', $result[ 'module' ] );

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
     * @todo review
     * @return void
     */
    public function extractModule( $module )
    {
        /**
         * let's make sure the url is valid
         */
        if ( ! request()->hasValidSignature() ) {
            throw new AccessDeniedException( __( 'This url is not valid or has expired.' ) );
        }

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
        Hook::action( 'before.uploading.module', $request );

        $result     =   $this->modules->upload( $request->file( 'module' ) );

        /**
         * Treat Response
         */
        switch ( $result[ 'code' ] ) {
            case 'invalid_module' :
                Hook::action( 'after.uploading.module', $result );
                throw new CoreException([
                    'message'   =>  __( 'The zip file is not a valid module.' )
                ]);
            break;
            case 'old_module' : 
                Hook::action( 'after.uploading.module', $result );
                throw new CoreException([
                    'message'    =>  __( 'The similar module found is up-to-date. Please remove this module before proceeding' )
                ]);
            break;
            case 'valid_module':
                Hook::action( 'after.uploading.module', $result );
                return [
                    'status'    =>  'success',
                    'message'   =>  __( 'The module has been installed' )
                ];
            break;
            case 'check_for_migration':
                Hook::action( 'after.uploading.module', $result );
                return [
                    'status'    =>  'success',
                    'message'   =>  __( 'the module has been installed.' ),
                    'action'    =>  'check.migration',
                    'module'    =>  $result[ 'module' ]
                ];
            break;
            default:
                Hook::action( 'after.uploading.module', $result );
                throw new CoreException([
                    'message'   =>  __( 'An unexpected error has occured' )
                ]);
            break;
        }
    }

    /**
     * Run migration for a specific module 
     * @param string namespace
     * @todo review
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
     * @todo review
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
        Hook::action( 'before.deletingModule', $namespace );

        $result     =   $this->modules->delete( $namespace );

        if ( $result[ 'code' ] == 'module_deleted' ) {
            return [
                'status'    =>  'success',
                'message'   =>  sprintf( __( 'The module %s has been deleted.' ), $result[ 'module' ][ 'name' ] )
            ];
        }

        throw new CoreException([
            'status'    =>  'danger',
            'message'   =>  __( 'unable to locate the module.' )
        ]);
    }

    /**
     * Get a single module
     * @param string module namespace
     * @return Module
     */
    public function getModule( $namespace )
    {
        $module     =    $this->modules->get( $namespace );

        if ( empty( $module ) ) {
            throw new NotFoundException([
                'message'   =>  __( 'Unable to find the module using the provided namespace' )
            ]);
        }
        
        return $module;
    }

    /**
     * create a symlink for
     * the defined module
     * @param string module namespace
     * @return AsyncResponse
     */
    public function setSymlink( $namespace )
    {
        $module     =   $this->modules->get( $namespace );

        /**
         * makes sure the moduel actually
         * exists
         */
        if ( ! empty( $module ) ) {
            $this->modules->createSymlink( $namespace );
            return [
                'status'    =>  'success',
                'message'   =>  sprintf( __( 'The symlink has been set for the module %s.' ), $module[ 'name' ] )
            ];
        }

        throw new NotFoundException([
            'message'   =>  __( 'Unable to find the module using the provided namespace' )
        ]);
    }
}