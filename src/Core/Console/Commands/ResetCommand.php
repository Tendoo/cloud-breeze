<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cookie;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\Modules;

class ResetCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tendoo:reset';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reset the system for a fresh installation.';

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
        /**
         * If the application is not yet installed
         * no need to run the reset command
         */
        if ( ! Helper::AppIsInstalled() ) {
            return $this->info( 'It seems like the application is not yet installed. The reset is therefore not needed.' );
        }

        if ( $this->confirm( 'Would you like to delete everything ?' ) ) {

            /**
             * @hook tendoo.reset
             */
            Hook::action( 'tendoo.reset' );

            /**
             * run internal drop methods
             * to uninstall the application
             */
            Artisan::call( 'migrate:reset' );
            Artisan::call( 'config:clear' );
            Artisan::call( 'cache:clear' );
            Artisan::call( 'view:clear' );

            /**
             * remove modules migrations
             * retreive the installed module.
             */
            $moduleServices     =   app()->make( Modules::class );
            $modules            =   $moduleServices->get();

            foreach( $modules as $module ) {
                $moduleServices->dropAllMigrations( $module[ 'namespace' ] );
            }

            /**
             * Delete Environment Keys
             */
            DotEnvEditor::deleteKey( 'DB_HOST' );
            DotEnvEditor::deleteKey( 'DB_DATABASE' );
            DotEnvEditor::deleteKey( 'DB_USERNAME' );
            DotEnvEditor::deleteKey( 'DB_PASSWORD' );
            DotEnvEditor::deleteKey( 'DB_TABLE_PREFIX' );
            DotEnvEditor::deleteKey( 'DB_PORT' );
            DotEnvEditor::deleteKey( 'DB_CONNECTION' );
            DotEnvEditor::deleteKey( 'CB_VERSION' );
            DotenvEditor::save();

            $this->info( 'The system has been reset. You can now make a fresh installation.' );
        }
    }
}
