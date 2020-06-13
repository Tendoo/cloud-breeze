<?php
namespace CloudBreeze\Core\Providers;

use Illuminate\Support\ServiceProvider;
use CloudBreeze\Core\Services\Modules;

class TendooModulesServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot( Modules $modules )
    {
        $modules->init();
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        // register module singleton
        $this->app->singleton( 'CloudBreeze\Core\Services\Modules', function( $app ) {
            $modules    =   new Modules;
            $modules->load();
            return $modules;
        });
    }
}
