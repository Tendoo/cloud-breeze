<?php 
namespace Tendoo\Core\Http;
use App\Http\Kernel;
use Tendoo\Core\Http\Middleware\VerifyCsrfToken;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Routing\Router;

class TendooKernel extends Kernel {
    public function __construct( Application $app, Router $router )
    {
        // parent::__construct( $app, $router );

        $this->middlewareGroups[ 'web' ][]  =   \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class;
        $this->middlewareGroups[ 'web' ][]  =   VerifyCsrfToken::class;

        unset( $this->routeMiddleware[ 'auth' ] );
    }
}