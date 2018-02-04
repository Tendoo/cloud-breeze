<?php

namespace Tendoo\Cms\App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cookie;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Cms\App\Services\Helper;

class ResetCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'reset';

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

            // reset migration
            Artisan::call( 'migrate:reset' );
            Artisan::call( 'config:clear' );
            Artisan::call( 'cache:clear' );
            Artisan::call( 'view:clear' );


            /**
             * Delete Environment Keys
             */
            DotEnvEditor::deleteKey( 'DB_HOST' );
            DotEnvEditor::deleteKey( 'DB_DATABASE' );
            DotEnvEditor::deleteKey( 'DB_USERNAME' );
            DotEnvEditor::deleteKey( 'DB_PASSWORD' );
            DotEnvEditor::deleteKey( 'DB_PREFIX' );
            DotEnvEditor::deleteKey( 'DB_PORT' );
            DotEnvEditor::deleteKey( 'DB_CONNECTION' );
            DotEnvEditor::deleteKey( 'TENDOO_VERSION' );
            DotenvEditor::save();

            $this->info( 'The system has been reset. You can now make a fresh installation.' );
        }
    }
}
