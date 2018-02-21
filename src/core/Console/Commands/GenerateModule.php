<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Tendoo\Core\Services\Modules;
use Tendoo\Core\Services\Setup;
use Tendoo\Core\Services\Helper;

class GenerateModule extends Command
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
    protected $signature = 'make:module';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new Tendoo module';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->modules   =   app()->make( Modules::class );
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if ( Helper::AppIsInstalled() ) {
            $this->askInformations();
        } else {
            $this->info( 'Tendoo is not yet installed.' );
        }
    }

    /**
     * ask for module information
     * @return void
     */
    public function askInformations()
    {
        $this->module[ 'namespace' ]        =   ucwords( $this->ask( 'Define the module namespace' ) );
        $this->module[ 'name' ]             =   $this->ask( 'Define the module name' );
        $this->module[ 'author' ]           =   $this->ask( 'Define the Author Name' );
        $this->module[ 'description' ]      =   $this->ask( 'Define a short description' );
        $this->module[ 'version' ]          =   '1.0';

        $table          =   [ 'Namespace', 'Name', 'Author', 'Description', 'Version' ];
        $this->table( $table, [ $this->module ] );

        if ( ! $this->confirm( 'Would you confirm theses informations \n' ) ) {
            $this->askInformations();
        }

        $this->generateModule();
    }

    /**
     * Generate Module
     * @return void
     */
    public function generateModule()
    {
        if ( ! $this->modules->get( $this->module[ 'namespace' ] ) ) {
            Storage::disk( 'modules' )->makeDirectory( $this->module[ 'namespace' ] );
            
            /**
             * Geneate Internal Directories
             */
            foreach([ 'Config', 'Events', 'Fields', 'Facades', 'Http', 'Migrations', 'Resources', 'Routes', 'Models', 'Providers', 'Services' ] as $folder ) {
                Storage::disk( 'modules' )->makeDirectory( $this->module[ 'namespace' ] . '/' . $folder );
            }

            /**
             * Generate Sub Folders
             */
            Storage::disk( 'modules' )->makeDirectory( $this->module[ 'namespace' ] . '/Http/Controllers' );
            Storage::disk( 'modules' )->makeDirectory( $this->module[ 'namespace' ] . '/Migrations/1.0' );
            Storage::disk( 'modules' )->makeDirectory( $this->module[ 'namespace' ] . '/Resources/Views' );

            /**
             * Generate Files
             */
            Storage::disk( 'modules' )->put( $this->module[ 'namespace' ] . '/config.xml', $this->streamContent( 'config' ) );
            Storage::disk( 'modules' )->put( $this->module[ 'namespace' ] . '/' . $this->module[ 'namespace' ] . 'Module.php', $this->streamContent( 'main' ) );
            Storage::disk( 'modules' )->put( $this->module[ 'namespace' ] . '/Events/' . $this->module[ 'namespace' ] . 'Event.php', $this->streamContent( 'event' ) );

        } else {

            $this->error( 'A similar module has been found' );

            if (  $this->confirm( 'Would you like to restart ?' ) ) {
                $this->askInformations();
            }
        }       
    }

    /**
     * Scream Content
     * @return string content
     */
    public function streamContent( $content ) 
    {
        switch ( $content ) {
            case 'main'     :   
            return view( 'tendoo::generate.modules.main', [
                'module'    =>  $this->module
            ]); 
            break;
            case 'config'     :   
            return view( 'tendoo::generate.modules.config', [
                'module'    =>  $this->module
            ]); 
            break;
            case 'event'     :   
            return view( 'tendoo::generate.modules.event', [
                'module'    =>  $this->module
            ]); 
            break;
        }
    }
}
