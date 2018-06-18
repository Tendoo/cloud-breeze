<?php

namespace Tendoo\Core\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Blade;
use Illuminate\Encryption\Encrypter;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\UserOptions;
use Tendoo\Core\Services\Date;
use Tendoo\Core\Services\Guard;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Permission;
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
        Blade::withoutDoubleEncoding();

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
        // save Singleton for options
        $this->app->singleton( Options::class, function(){
            return new Options;
        });

        // save Singleton for options
        $this->app->singleton( Date::class, function(){
            $options    =   app()->make( Options::class );
            $timeZone   =   $options->get( 'app_timezone', 'Europe/London' );
            return new Date( $timeZone );
        });
        
        // save Singleton for guard class
        $this->app->singleton( Guard::class, function(){
            return new Guard;
        });
        
        // save Singleton for options
        $this->app->singleton( UserOptions::class, function(){
            return new UserOptions( Auth::id() );
        });

        // save Singleton for options
        $this->app->singleton( Users::class, function(){
            return new Users( 
                new Role,
                new User,
                new Permission
            );
        });

        require_once TENDOO_ROOT . '/core/Services/Helper.php';
        require_once TENDOO_ROOT . '/core/Services/HelperFunctions.php';
    }
}
