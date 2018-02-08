<?php
namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Tendoo\Core\Services\Helper;
use Illuminate\Support\Facades\Storage;

class MakeModuleServiceProvider extends Command
{
    /**
     * module description
     * @var array
     */
    private $module     =   [];

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:provider {namespace} {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a module service provider';

    /**
     * handle
     * @return void
     */
    public function handle()
    {
        if ( Helper::AppIsInstalled() ) {
            if ( ! empty( $this->argument( 'namespace' ) && ! empty( $this->argument( 'name' ) ) ) ) {
                $modules     =   app()->make( 'Tendoo\Core\Services\Modules' );

                /**
                 * Check if the module exists
                 */
                if ( $module = $modules->get( $this->argument( 'namespace') ) ) {
                    $fileName   =   ucwords( camel_case( $this->argument( 'name' ) ) );
                    $filePath   =   $module[ 'namespace' ] . '/Providers/' . $fileName . '.php';
                    if ( ! Storage::disk( 'modules' )->exists( $filePath ) ) {
                        Storage::disk( 'modules' )->put( 
                            $filePath,
                            view( 'tendoo::generate.modules.providers', [
                                'module'    =>  $module,
                                'className' =>  $fileName
                            ])
                        );
                        return $this->info( 'The service provider "' . $fileName . '" has been created for "' . $module[ 'name' ] . '"' );
                    }
                    return $this->info( 'A service provider with the same file name already exists.' );
                } else {
                    $this->info( 'Unable to find that module.' );
                }
            }
        } else {
            $this->info( 'Tendoo is not yet installed.' );
        }
    }
}