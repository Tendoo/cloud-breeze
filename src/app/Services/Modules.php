<?php
namespace Tendoo\Cms\App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use Tendoo\Cms\App\Services\Helper;
use XmlParser;
use PhpParser\Error;
use PhpParser\NodeDumper;
use PhpParser\ParserFactory;
class Modules 
{
    private $modules    =   [];

    public function __construct()
    {
        if ( Helper::AppIsInstalled() ) {
            /**
             * We can only enable a module if the databse is installed.
             */
            $this->options          =   app()->make( 'Tendoo\Cms\App\Services\Options' );
        }
    }

    /**
     * Load Modules
     * @return void
     */
    public function load( $dir = null )
    {
        /**
         * If we're not loading a specific module directory
         */
        if ( $dir == null ) {
            // get all modules folders
            $directories  =   Storage::disk( 'modules' )->directories();
    
            // get directories
            foreach( $directories as $dir ) {
                $this->__init( $dir );
            }
        } else {
            $this->__init( $dir );
        }
    }

    /**
     * Init Module directory
     * @param string
     * @return void
     */
    private function __init( $dir ) 
    {
        /**
         * Loading files from module directory
         */
        $files  =   Storage::disk( 'modules' )->files( $dir );

        // check if a config file exists
        if ( in_array( $dir . '/config.xml', $files ) ) {

            $xml        =   XmlParser::load( dirname( __FILE__ ) . '/../../modules/' . $dir . '/config.xml' );
            $config     =   $xml->parse([
                'namespace'             => [ 'uses'     => 'namespace' ],
                // 'language'           =>  [ 'uses'    => 'language' ], 
                'version'               =>  [ 'uses'    => 'version' ],
                'author'                =>  [ 'uses'    => 'author' ],
                'description'           =>  [ 'uses'    => 'description' ],
                'dependencies'          =>  [ 'uses'    =>  'dependencies' ],
                'name'                  =>  [ 'uses'    =>  'name' ]
            ]);

            $config[ 'files' ]          =   $files;

            // If a module has at least a namespace
            if ( $config[ 'namespace' ] != null ) {
                // index path
                $moduleBasePath     =   config( 'tendoo.modules_path' ) . $dir . '\\';
                $indexPath          =   $moduleBasePath . ucwords( $config[ 'namespace' ] . 'Module.php' );
                $webRoutesPath      =   $moduleBasePath . 'Routes\web.php';

                // check index existence
                $config[ 'index-file' ]                 =   is_file( $indexPath ) ? $indexPath : false;
                $config[ 'routes-file' ]                =   is_file( $webRoutesPath ) ? $webRoutesPath : false;
                $config[ 'controllers-path' ]           =   $moduleBasePath . 'Http\Controllers';
                $config[ 'controllers-relativePath' ]   =   ucwords( $config[ 'namespace' ] ) . '\Http\Controllers';
                $config[ 'views-path' ]                 =   $moduleBasePath . 'Resources\Views\\';
                $config[ 'dashboard-path' ]             =   $moduleBasePath . 'Dashboard\\';
                $config[ 'enabled' ]                    =   false; // by default the module is set as disabled

                /**
                 * If the system is installed, then we can check if the module is enabled or not
                 * since by default it's not enabled
                 */
                if ( Helper::AppIsInstalled() ) {
                    $modules                =   ( array ) json_decode( $this->options->get( 'enabled_modules' ), true );
                    $config[ 'enabled' ]    =   in_array( $config[ 'namespace' ], $modules ) ? true : false;
                }
                
                /**
                 * Defining Entry Class
                 * Entry class must be namespaced like so : 'Modules\[namespace]\[namespace] . 'Module';
                 */
                $config[ 'entry-class' ]    =  'Modules\\' . $config[ 'namespace' ] . '\\' . $config[ 'namespace' ] . 'Module'; 

                // an index MUST be provided and MUST have the same Name than the module namespace + 'Module'
                if ( $config[ 'index-file' ] ) {
                    $this->modules[ $config[ 'namespace' ] ]    =   $config;
                }
            }
        }
    }

    /**
     * Run Modules
     * @return void
     */
    public function init()
    {
        /**
         * Include Tendoo module Class
         * Required to autoload module components
         */

        include_once( base_path() . '/app/Services/TendooModule.php' );
        
        foreach( $this->modules as $module ) {
            if ( ! $module[ 'enabled' ] ) {
                continue;
            }

            // include module index file
            include_once( $module[ 'index-file' ] );
            
            // run module entry class
            $loadedModule     =   new $module[ 'entry-class' ];

            // add view namespace
            View::addNamespace( ucwords( $module[ 'namespace' ] ), $module[ 'views-path' ] );
        }
    }

    /**
     * Return the list of module as an array
     * @return array of modules
     */
    public function get( $namespace = null )
    {
        if ( $namespace !== null ) {
            return @$this->modules[ $namespace ];
        }
        return $this->modules;
    }

    /**
     * Return the list of active module as an array
     * @return array of active modules
     */
    public function getActives()
    {
        return array_filter( $this->modules, function( $module ) {
            if ( $module[ 'enabled' ] === true ) {
                return $module;
            }
        });
    }

    /**
     * Get by File
     * @param string file path
     * @return array/null
     */
    public function asFile( $indexFile )
    {
        foreach( $this->modules as $module ) {
            if ( $module[ 'index-file' ] == $indexFile ) {
                return $module;
            }
        }
    }

    /**
     * Extract module using provided namespace
     * @param string module namespace
     * @return array of module details
     */
    public function extract( $namespace )
    {
        if ( $module  = $this->get( $namespace ) ) {
            $zipFile        =   storage_path() . '\module.zip';
            // unlink old module zip
            if ( is_file( $zipFile ) ) {
                unlink( $zipFile );
            }

            // create new archive
            $zipArchive     =   new \ZipArchive;
            $zipArchive->open( 
                storage_path() . '\module.zip', 
                \ZipArchive::CREATE | 
                \ZipArchive::OVERWRITE 
            );
            $zipArchive->addEmptyDir( ucwords( $namespace ) );

            $moduleDir      =   dirname( $module[ 'index-file' ] );
            $files          =   Storage::disk( 'modules' )->allFiles( ucwords( $namespace ) );
            
            foreach( $files as $index => $file ) {
                $zipArchive->addFile( config( 'tendoo.modules_path' ) . $file, $file );
            }

            $zipArchive->close();

            return [
                'path'      =>  $zipFile,
                'module'    =>  $module
            ];
        }
    }

    /**
     * Upload a module
     * @param File module
     * @return boolean
     */
    public function upload( $file )
    {
        // move file to temp directory
        $path   =   Storage::disk( 'temp-modules' )->putFile( 
            null, 
            $file 
        );

        $fullPath   =   storage_path( 'modules\\' . $path );        
        $dir        =   dirname( $fullPath );
        $archive    =   new \ZipArchive;

        $archive->open( $fullPath );
        $archive->extractTo( $dir );
        $archive->close();

        /**
         * Unlink the uploaded zipfile
         */
        unlink( $fullPath );

        $directories    =   Storage::disk( 'temp-modules' )->directories();
        $module         =   [];
        
        /**
         * Seach if we can have a config.xml file within the extracted files
         */
        foreach( $directories as $dir ) {
            // browse directory files
            $files          =   Storage::disk( 'temp-modules' )->allFiles( $dir );

            if ( in_array( $dir . '/config.xml', $files ) ) {
                
                $file   =   $dir . '/config.xml';

                $xml    =   new \SimpleXMLElement( 
                    Storage::disk( 'temp-modules' )->get( $file )
                );

                if ( 
                    ! isset( $xml->namespace ) ||
                    ! isset( $xml->version ) ||
                    ! isset( $xml->name ) || 
                    $xml->getName() != 'module'
                ) {

                    /**
                     * the file send is not a valid module
                     */
                    $this->__clearTempFolder();
                    
                    return [
                        'status'    =>  'danger',
                        'code'      =>  'invalid_module'
                    ];
                }

                $moduleNamespace    =   ucwords( $xml->namespace );
                $moduleVersion      =   ucwords( $xml->version );

                /**
                 * Check if a similar module already exists
                 * and if the new module is outdated
                 */
                if ( $module = $this->get( $moduleNamespace ) ) {
                    
                    if ( version_compare( $module[ 'version' ], $moduleVersion, '>=' ) ) {
                        
                        /**
                         * We're dealing with old module
                         */
                        $this->__clearTempFolder();

                        return [
                            'status'    =>  'danger',
                            'code'      =>  'old_module',
                            'module'    =>  $module
                        ];
                    }
                } 

                /**
                 * @step 1 : creating host folder
                 * No errors has been found, We\'ll install the module then
                 */
                Storage::disk( 'modules' )->makeDirectory( $moduleNamespace );

                /**
                 * @step 2 : move files
                 * We're now looping to move files
                 */
                foreach( $files as $file ) {
                    // $realFile   =   substr( $file, strlen( $dir ) + 1 );
                    Storage::disk( 'modules' )->put( 
                        $file,
                        Storage::disk( 'temp-modules' )->get( $file )
                    );
                }

                /**
                 * @step 3 : run migrations
                 * check if the module has a migration
                 */                    
                return $this->__runModuleMigration( $moduleNamespace, $xml->version );                
            } else {
                /**
                 * the file send is not a valid module
                 */
                $this->__clearTempFolder();
                
                return [
                    'status'    =>  'danger',
                    'code'      =>  'invalid_module'
                ];
            }
        }
    }

    /**
     * Check module migration
     * @return array of response
     */
    private function __runModuleMigration( $moduleNamespace, $version )
    {
        $module_version_key     =   strtolower( $moduleNamespace ) . '_last_migration';
            
        if ( $version = $this->options->get( $module_version_key ) != null ) {

            /**
             * the new options will be set after the migration
             */   
            $this->__clearTempFolder();

            return [
                'status'    =>  'success',
                'code'      =>  'check_for_migration',
                'module'    =>  $this->get( $moduleNamespace )
            ];
        } else {

            /**
             * Load module since it has'nt yet been added to the 
             * runtime
             */
            $this->load( $moduleNamespace );

            /**
             * Run the first migration
             */
            $migrationFiles   =   $this->getMigrations( $moduleNamespace );

            /**
             * Checks if migration files exists
             */
            if ( $migrationFiles ) {
                foreach( $migrationFiles as $version => $files ) {

                    /**
                     * Looping each migration files
                     */
                    foreach ( $files as $file ) {
                        $this->__runSingleFile( 'up', $module, $file );
                    }
                    
                }
            }

            $this->options->set( $module_version_key, $version );

            $this->__clearTempFolder();

            return [
                'status'    =>  'danger',
                'code'      =>  'valid_module'
            ];
        }
    }

    /**
     * Clear Temp Folder
     * @return void
     */
    private function __clearTempFolder()
    {
        /**
         * The user may have uploaded some unuseful folders. 
         * We should then delete everything and return an error.
         */

        $directories  =   Storage::disk( 'temp-modules' )->allDirectories();

        foreach( $directories as $directory ) {
            Storage::disk( 'temp-modules' )->deleteDirectory( $directory );
        }

        /**
         * Delete unused files as well
         */
        $files  =   Storage::disk( 'temp-modules' )->allFiles();

        foreach( $files as $file ) {
            Storage::disk( 'temp-modules' )->delete( $file );
        }
    }

    /**
     * delete Modules
     * @param string module namespace
     * @return array of error message
     */
    public function delete( string $namespace )
    {
        /**
         * Check if module exists first
         */
        if ( $module = $this->get( $namespace ) ) {
            /**
             * Disable the module first
             */
            $this->disable( $namespace );
            
            /**
             * Delete Migration version
             */
            $this->options->delete( strtolower( $module[ 'namespace' ] ) . '_last_migration' );

            /**
             * Run down method for all migrations 
             */

            $migrationFiles   =   Storage::disk( 'modules' )->allFiles( 
                $module[ 'namespace' ] . '/Migrations/'
            );

            /**
             * Checks if migration files exists
             * so that we can "down" all migrations
             */
            if ( $migrationFiles ) {
                foreach( $migrationFiles as $file ) {
                    $this->__runSingleFile( 'down', $module, $file );
                }
            }

            /**
             * Delete module from DISK
             */
            Storage::disk( 'modules' )->deleteDirectory( ucwords( $namespace ) );

            return [
                'status'    =>  'success',
                'code'      =>  'module_deleted',
                'module'    =>  $module
            ];
        }

        /**
         * This module can't be found. then return an error
         */
        return [
            'status'    =>  'danger',
            'code'      =>  'unknow_module'
        ];
    }

    /**
     * Run a single file
     * @param array module
     * @param string file
     */
    private function __runSingleFile( $method, $module, $file )
    {
        /**
         * include initial migration files
         */             
        $filePath   =   base_path() . '/modules/' . $file;
        $fileInfo   =   pathinfo( $filePath );
        $fileName   =   $fileInfo[ 'filename' ];
        $className  =   str_replace( ' ', '', ucwords( str_replace( '_', ' ', $fileName ) ) );
        $className  =   'Modules\\' . ucwords( $module[ 'namespace' ] ) . '\Migrations\\' . $className;
        
        if ( is_file( $filePath ) ) {

            /**
             * Include the migration class file
             * and checks if that class exists
             * we're parsin the className from the file name
             */
            include_once( $filePath );
    
            if ( class_exists( $className ) ) {
    
                /**
                 * Create Object
                 */
                $object     =   new $className;
    
                // the method should be "up" or "down"
                $object->$method();
                return true;
            }
        }
        return false;
    }

    /**
     * Enable module
     * @param string namespace
     * @return array of error message
     */
    public function enable( string $namespace )
    {
        // check if module exists
        if ( $module = $this->get( $namespace ) ) {
            // @todo sandbox to test if the module runs
            $enabledModules     =   ( array ) json_decode( $this->options->get( 'enabled_modules' ), true );

            /**
             * Let's check if that module can be enabled
             */
            $code       =   file_get_contents( $module[ 'index-file' ] );
            $parser     =   ( new ParserFactory )->create( ParserFactory::PREFER_PHP7 );

            try {
                $attempt  =   $parser->parse( $code );
            } catch ( Error $error ) {
                return [
                    'status'    =>  'failed',
                    'message'   =>  $error->getMessage(),
                    'module'    =>  $module
                ];
            }

            /**
             * We're now atempting to trigger the module
             */
            try {
                include_once( $module[ 'index-file' ] );
                $moduleObject   =   new $module[ 'entry-class' ];
            } catch( \ErrorException $error ) {
                return [
                    'status'    =>  'failed',
                    'message'   =>  $error->getMessage(),
                    'module'    =>  $module
                ];
            }

            // make sure to enable only once
            if ( ! in_array( $namespace, $enabledModules ) ) {
                $enabledModules[]   =   $namespace;
                $this->options->set( 'enabled_modules', json_encode( $enabledModules ) );
            }

            return [
                'status'    =>  'success',
                'code'      =>  'module_enabled',
                'module'    =>  $module
            ];
        }

        return [
            'status'    =>  'warning',
            'code'      =>  'unknow_module'
        ];
    }

    /**
     * Disable Module
     * @param string module namespace
     * @return array of status message
     */
    public function disable( string $namespace )
    {
        // check if module exists
        if ( $module = $this->get( $namespace ) ) {
            // @todo sandbox to test if the module runs
            $enabledModules     =   ( array ) json_decode( $this->options->get( 'enabled_modules' ), true );
            $indexToRemove      =   array_search( $namespace, $enabledModules );

            // if module is found
            if ( $indexToRemove !== false ) {
                unset( $enabledModules[ $indexToRemove ] );
            }

            $this->options->set( 'enabled_modules', json_encode( $enabledModules ) );

            return [
                'status'    =>  'success',
                'code'      =>  'module_disabled',
                'module'    =>  $module
            ];
        }

        return [
            'status'        =>  'danger',
            'code'          =>  'unknow_module'
        ];
    }

    /**
     * get Migrations
     * @param string module namespace
     * @return array of version
     */
    public function getMigrations( $namespace )
    {
        $module         =   $this->get( $namespace );
        
        /**
         * if module exists
         */
        if ( $module ) {
            $lastVersion        =   $this->options->get( strtolower( $module[ 'namespace' ] ) . '_last_migration' );
            $currentVersion     =   $module[ 'version' ];
            $directories        =   Storage::disk( 'modules' )->directories( ucwords( $module[ 'namespace' ] ) . '/Migrations/' );
            $version_names      =   [];

            foreach( $directories as $dir ) {
                $version        =   basename( $dir );

                /**
                 * the last version should be lowed that the looped versions
                 * the current version should greather or equal to the looped versions
                 */
                if ( 
                    version_compare( $lastVersion, $version, '<' ) && 
                    version_compare( $currentVersion, $version, '>=' )
                ) {
                    $version_names[ $version ]    =   array_map( 'basename', Storage::disk( 'modules' )->allFiles(
                        ucwords( $module[ 'namespace' ] ) . '/Migrations/' . $version 
                    ) );
                }
            }
            return $version_names;
        }
        return [];
    }

    /**
     * Run module migration
     * @param array of migration
     * @return void
     */
    public function runMigration( $namespace, $version, $file )
    {
        $module     =   $this->get( $namespace );
        return $this->__runSingleFile( 'up', $module, $module[ 'namespace' ] . '/Migrations/' . $version . '/' . $file );
    }
}