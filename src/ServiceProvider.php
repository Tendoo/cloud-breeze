<?php
namespace CloudBreeze;

if ( ! defined( '_SLASH_' ) ) {
    define( '_SLASH_', DIRECTORY_SEPARATOR );
}

define( 'CB_ROOT', __DIR__ );

/**
 * Updating this will force 
 * assets and database migration
 */

// require_once CB_ROOT . '/core/Services/Helper.php';
require_once CB_ROOT . '/constants.php';
require_once CB_ROOT . '/core/Services/HelperFunctions.php';

use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider as CoreServiceProvider;

use Jackiedo\DotenvEditor\DotenvEditor;
use Orchestra\Parser\Xml\Document as XmlDocument;
use Orchestra\Parser\Xml\Reader as XmlReader;
use CloudBreeze\Core\Models\Role;
use CloudBreeze\Core\Http\TendooKernel;
use CloudBreeze\Core\Observers\RoleObserver;

use CloudBreeze\Core\Console\Commands\OptionGet;
use CloudBreeze\Core\Console\Commands\OptionSet;
use CloudBreeze\Core\Console\Commands\EnableModule;
use CloudBreeze\Core\Console\Commands\ModuleModels;
use CloudBreeze\Core\Console\Commands\OptionDelete;
use CloudBreeze\Core\Console\Commands\ResetCommand;
use CloudBreeze\Core\Console\Commands\DisableModule;
use CloudBreeze\Core\Console\Commands\GenerateModule;
use CloudBreeze\Core\Console\Commands\PublishCommand;
use CloudBreeze\Core\Console\Commands\RefreshCommand;
use CloudBreeze\Core\Console\Commands\ModuleController;
use CloudBreeze\Core\Console\Commands\ModuleMigrations;
use CloudBreeze\Core\Console\Commands\EnvEditorGetCommand;
use CloudBreeze\Core\Console\Commands\EnvEditorSetCommand;
use CloudBreeze\Core\Console\Commands\ModuleSymlinkCommand;
use CloudBreeze\Core\Console\Commands\MakeModuleServiceProvider;
use CloudBreeze\Core\Console\Commands\ModuleCrudGeneratorCommand;
use CloudBreeze\Core\Console\Commands\DeleteExpiredOptionsCommand;

use CloudBreeze\Core\Http\Middleware\SafeURLMiddleware;

class ServiceProvider extends CoreServiceProvider
{
    protected $defer    =   false;
    
    /**
     * boot method
     */
    public function boot( Router $router )
    {    
        // $this->app->register( \Laravel\Sanctum\SanctumServiceProvider::class );

        $this->app->singleton( 'XmlParser', function ($app) {
            return new XmlReader(new XmlDocument($app));
        });
        
        /**
         * Register DotEnv Editor
         */
        $this->app->bind( 'dotenv-editor', 'Jackiedo\DotenvEditor\DotenvEditor');
        $this->app->bind( 'tendoo.doteditor', 'Jackiedo\DotenvEditor\DotenvEditor');
        $this->app->bind( 'tendoo.hook', 'TorMorten\Eventy\Events');
        
        /**
         * register CURL
         */
        $this->app->bind( 'tendoo.curl', 'Ixudra\Curl\CurlService' );
        $this->app->bind( 'tendoo.page', 'CloudBreeze\Core\Services\Page' );
        $this->app->bind( 'tendoo.helper', 'CloudBreeze\Core\Services\Helper' );
        $this->app->bind( 'tendoo.field', 'CloudBreeze\Core\Services\Field' );
        $this->app->bind( 'tendoo.modules', 'CloudBreeze\Core\Services\Modules' );
        
        /**
         * Register the route provider 
         * before the Laravel Route Provider
         */
        $this->app->register( \CloudBreeze\Core\Providers\TendooAppServiceProvider::class );
        $this->app->register( \CloudBreeze\Core\Providers\TendooEventServiceProvider::class );
        $this->app->register( \CloudBreeze\Core\Providers\TendooModulesServiceProvider::class );
        $this->app->register( \CloudBreeze\Core\Providers\TendooUserOptionsServiceProvider::class );
        $this->app->register( \CloudBreeze\Core\Providers\TendooRouteServiceProvider::class );
        $this->app->register( \TorMorten\Eventy\EventServiceProvider::class );
        $this->app->register( \TorMorten\Eventy\EventBladeServiceProvider::class );


        /**
         * Register Middleware
         */
        $router->aliasMiddleware( 'app.installed', \CloudBreeze\Core\Http\Middleware\AppInstalled::class );
        $router->aliasMiddleware( 'app.notInstalled', \CloudBreeze\Core\Http\Middleware\AppNotInstalled::class );
        $router->aliasMiddleware( 'expect.unlogged', \CloudBreeze\Core\Http\Middleware\RedirectIfAuthenticated::class );
        $router->aliasMiddleware( 'expect.logged', \CloudBreeze\Core\Http\Middleware\RedirectIfNotAuthenticated::class ); 
        $router->aliasMiddleware( 'can.register', \CloudBreeze\Core\Http\Middleware\CheckRegistrationStatus::class );
        $router->aliasMiddleware( 'check.migrations', \CloudBreeze\Core\Http\Middleware\CheckMigrations::class );
        $router->aliasMiddleware( 'tendoo.guard', \CloudBreeze\Core\Http\Middleware\LoadApi::class );
        $router->aliasMiddleware( 'tendoo.auth', \CloudBreeze\Core\Http\Middleware\TendooAuth::class );
        $router->aliasMiddleware( 'tendoo.silent-auth', \CloudBreeze\Core\Http\Middleware\TendooSilentAuth::class );
        $router->aliasMiddleware( 'tendoo.guest', \CloudBreeze\Core\Http\Middleware\TendooGuest::class );
        $router->aliasMiddleware( 'tendoo.cors', \CloudBreeze\Core\Http\Middleware\Cors::class );   
        $router->aliasMiddleware( 'tendoo.encrypt-cookies', \CloudBreeze\Core\Http\Middleware\EncryptCookies::class );
        $router->aliasMiddleware( 'tendoo.prevent.not-installed', \CloudBreeze\Core\Http\Middleware\AppInstalled::class );
        $router->aliasMiddleware( 'tendoo.prevent.installed', \CloudBreeze\Core\Http\Middleware\AppNotInstalled::class );
        $router->aliasMiddleware( 'tendoo.prevent.flood', \CloudBreeze\Core\Http\Middleware\PreventFloodRequest::class );   
        $router->aliasMiddleware( 'tendoo.can-register', \CloudBreeze\Core\Http\Middleware\CheckRegistrationStatus::class );
        $router->aliasMiddleware( 'tendoo.safe-url', SafeURLMiddleware::class );   
        
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
            ModuleSymlinkCommand::class,
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
            DeleteExpiredOptionsCommand::class,
        ]);

        if ( request()->secure() || request()->server( 'HTTP_X_FORWARDED_PROTO' ) === 'https' ) {
            $this->app[ 'request' ]->server->set( 'HTTPS', true );
        }

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
        
        /**
         * register observer for 
         * role model
         */
        Role::observe( RoleObserver::class );
    }

    /**
     * Register Stuff
     */
    public function register()
    {
        /**
         * the package configuraiton should be pulished 
         * without throwing any error
         */
        if ( config( 'tendoo.version', false ) === false ) {
            return false;
        }

        /**
         *  Changing the Auth Model Provider
         */
        config([ 'auth.providers.users'     =>  [
            'driver'    =>  'eloquent',
            'model'     =>  'CloudBreeze\Core\Models\User'
        ]]);
    }

    /**
     * Provide Tendoo Instance
     */
    public function provides()
    {
        return [ 'tendoo' ];
    }
}  
