<?php

namespace Tendoo\Core\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Storage;

use Tendoo\Core\Services\Modules;

class TendooRouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'Tendoo\Core\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        //

        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        Route::middleware( 'web' )
            ->namespace( $this->namespace )
            ->group( TENDOO_ROUTES_PATH . DIRECTORY_SEPARATOR . 'web.php' );

        $this->mapModulesWebRoutes();
    }

    /**
     * Map module web defined route
     * 
     * follow the same rules applied to self::mapWebRoutes();
     * 
     * @return void
     */
    protected function mapModulesWebRoutes()
    {
        // make module class
        $Modules    =   app()->make( Modules::class );

        foreach( $Modules->getActives() as $module ) {

            /**
             * We might check if the module is active
             */

            // include module controllers
            $controllers    =   Storage::disk( 'modules' )->files( $module[ 'controllers-relativePath' ] );
            foreach( $controllers as $controller ) {
                include_once( config( 'tendoo.modules_path' ) . '/' . $controller );
            }

            // if module has a web route file
            if ( $module[ 'routes-file' ] ) {
                Route::middleware([ 'web', 'app.installed' ])
                    ->namespace( 'Modules\\' . $module[ 'namespace' ] . '\Http\Controllers' )
                    ->group( $module[ 'routes-file' ] );
            }
        }
    }
}
