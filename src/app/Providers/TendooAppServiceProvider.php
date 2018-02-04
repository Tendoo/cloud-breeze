<?php

namespace Tendoo\Cms\App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Schema;
use Tendoo\Cms\App\Services\Menus;
use Tendoo\Cms\App\Services\Dashboard\MenusConfig;
use Tendoo\Cms\App\Services\Options;
use Tendoo\Cms\App\Services\Guard;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;

class TendooAppServiceProvider extends ServiceProvider
{    
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
        /**
         * If app key is not defined, we can define it automatically and redirect 
         * to the same page
         */
        if ( empty( DotenvEditor::getValue( 'APP_KEY' ) ) ) {
            Artisan::call( 'key:generate' );
            return redirect( url()->current() );
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        /**
         * Let's check if the .env exists 
         * if not. Let's create it. since it's needed
         */
        if ( ! Storage::disk( 'root' )->exists( '.env' ) ) {
            Storage::disk( 'root' )->put( '.env', view( 'generate.env' ) );
            return redirect( url()->current() );
        }

        // register a singleton a menu
        $this->app->singleton( 'Tendoo\Cms\App\Services\Menus', function( $app ) {
            return new Menus();
        });

        // register dashboard menu singleton
        $this->app->singleton( 'Tendoo\Cms\App\Services\Dashboard\MenusConfig', function( $app ) {
            return new MenusConfig( $app->make( Menus::class ) );
        });

        // save Singleton for options
        $this->app->singleton( Options::class, function(){
            return new Options;
        });
        
        // save Singleton for guard class
        $this->app->singleton( Guard::class, function(){
            return new Guard;
        });

        require_once app_path() . '/Services/Helper.php';
        require_once app_path() . '/Services/HelperFunctions.php';
    }
}
