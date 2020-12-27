<?php

namespace Tendoo\Core\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Routing\Router;
use App\Http\Kernel\Kernel;
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
        parent::boot();
    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {        
        app()->booted( function() {
            Route::middleware( 'web' ) // <= watch this out
            ->namespace( $this->namespace )
            ->group( CB_ROUTES_PATH . DIRECTORY_SEPARATOR . 'web.php' );
        });

        Route::middleware( 'tendoo.cors' )->namespace( $this->namespace )
            ->group( CB_ROUTES_PATH . DIRECTORY_SEPARATOR . 'api.php' );

        $this->mapModulesRoutes();
    }

    /**
     * Map module web defined route
     * 
     * follow the same rules applied to self::mapWebRoutes();
     * 
     * @return void
     */
    protected function mapModulesRoutes()
    {
        // make module class
        $Modules    =   app()->make( Modules::class );

        foreach( $Modules->getActives() as $module ) {

            /**
             * We might check if the module is active
             */

            // include module controllers
            $controllers    =   Storage::disk( 'cb-root' )->files( CB_MODULES_PATH . $module[ 'controllers-relativePath' ] );
            foreach( $controllers as $controller ) {
                $fileInfo   =   pathinfo(  $controller );
                if ( $fileInfo[ 'extension' ] == 'php' ) {
                    include_once( base_path() . CB_S . $controller );
                }
            }

            // if module has a web route file
            if ( $module[ 'routes-file' ] !== false ) {
                Route::middleware([ 'web', 'app.installed' ])
                    ->namespace( 'Modules\\' . $module[ 'namespace' ] . '\Http\Controllers' )
                    ->group( $module[ 'routes-file' ] );
                
            }

            if ( $module[ 'api-file' ] !== false ) {
                Route::middleware([ 'tendoo.cors', 'app.installed' ])
                    ->namespace( 'Modules\\' . $module[ 'namespace' ] . '\Http\Controllers' )
                    ->group( $module[ 'api-file' ] );
            }
        }
    }
}
