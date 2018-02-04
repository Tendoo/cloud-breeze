<?php

namespace Tendoo\Cms\App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Tendoo\Cms\App\Services\UserOptions;

class TendooUserOptionsServiceProvider extends ServiceProvider
{    
    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        // save Singleton for user options
        $this->app->singleton( UserOptions::class, function(){
            /**
             * Index 0 is used when user is not connected
             */
            return new UserOptions( Auth::id() != null ? Auth::id() : 0 );
        });
    }
}
