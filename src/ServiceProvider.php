<?php
namespace Tendoo\Cms;

class ServiceProvider extends Illuminate\Support\ServiceProvider
{
    protected $defer    =   true;
    
    /**
     * boot method
     */
    public function boot()
    {
        $this->publishes([
            __DIR__ . '/app/Services'   =>  base_path() . 'app/Services'
        ]);
    }

    /**
     * Provide Tendoo Instance
     */
    public function provides()
    {
        return [ 'tendoo' ];
    }
}  