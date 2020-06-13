<?php

namespace CloudBreeze\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use CloudBreeze\Core\Services\Modules;
use CloudBreeze\Core\Services\Setup;
use CloudBreeze\Core\Services\Helper;

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
            Storage::disk( 'cb-root' )->makeDirectory( CB_MODULES_PATH . $this->module[ 'namespace' ] );
            
            /**
             * Geneate Internal Directories
             */
            foreach([ 'Config', 'Crud', 'Events', 'Mails', 'Fields', 'Facades', 'Http', 'Migrations', 'Resources', 'Routes', 'Models', 'Providers', 'Services', 'Public' ] as $folder ) {
                Storage::disk( 'cb-root' )->makeDirectory( CB_MODULES_PATH . $this->module[ 'namespace' ] . DIRECTORY_SEPARATOR . $folder );
            }

            /**
             * Generate Sub Folders
             */
            Storage::disk( 'cb-root' )->makeDirectory( CB_MODULES_PATH . $this->module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Http' . DIRECTORY_SEPARATOR . 'Controllers' );
            Storage::disk( 'cb-root' )->makeDirectory( CB_MODULES_PATH . $this->module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Migrations' . DIRECTORY_SEPARATOR . '1.0' );
            Storage::disk( 'cb-root' )->makeDirectory( CB_MODULES_PATH . $this->module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Resources' . DIRECTORY_SEPARATOR . 'Views' );

            /**
             * Generate Files
             */
            Storage::disk( 'cb-root' )->put( CB_MODULES_PATH . $this->module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'config.xml', $this->streamContent( 'config' ) );
            Storage::disk( 'cb-root' )->put( CB_MODULES_PATH . $this->module[ 'namespace' ] . DIRECTORY_SEPARATOR . $this->module[ 'namespace' ] . 'Module.php', $this->streamContent( 'main' ) );
            Storage::disk( 'cb-root' )->put( CB_MODULES_PATH . $this->module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Events' . DIRECTORY_SEPARATOR . $this->module[ 'namespace' ] . 'Event.php', $this->streamContent( 'event' ) );
            Storage::disk( 'cb-root' )->put( CB_MODULES_PATH . $this->module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Public' . DIRECTORY_SEPARATOR . 'index.html', '<h1>Silence is golden !</h1>' );

            /**
             * Generate Module Public Folder
             * create a symbolink link to that directory
             */
            $target     =   base_path( 'modules/' . $this->module[ 'namespace' ] . '/Public' );

            if ( ! \windows_os() ) {
                Storage::disk( 'cb-root' )->makeDirectory( CB_PUBLIC_PATH . 'modules/' . $this->module[ 'namespace' ] );
                $link           =   \symlink( $target, public_path( '/modules/' . strtolower( $this->module[ 'namespace' ] ) ) );
            } else {
                $mode       =   'J';
                $link       =   public_path( 'modules' . DIRECTORY_SEPARATOR . strtolower( $this->module[ 'namespace' ] ) );
                $target     =   base_path( 'modules' . DIRECTORY_SEPARATOR . $this->module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Public' );
                $link       =   exec("mklink /{$mode} \"{$link}\" \"{$target}\"");
            }

            $this->info( sprintf( 'Your new module "%s" has been created.', $this->module[ 'name' ] ) );
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
