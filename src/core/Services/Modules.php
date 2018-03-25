<?php
namespace Tendoo\Core\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use Tendoo\Core\Services\Helper;
use XmlParser;
use PhpParser\Error;
use PhpParser\NodeDumper;
use PhpParser\ParserFactory;

class Modules 
{
    private $modules    =   [];
    private $xmlParser;
    private $options;

    public function __construct()
    {
        if ( Helper::AppIsInstalled() ) {
            /**
             * We can only enable a module if the databse is installed.
             */
            $this->options          =   app()->make( 'Tendoo\Core\Services\Options' );
        }

        $this->xmlParser    =   app()->make( 'XmlParser' );
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
        $rawfiles  =   Storage::disk( 'modules' )->files( $dir );
        
        /**
         * Just retreive the files name
         */
        $files  =   array_map( function( $file ) {
            $info   =   pathinfo( $file );
            return $info[ 'basename' ];
        }, $rawfiles );

        /**
         * Checks if a config file exists
         */
        if ( in_array( 'config.xml', $files ) ) {
            $xml        =   $this->xmlParser->load( base_path() . DIRECTORY_SEPARATOR . 'modules' . DIRECTORY_SEPARATOR . $dir . DIRECTORY_SEPARATOR . 'config.xml' );
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
                $modulesPath        =   config( 'tendoo.modules_path' );
                $currentModulePath  =   $modulesPath . $dir . DIRECTORY_SEPARATOR;
                $indexPath          =   $currentModulePath . ucwords( $config[ 'namespace' ] . 'Module.php' );
                $webRoutesPath      =   $currentModulePath . 'Routes' . DIRECTORY_SEPARATOR . 'web.php';

                // check index existence
                $config[ 'path' ]                       =   $currentModulePath;
                $config[ 'index-file' ]                 =   is_file( $indexPath ) ? $indexPath : false;
                $config[ 'routes-file' ]                =   is_file( $webRoutesPath ) ? $webRoutesPath : false;
                $config[ 'controllers-path' ]           =   $currentModulePath . 'Http' . DIRECTORY_SEPARATOR . 'Controllers';
                $config[ 'controllers-relativePath' ]   =   ucwords( $config[ 'namespace' ] ) . DIRECTORY_SEPARATOR . 'Http' . DIRECTORY_SEPARATOR . 'Controllers';
                $config[ 'views-path' ]                 =   $currentModulePath . 'Resources' . DIRECTORY_SEPARATOR . 'Views';
                $config[ 'dashboard-path' ]             =   $currentModulePath . 'Dashboard' . DIRECTORY_SEPARATOR;
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

                // store providers
                $config[ 'providers' ]      =   [];

                /**
                 * Service providers are registered when the module is enabled
                 */
                if ( $config[ 'enabled' ] ) {

                    /**
                     * register module service provider
                     */
                    $servicesProviders   =   Storage::disk( 'modules' )->allFiles( $config[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Providers' );

                    foreach( $servicesProviders as $service ) {
                        /**
                         * @todo run service provider
                         */
                        include_once( $modulesPath . $service );
                        $fileInfo       =   pathinfo( $service );
                        $className      =   ucwords( $fileInfo[ 'filename' ] );
                        $fullClassName  =   'Modules\\' . $config[ 'namespace' ] . '\\Providers\\' . $className;

                        if ( class_exists( $fullClassName ) ) {
    
                            $config[ 'providers' ][ $className ]   =   new $fullClassName( app() );
                            
                            /**
                             * If a register method exists
                             */
                            if ( method_exists( $config[ 'providers' ][ $className ], 'register' ) ) {
                                call_user_func([ $config[ 'providers' ][ $className ], 'register' ]);
                            }
                        }
                    }

                    /**
                     * Load module folder contents
                     */
                    foreach([ 'Models', 'Services', 'Facades', 'Crud' ] as $folder ) {
                        /**
                         * Load Module models
                         */
                        $files   =   Storage::disk( 'modules' )->allFiles( $config[ 'namespace' ] . DIRECTORY_SEPARATOR . $folder );

                        foreach( $files as $file ) {
                            /**
                             * @todo run service provider
                             */
                            $fileInfo   =   pathinfo(  $modulesPath . $file );
                            if ( $fileInfo[ 'extension' ] == 'php' ) {
                                include_once( $modulesPath . $file );
                            }
                        }
                    }

                    /**
                     * Load Module Config
                     */
                    $files   =   Storage::disk( 'modules' )->allFiles( $config[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Config' );
                    $moduleConfig       =   [];

                    foreach( $files as $file ) {
                        $info           =     pathinfo( $file );
                        $_config        =   include_once( $modulesPath . $file );
                        $final[ $config[ 'namespace' ] ]    =   [];
                        $final[ $config[ 'namespace' ] ][ $info[ 'filename' ] ]     =   $_config;   
                        $moduleConfig       =   array_dot( $final );
                    }

                    foreach( $moduleConfig as $key => $value ) {
                        config([ $key => $value ]);
                    }
                }

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

        include_once( TENDOO_ROOT . DIRECTORY_SEPARATOR .'core' . DIRECTORY_SEPARATOR . 'Services' . DIRECTORY_SEPARATOR . 'TendooModule.php' );

        foreach( $this->modules as $module ) {
            if ( ! $module[ 'enabled' ] ) {
                continue;
            }

            /**
             * Autoload Vendors
             */
            if ( is_file( $module[ 'path' ] . DIRECTORY_SEPARATOR .'vendor' . DIRECTORY_SEPARATOR . 'autoload.php' ) ) {
                include_once( $module[ 'path' ] . DIRECTORY_SEPARATOR .'vendor' . DIRECTORY_SEPARATOR . 'autoload.php' );
            }

            /**
             * Run boot() method for each enabled module
             */
            foreach( $module[ 'providers' ] as $provider ) {
                if( method_exists( $provider, 'boot' ) ) {
                    $provider->boot();
                }
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
            $zipFile        =   storage_path() . DIRECTORY_SEPARATOR . 'module.zip';
            // unlink old module zip
            if ( is_file( $zipFile ) ) {
                unlink( $zipFile );
            }

            // create new archive
            $zipArchive     =   new \ZipArchive;
            $zipArchive->open( 
                storage_path() . DIRECTORY_SEPARATOR . 'module.zip', 
                \ZipArchive::CREATE | 
                \ZipArchive::OVERWRITE 
            );
            $zipArchive->addEmptyDir( ucwords( $namespace ) );

            $moduleDir      =   dirname( $module[ 'index-file' ] );
            $files          =   Storage::disk( 'modules' )->allFiles( ucwords( $namespace ) );

            foreach( $files as $index => $file ) {
                /**
                 * We should avoid to extract git stuff as well
                 */
                if ( 
                    strpos( $file, $namespace . '/.git' ) === false && 
                    strpos( $file, $namespace . '/composer.json' ) ===  false &&
                    strpos( $file, $namespace . '/composer.lock' ) ===  false
                ) {
                    $zipArchive->addFile( config( 'tendoo.modules_path' ) . $file, $file );
                }
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

        $fullPath   =   storage_path( 'modules' . DIRECTORY_SEPARATOR . $path );        
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
            $rawFiles          =   Storage::disk( 'temp-modules' )->allFiles( $dir );

            /**
             * Just retreive the files name
             */
            $files  =   array_map( function( $file ) {
                $info   =   pathinfo( $file );
                return $info[ 'basename' ];
            }, $rawFiles );

            if ( in_array( 'config.xml', $files ) ) {
                
                $file   =   $dir . DIRECTORY_SEPARATOR . 'config.xml';

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
                foreach( $rawFiles as $file ) {
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
                $module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Migrations' . DIRECTORY_SEPARATOR
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
        $filePath   =   base_path() . DIRECTORY_SEPARATOR . 'modules' . DIRECTORY_SEPARATOR . $file;
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
            $directories        =   Storage::disk( 'modules' )->directories( ucwords( $module[ 'namespace' ] ) . DIRECTORY_SEPARATOR . 'Migrations' . DIRECTORY_SEPARATOR );
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
                        ucwords( $module[ 'namespace' ] ) . DIRECTORY_SEPARATOR . 'Migrations' . DIRECTORY_SEPARATOR . $version 
                    ) );
                }
            }
            return $version_names;
        }
        return [];
    }

    /**
     * Run module migration
     * @param string module namespace
     * @param string version number
     * @param string file path
     * @return void
     */
    public function runMigration( $namespace, $version, $file )
    {
        $module     =   $this->get( $namespace );
        return $this->__runSingleFile( 'up', $module, $module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Migrations' . DIRECTORY_SEPARATOR . $version . DIRECTORY_SEPARATOR . $file );
    }
}