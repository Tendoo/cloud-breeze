<?php 
namespace CloudBreeze\Core\Http;
use App\Http\Kernel;
use Illuminate\Routing\Router;
use CloudBreeze\Core\Http\Middleware\EncryptCookies;
use Illuminate\Contracts\Foundation\Application;
use CloudBreeze\Core\Http\Middleware\VerifyCsrfToken;

class TendooKernel extends Kernel {
    public function __construct( Application $app, Router $router )
    {
        $this->middlewareGroups[ 'web' ][]  =   \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class;
        $this->middlewareGroups[ 'web' ][]  =   VerifyCsrfToken::class;
        $this->middlewareGroups[ 'web' ][]  =   EncryptCookies::class;

        unset( $this->routeMiddleware[ 'auth' ] );
    }
}