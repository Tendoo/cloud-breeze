<?php

namespace Tendoo\Core\Http\Middleware;

use Closure;
use Exception;

use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Core\Exceptions\TendooInstalledException;
use Tendoo\Core\Exceptions\WrongCredentialException;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Tendoo\Core\Models\User;
use Tendoo\Core\Services\DateService;
use Tendoo\Core\Services\AuthService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Cache;


class TendooSilentAuth
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $authMiddleware     =   new TendooAuth;

        try {
            $authMiddleware->handle( $request, $next );
            return $next( $request );
        } catch( \Exception $e ) {
            return $next( $request );
        }
    }
}
