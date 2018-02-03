<?php

namespace Tendoo\App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Tendoo\App\Services\Modules;
use Tendoo\App\Services\Setup;
use Tendoo\App\Services\Helper;

class EnableModule extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:enable {namespace}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Enable an existing module.';

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
        $this->module   =   $modules->get( ucwords( $this->argument( 'namespace' ) ) );

        if ( $this->module ) {
            $modules->enable( ucwords( $this->argument( 'namespace' ) ) );
            return $this->info( sprintf( '%s has been enabled.', $this->module[ 'name' ] ) );
        }

        return $this->error( 'Unable to locate the module !' );
    }
}
