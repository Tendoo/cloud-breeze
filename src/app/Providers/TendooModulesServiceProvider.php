<?php

namespace Tendoo\Cms\App\Providers;

use Illuminate\Support\ServiceProvider;
use Tendoo\Cms\App\Services\Modules;
class TendooModulesServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot( Modules $modules )
    {
        $modules->load();
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
        $this->app->singleton( 'Tendoo\Cms\App\Services\Modules', function( $app ) {
            return new Modules;
        });
    }
}
