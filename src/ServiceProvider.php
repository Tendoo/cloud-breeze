<?php
namespace Tendoo;

if ( ! defined( '_SLASH_' ) ) {
    define( '_SLASH_', DIRECTORY_SEPARATOR );
}

define( 'TENDOO_ROOT', __DIR__ );
define( 'TENDOO_VERSION', '5.0' );

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
use Illuminate\Routing\Router;
use Jackiedo\DotenvEditor\DotenvEditor;
use Tendoo\Core\Http\TendooKernel;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Support\Facades\Artisan;

class ServiceProvider extends CoreServiceProvider
{
    protected $defer    =   false;
    
    /**
     * boot method
     */
    public function boot( Router $router )
    {
        // Am i forced to do this ?
        $this->app->bind('dotenv-editor', 'Jackiedo\DotenvEditor\DotenvEditor');

        $router->aliasMiddleware( 'app.installed', \Tendoo\Core\Http\Middleware\AppInstalled::class );
        $router->aliasMiddleware( 'app.notInstalled', \Tendoo\Core\Http\Middleware\AppNotInstalled::class );
        $router->aliasMiddleware( 'expect.unlogged', \Tendoo\Core\Http\Middleware\RedirectIfAuthenticated::class );
        $router->aliasMiddleware( 'expect.logged', \Tendoo\Core\Http\Middleware\RedirectIfNotAuthenticated::class );
        $router->aliasMiddleware( 'can.register', \Tendoo\Core\Http\Middleware\CheckRegistrationStatus::class );
        
        $corePath       =   base_path() . _SLASH_ . 'core' . _SLASH_ ;
        $configPath     =   base_path() . _SLASH_ . 'config' . _SLASH_ ;
        $publicPath     =   base_path() . _SLASH_ . 'public' . _SLASH_ . 'tendoo';
        $servicePath    =   $corePath . 'Services';

        config([ 'temp.temp-core' => [
            'driver' => 'local',
            'root' => storage_path( 'core' ),
        ] ]);
        
        config([ 'temp.root' => [
            'driver' => 'local',
            'root' => base_path(),
        ] ]);

        config([ 'temp.modules' => [
            'driver' => 'local',
            'root' => base_path( 'modules' ),
        ] ]);
        
        config([ 'temp.temp-modules' => [
            'driver'    =>  'local',
            'root'  =>  storage_path( 'modules' )
        ] ]);

        config([ 'filesystems.disks' => array_merge( config( 'filesystems.disks' ), config( 'temp' ) ) ]);

        if ( $this->app->runningInConsole() ) {
            $this->commands([
                DisableModule::class,
                EnableModule::class,
                GenerateModule::class, // where the error comes from
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
        // $this->publishes([
        //     __DIR__ . '/core/Crud'   =>  $corePath . 'Crud'
        // ]);

        /**
         * Moving Exceptions
         */
        // $this->publishes([
        //     __DIR__ . '/core/Exceptions'   =>  $corePath . 'Exceptions'
        // ]);

        /**
         * Moving Controllers
         */
        // $this->publishes([
        //     __DIR__ . '/core/Http/Controllers'   =>  $corePath . 'Http' . _SLASH_ . 'Controllers'
        // ]);

        /**
         * Moving Middlewares
         */
        // $this->publishes([
        //     __DIR__ . '/core/Http/Middleware'   =>  $corePath . 'Http' . _SLASH_ . 'Middleware'
        // ]);

        /**
         * Moving Request
         */
        // $this->publishes([
        //     __DIR__ . '/core/Http/Requests'   =>  $corePath . 'Http' . _SLASH_ . 'Requests'
        // ]);

        /**
         * Moving Request
         */
        // $this->publishes([
        //     __DIR__ . '/core/Models'   =>  $corePath . 'Models'
        // ]);
        
        /**
         * Moving Providers
         */
        // $this->publishes([
        //     __DIR__ . '/core/Providers'   =>  $corePath . 'Providers'
        // ]);
        
        /**
         * Moving Services
         */
        // $this->publishes([
        //     __DIR__ . '/core/Services'   =>  $corePath . 'Services'
        // ]);
        
        /**
         * Load Route from Web
         */
        $this->loadRoutesFrom( __DIR__ . '/routes/web.php');

        /**
         * Load Migrations
         */
        $this->loadMigrationsFrom( __DIR__ . '/database/migrations');

        /**
         * Publish Views
         */
        $this->loadViewsFrom( __DIR__ . '/resources/views', 'tendoo' );
        
        // $this->publishes([
            // __DIR__ . '/resources/views' => resource_path('views/tendoo' ),
        // ]);
        
        $this->publishes([
            __DIR__ . '/config/tendoo.php'   =>  $configPath . '/tendoo.php'
        ]);

        $this->publishes([
            __DIR__ . '/public'   =>  $publicPath
        ]);
    }

    /**
     * Register Stuff
     */
    public function register()
    {
        $this->app->singleton('orchestra.parser.xml', function ($app) {
            return new XmlReader(new XmlDocument($app));
        });

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