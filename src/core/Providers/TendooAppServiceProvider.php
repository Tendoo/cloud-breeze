<?php

namespace Tendoo\Core\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Schema;
use Illuminate\Encryption\Encrypter;
use Tendoo\Core\Services\Menus;
use Tendoo\Core\Services\Dashboard\MenusConfig;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\Guard;
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
        /**
         * We might need to publish views as well
         */
        if ( ! is_dir( base_path() . '/public/tendoo' ) ) {
            Artisan::call( 'vendor:publish', [
                '--tag' => 'tendoo-assets',
            ]);

            Artisan::call( 'vendor:publish', [
                '--tag' => 'tendoo-config',
            ]);
        }

        /**
         * Let's check if the .env exists 
         * if not. Let's create it. since it's needed
         */
        if ( ! Storage::disk( 'root' )->exists( '.env' ) ) {
            Storage::disk( 'root' )->put( '.env', view( 'tendoo::generate.env' ) );            
            return redirect( url()->current() )->send();
        }
        
        Schema::defaultStringLength(191);

        /**
         * If app key is not defined, we can define it automatically and redirect 
         * to the same page
         */
        if ( DotenvEditor::keyExists( 'APP_KEY' ) ) {
            if ( empty( DotenvEditor::getValue( 'APP_KEY' ) ) ) {
                DotEnvEditor::setKey( 'APP_KEY', 'base64:' . base64_encode(
                    Encrypter::generateKey( config( 'app.cipher' ) )
                ) );
                DotEnvEditor::save();
            }
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // register a singleton a menu
        $this->app->singleton( 'Tendoo\Core\Services\Menus', function( $app ) {
            return new Menus();
        });

        // register dashboard menu singleton
        $this->app->singleton( 'Tendoo\Core\Services\Dashboard\MenusConfig', function( $app ) {
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

        require_once TENDOO_ROOT . '/core/Services/Helper.php';
        require_once TENDOO_ROOT . '/core/Services/HelperFunctions.php';
    }
}
