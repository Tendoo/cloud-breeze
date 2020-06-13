<?php

namespace CloudBreeze\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use CloudBreeze\Core\Services\Modules;
use CloudBreeze\Core\Services\Setup;
use CloudBreeze\Core\Services\Helper;

class ModuleController extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'modules:controller {namespace} {name?} {--resource=} {--delete=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a module controller.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $modules    =   app()->make( Modules::class );

        /**
         * Check if module is defined
         */
        if ( $module = $modules->get( $this->argument( 'namespace' ) ) ) {

            $controllerPath     =   $module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Http' . DIRECTORY_SEPARATOR . 'Controllers' . DIRECTORY_SEPARATOR;

            /**
             * delete all module controllers
             */
            if ( $this->option( 'delete' ) == 'all' ) {
                if ( $this->confirm( 'Do you want to delete all controllers ?' ) ) {
                    Storage::disk( 'cb-root' )->deleteDirectory( CB_MODULES_PATH . $controllerPath );
                    Storage::disk( 'cb-root' )->MakeDirectory( CB_MODULES_PATH . $controllerPath );
                    return $this->info( 'All controllers has been deleted !' );
                }
            }

            /**
             * Define the file name
             */
            $name       =   ucwords( Str::camel( $this->argument( 'name' ) ) );
            $fileName   =   $controllerPath . $name;
            $namespace  =   $this->argument( 'namespace' );

            if ( ! Storage::disk( 'cb-root' )->exists( CB_MODULES_PATH . 
                $fileName 
            ) ) {
                Storage::disk( 'cb-root' )->put( 
                    CB_MODULES_PATH . $fileName . '.php', view( 'tendoo::generate.modules.controller', compact(
                    'modules', 'module', 'name', 'namespace'
                ) ) );
                return $this->info( 'The controller has been created !' );
            }      
            return $this->error( 'The controller already exists !' );          
        }
        return $this->error( 'Unable to located the module !' );
    }
}
