<?php

namespace Tendoo\Core\Providers;

use Illuminate\Support\ServiceProvider;
use Tendoo\Core\Services\Modules;
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
        $this->app->singleton( 'Tendoo\Core\Services\Modules', function( $app ) {
            return new Modules;
        });
    }
}
