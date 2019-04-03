<?php
namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\DateService;
use Tendoo\Core\Services\Modules;
use Carbon\Carbon;

class ModuleSymlinkCommand extends Command
{
    protected $signature = 'modules:symlink {namespace}';

    public function __construct()
    {
        parent::__construct();
    }

    public function handle()
    {
        $moduleService     =   app()->make( Modules::class );
        $optionsService    =   app()->make( Options::class );

        $module     =   $moduleService->get( $this->argument( 'namespace' ) );

        if ( $module ) {
            $moduleService->createSymLink( $this->argument( 'namespace' ) );
            return $this->info( sprintf( 'The symbolink directory has been created/refreshed for the module "%s".', $module[ 'name' ] ) );
        }

        $this->error( sprintf( 'Unable to find the module "%s".', $this->argument( 'namespace' ) ) );
    }
}