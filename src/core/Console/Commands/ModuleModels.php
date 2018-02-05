<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Tendoo\Core\Services\Modules;
use Tendoo\Core\Services\Setup;
use Tendoo\Core\Services\Helper;

class ModuleModels extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:model {namespace} {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a module model';

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
            /**
             * Define Variables
             */
            $modelsPath     =   $module[ 'namespace' ] . '/Models/';
            $name           =   ucwords( camel_case( $this->argument( 'name' ) ) );
            $fileName       =   $modelsPath . $name;
            $namespace      =   $this->argument( 'namespace' );

            if ( ! Storage::disk( 'modules' )->exists( 
                $fileName 
            ) ) {
                Storage::disk( 'modules' )->put( $fileName . '.php', view( 'generate.modules.model', compact(
                    'modules', 'module', 'name', 'namespace'
                ) ) );
                return $this->info( 'The model has been created !' );
            }      
            return $this->error( 'The model already exists !' );
        }
        return $this->error( 'Unable to locate the module !' );
    }
}
