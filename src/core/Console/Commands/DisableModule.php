<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Tendoo\Core\Services\Modules;
use Tendoo\Core\Services\Setup;
use Tendoo\Core\Services\Helper;

class DisableModule extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:disable {namespace?} {--all}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Disable an existing module';

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
        $this->modules      =   app()->make( Modules::class );
        $this->module       =   $this->modules->get( ucwords( $this->argument( 'namespace' ) ) );

        if ( $this->option( 'all' ) ) {
            $this->__disableAll();
        } else {
            $this->__disableSingle();
        }   
    }

    /**
     * Disable Single module
     * @return void
     */
    private function __disableSingle()
    {
        if ( $this->module ) {
            $this->modules->disable( ucwords( $this->argument( 'namespace' ) ) );
            return $this->info( sprintf( '%s has been disabled.', $this->module[ 'name' ] ) );
        }
        return $this->error( 'Unable to locate the module !' );
    }

    /**
     * Disable All Modules
     * @return void
     */
    private function __disableAll()
    {
        $modules    =   $this->modules->get();

        foreach ( $modules as $module ) {
            $this->modules->disable( $module[ 'namespace' ] );
        }
        return $this->info( 'All modules has been disabled !' );
    }
}
