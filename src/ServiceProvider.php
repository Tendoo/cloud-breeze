<?php
namespace Tendoo;

if ( ! defined( '_SLASH_' ) ) {
    define( '_SLASH_', DIRECTORY_SEPARATOR );
}

define( 'TENDOO_ROOT', __DIR__ );

/**
 * Updating this will force 
 * assets and database migration
 */
define( 'TENDOO_VERSION', '5.0' );
define( 'TENDOO_ASSETS_VERSION', '1.6' );
define( 'TENDOO_DB_VERSION', '1.4' );

require_once TENDOO_ROOT . '/core/Services/Helper.php';
require_once TENDOO_ROOT . '/core/Services/HelperFunctions.php';

use Illuminate\Support\ServiceProvider as CoreServiceProvider;
use Tendoo\Core\Console\Commands\DisableModule;
use Tendoo\Core\Console\Commands\EnableModule;
use Tendoo\Core\Console\Commands\GenerateModule;
use Tendoo\Core\Console\Commands\ModuleController;
use Tendoo\Core\Console\Commands\ModuleMigrations;
use Tendoo\Core\Console\Commands\ModuleModels;
use Tendoo\Core\Console\Commands\ModuleCrudGeneratorCommand;
use Tendoo\Core\Console\Commands\OptionDelete;
use Tendoo\Core\Console\Commands\OptionSet;
use Tendoo\Core\Console\Commands\OptionGet;
use Tendoo\Core\Console\Commands\RefreshCommand;
use Tendoo\Core\Console\Commands\ResetCommand;
use Tendoo\Core\Console\Commands\MakeModuleServiceProvider;
use Tendoo\Core\Console\Commands\EnvEditorSetCommand;
use Tendoo\Core\Console\Commands\EnvEditorGetCommand;
use Tendoo\Core\Console\Commands\PublishCommand;
use Illuminate\Routing\Router;
use Jackiedo\DotenvEditor\DotenvEditor;
use Tendoo\Core\Http\TendooKernel;

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
        $this->app->bind( 'tendoo.curl', 'Ixudra\Curl\CurlService' );
        $this->app->bind( 'tendoo.page', 'Tendoo\Core\Services\Page' );
        $this->app->bind( 'tendoo.helper', 'Tendoo\Core\Services\Helper' );

        /**
         * Register Middleware
         */
        $router->aliasMiddleware( 'app.installed', \Tendoo\Core\Http\Middleware\AppInstalled::class );
        $router->aliasMiddleware( 'app.notInstalled', \Tendoo\Core\Http\Middleware\AppNotInstalled::class );
        $router->aliasMiddleware( 'expect.unlogged', \Tendoo\Core\Http\Middleware\RedirectIfAuthenticated::class );
        $router->aliasMiddleware( 'expect.logged', \Tendoo\Core\Http\Middleware\RedirectIfNotAuthenticated::class );
        $router->aliasMiddleware( 'can.register', \Tendoo\Core\Http\Middleware\CheckRegistrationStatus::class );
        $router->aliasMiddleware( 'check.updates', \Tendoo\Core\Http\Middleware\CheckUpdates::class );
        $router->aliasMiddleware( 'api.guard', \Tendoo\Core\Http\Middleware\LoadApi::class );
        // $router->middleware( \Illuminate\Contracts\Http\Kernel::class, TendooKernel::class );
        
        $corePath       =   base_path() . _SLASH_ . 'core' . _SLASH_ ;
        $configPath     =   base_path() . _SLASH_ . 'config' . _SLASH_ ;
        $publicPath     =   base_path() . _SLASH_ . 'public' . _SLASH_ . 'tendoo';
        $servicePath    =   $corePath . 'Services';

        /**
         * we don't need to be running the console
         * to have access to theses features
         */
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
            ModuleCrudGeneratorCommand::class,
            PublishCommand::class,
        ]);
        
        /**
         * Load Route from Web
         */
        // $this->loadRoutesFrom( __DIR__ . '/routes/web.php');

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

        /**
         * Register the route provider 
         * before the Laravel Route Provider
         */
        app()->register( \Tendoo\Core\Providers\TendooAppServiceProvider::class );
        app()->register( \Tendoo\Core\Providers\TendooEventServiceProvider::class );
        app()->register( \Tendoo\Core\Providers\TendooModulesServiceProvider::class );
        app()->register( \Tendoo\Core\Providers\TendooUserOptionsServiceProvider::class );
        app()->register( \Tendoo\Core\Providers\TendooRouteServiceProvider::class );
    }

    /**
     * Register Stuff
     */
    public function register()
    {
        /**
         * database update location path
         * @var constant
         */
        if ( ! defined( 'DATABASE_UPDATES_PATH' ) ): define( 'DATABASE_UPDATES_PATH', dirname( __FILE__ ) . '/database/updates/' ); endif;
        if ( ! defined( 'DATABASE_MIGRATIONS_PATH' ) ): define( 'DATABASE_MIGRATIONS_PATH', dirname( __FILE__ ) . '/database/migrations/' ); endif;
        if ( ! defined( 'TENDOO_CONFIG_PATH' ) ): define( 'TENDOO_CONFIG_PATH', dirname( __FILE__ ) . '/config/' ); endif;
        if ( ! defined( 'TENDOO_ASSETS_PATH' ) ): define( 'TENDOO_ASSETS_PATH', dirname( __FILE__ ) . '/public/' ); endif;
        if ( ! defined( 'TENDOO_ROOT_PATH' ) ): define( 'TENDOO_ROOT_PATH', dirname( __FILE__ ) ); endif;
        if ( ! defined( 'TENDOO_ROUTES_PATH' ) ): define( 'TENDOO_ROUTES_PATH', TENDOO_ROOT_PATH . DIRECTORY_SEPARATOR . 'routes' . DIRECTORY_SEPARATOR ); endif;

        /**
         * Define Storage Location Path
         */
        config([ 'temp.database-updates' => [
            'driver' => 'local',
            'root' => DATABASE_UPDATES_PATH,
        ] ]);
        
        config([ 'temp.tendoo-assets' => [
            'driver' => 'local',
            'root' => TENDOO_ASSETS_PATH,
        ] ]);

        config([ 'temp.tendoo-root' => [
            'driver' => 'local',
            'root' => TENDOO_ROOT_PATH,
        ] ]);

        config([ 'temp.laravel-public' => [
            'driver' => 'local',
            'root' => base_path( 'public' ),
        ] ]);
        
        config([ 'temp.tendoo-config' => [
            'driver' => 'local',
            'root' => TENDOO_CONFIG_PATH,
        ] ]);
        
        config([ 'temp.database-migrations' => [
            'driver' => 'local',
            'root' => DATABASE_MIGRATIONS_PATH,
        ] ]);

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

        config([ 'temp.config' => [
            'driver' => 'local',
            'root' => base_path( 'config' ),
        ] ]);
        
        config([ 'temp.temp-modules' => [
            'driver'    =>  'local',
            'root'  =>  storage_path( 'modules' )
        ] ]);

        config([ 'temp.uploads' => [
            'driver'    =>  'local',
            'root'      =>  storage_path( 'uploads' )
        ]]);

        config([ 'filesystems.disks' => array_merge( config( 'filesystems.disks' ), config( 'temp' ) ) ]);

        /**
         *  Changing the Auth Model Provider
         */
        config([ 'auth.providers.users'     =>  [
            'driver'    =>  'eloquent',
            'model'     =>  'Tendoo\Core\Models\User'
        ]]);

        /**
         * register version
         */
        config([
            'tendoo.db_version'     =>  TENDOO_DB_VERSION,
            'tendoo.assets_version' =>  TENDOO_ASSETS_VERSION,
            'tendoo.version'        =>  TENDOO_VERSION
        ]);

        $this->app->singleton( 'XmlParser', function ($app) {
            return new XmlReader(new XmlDocument($app));
        });

        
        /**
         * Overriding the Exception Handler
         */
        // $this->app->singleton(
        //     \App\Exceptions\Handler::class,
        //     \Tendoo\Core\Exceptions\TendooHandler::class
        // );

        $this->app->singleton(
            \App\Http\Kernel::class,
            TendooKernel::class
        );

        $this->app->singleton(
            \Illuminate\Contracts\Debug\ExceptionHandler::class,
            \Tendoo\Core\Exceptions\TendooHandler::class
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