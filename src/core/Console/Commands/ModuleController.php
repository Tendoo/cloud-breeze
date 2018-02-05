<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Tendoo\Core\Services\Modules;
use Tendoo\Core\Services\Setup;
use Tendoo\Core\Services\Helper;

class ModuleController extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:controller {namespace} {name?} {--resource=} {--delete=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a controller for a specific module.';

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

            $controllerPath     =   $module[ 'namespace' ] . '/Http/Controllers/';

            /**
             * delete all module controllers
             */
            if ( $this->option( 'delete' ) == 'all' ) {
                if ( $this->confirm( 'Do you want to delete all controllers ?' ) ) {
                    Storage::disk( 'modules' )->deleteDirectory( $controllerPath );
                    Storage::disk( 'modules' )->MakeDirectory( $controllerPath );
                    return $this->info( 'All controllers has been deleted !' );
                }
            }

            /**
             * Define the file name
             */
            $name       =   ucwords( camel_case( $this->argument( 'name' ) ) );
            $fileName   =   $controllerPath . $name;
            $namespace  =   $this->argument( 'namespace' );

            if ( ! Storage::disk( 'modules' )->exists( 
                $fileName 
            ) ) {
                Storage::disk( 'modules' )->put( $fileName . '.php', view( 'generate.modules.controller', compact(
                    'modules', 'module', 'name', 'namespace'
                ) ) );
                return $this->info( 'The controller has been created !' );
            }      
            return $this->error( 'The controller already exists !' );          
        }
        return $this->error( 'Unable to located the module !' );
    }
}
