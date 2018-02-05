<?php
namespace Tendoo;

if ( ! defined( '_SLASH_' ) ) {
    define( '_SLASH_', DIRECTORY_SEPARATOR );
}

use Illuminate\Support\ServiceProvider as CoreServiceProvider;
use Tendoo\Core\Console\Commands\DisableModule;
use Tendoo\Core\Console\Commands\EnableModule;
use Tendoo\Core\Console\Commands\GenerateModule;
use Tendoo\Core\Console\Commands\ModuleController;
use Tendoo\Core\Console\Commands\ModuleMigrations;
use Tendoo\Core\Console\Commands\ModuleModels;
use Tendoo\Core\Console\Commands\OptionDelete;
use Tendoo\Core\Console\Commands\OptionSet;
use Tendoo\Core\Console\Commands\RefreshCommand;
use Tendoo\Core\Console\Commands\ResetCommand;

class ServiceProvider extends CoreServiceProvider
{
    protected $defer    =   true;
    
    /**
     * boot method
     */
    public function boot()
    {
        $corePath       =   base_path() . _SLASH_ . 'core' . _SLASH_ ;
        $configPath     =   base_path() . _SLASH_ . 'config' . _SLASH_ ;
        $servicePath    =   $corePath . 'Services';

        if ($this->app->runningInConsole()) {
            $this->commands([
                DisableModule::class,
                EnableModule::class,
                GenerateModule::class,
                ModuleController::class,
                ModuleMigrations::class,
                ModuleModels::class,
                OptionDelete::class,
                OptionSet::class,
                RefreshCommand::class,
                ResetCommand::class,
            ]);
        }

        /**
         * Moving the CRUD services
         */
        $this->publishes([
            __DIR__ . '/core/Crud'   =>  $corePath . 'Crud'
        ]);

        /**
         * Moving Exceptions
         */
        $this->publishes([
            __DIR__ . '/core/Exceptions'   =>  $corePath . 'Exceptions'
        ]);

        /**
         * Moving Controllers
         */
        $this->publishes([
            __DIR__ . '/core/Http/Controllers'   =>  $corePath . 'Http' . _SLASH_ . 'Controllers'
        ]);

        /**
         * Moving Middlewares
         */
        $this->publishes([
            __DIR__ . '/core/Http/Middleware'   =>  $corePath . 'Http' . _SLASH_ . 'Middleware'
        ]);

        /**
         * Moving Request
         */
        $this->publishes([
            __DIR__ . '/core/Http/Requests'   =>  $corePath . 'Http' . _SLASH_ . 'Requests'
        ]);

        /**
         * Moving Request
         */
        $this->publishes([
            __DIR__ . '/core/Models'   =>  $corePath . 'Models'
        ]);
        
        /**
         * Moving Providers
         */
        $this->publishes([
            __DIR__ . '/core/Providers'   =>  $corePath . 'Providers'
        ]);
        
        /**
         * Moving Services
         */
        $this->publishes([
            __DIR__ . '/core/Services'   =>  $corePath . 'Services'
        ]);
        
        /**
         * Load Route from Web
         */
        $this->loadRoutesFrom( __DIR__ . '/routes/web.php');

        /**
         * Load Migrations
         */
        $this->loadMigrationsFrom( __DIR__ . '/database/migrations');

        $this->publishes([
            __DIR__ . '/config/tendoo.php'   =>  $configPath
        ]);

        /**
         * Publish Views
         */
        $this->loadViewsFrom( __DIR__ . '/resources/views', 'tendoo' );
        
        // $this->publishes([
            // __DIR__ . '/resources/views' => resource_path('views/tendoo' ),
        // ]);
    }

    /**
     * Register Stuff
     */
    public function register()
    {
        /**
         * Merge Configurations
         */
        $this->mergeConfigFrom(
            __DIR__. '/config/app.php', 'app'
        );

        $this->mergeConfigFrom(
            __DIR__. '/config/auth.php', 'auth'
        );

        $this->mergeConfigFrom(
            __DIR__. '/config/filesystems.php', 'filesystems'
        );
    }

    /**
     * Provide Tendoo Instance
     */
    public function provides()
    {
        return [ 'tendoo' ];
    }
}  