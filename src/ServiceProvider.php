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
use Tendoo\Core\Console\Commands\OptionGet;
use Tendoo\Core\Console\Commands\RefreshCommand;
use Tendoo\Core\Console\Commands\ResetCommand;
use Tendoo\Core\Console\Commands\MakeModuleServiceProvider;
use Tendoo\Core\Console\Commands\EnvEditorSetCommand;
use Tendoo\Core\Console\Commands\EnvEditorGetCommand;
use Illuminate\Routing\Router;
use Jackiedo\DotenvEditor\DotenvEditor;
use Tendoo\Core\Http\TendooKernel;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Foundation\AliasLoader;

use Orchestra\Parser\Xml\Reader as XmlReader;
use Orchestra\Parser\Xml\Document as XmlDocument;

class ServiceProvider extends CoreServiceProvider
{
    protected $defer    =   false;
    
    /**
     * boot method
     */
    public function boot( Router $router )
    {
        /**
         * Register DotEnv Editor
         */
        $this->app->bind('dotenv-editor', 'Jackiedo\DotenvEditor\DotenvEditor');
        $this->app->bind('tendoo.doteditor', 'Jackiedo\DotenvEditor\DotenvEditor');

        /**
         * Register Eventy
         */
        $this->app->register( 'TorMorten\Eventy\EventServiceProvider' );
        $this->app->register( 'TorMorten\Eventy\EventBladeServiceProvider' );
        $this->app->bind( 'tendoo.hook', 'TorMorten\Eventy\Events');

        /**
         * register CURL
         */
        $this->app->bind( 'tendoo.curl', 'Ixudra\Curl\Facades\Curl' );

        /**
         * Register Middleware
         */
        $router->aliasMiddleware( 'app.installed', \Tendoo\Core\Http\Middleware\AppInstalled::class );
        $router->aliasMiddleware( 'app.notInstalled', \Tendoo\Core\Http\Middleware\AppNotInstalled::class );
        $router->aliasMiddleware( 'expect.unlogged', \Tendoo\Core\Http\Middleware\RedirectIfAuthenticated::class );
        $router->aliasMiddleware( 'expect.logged', \Tendoo\Core\Http\Middleware\RedirectIfNotAuthenticated::class );
        $router->aliasMiddleware( 'can.register', \Tendoo\Core\Http\Middleware\CheckRegistrationStatus::class );
        

        $corePath       =   base_path() . _SLASH_ . 'core' . _SLASH_ ;
        $configPath     =   base_path() . _SLASH_ . 'config' . _SLASH_ ;
        $publicPath     =   base_path() . _SLASH_ . 'public' . _SLASH_ . 'tendoo';
        $servicePath    =   $corePath . 'Services';

        if ( $this->app->runningInConsole() ) {
            $this->commands([
                DisableModule::class,
                EnableModule::class,
                GenerateModule::class,
                ModuleController::class,
                ModuleMigrations::class,
                ModuleModels::class,
                OptionDelete::class,
                OptionSet::class,
                OptionGet::class,
                RefreshCommand::class,
                ResetCommand::class,
                MakeModuleServiceProvider::class,
                EnvEditorSetCommand::class,
                EnvEditorGetCommand::class,
            ]);
        }
        
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
        
        $this->publishes([
            __DIR__ . '/config/tendoo.php'   =>  $configPath . '/tendoo.php'
        ], 'tendoo-config' );

        $this->publishes([
            __DIR__ . '/public'   =>  $publicPath
        ], 'tendoo-assets' );
    }

    /**
     * Register Stuff
     */
    public function register()
    {
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

        $this->app->singleton( 'XmlParser', function ($app) {
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