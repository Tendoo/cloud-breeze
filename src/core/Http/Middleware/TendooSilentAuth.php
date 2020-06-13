<?php

namespace CloudBreeze\Core\Http\Middleware;

use Closure;
use Exception;

use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use CloudBreeze\Core\Exceptions\TendooInstalledException;
use CloudBreeze\Core\Exceptions\WrongCredentialException;
use CloudBreeze\Core\Exceptions\AccessDeniedException;
use CloudBreeze\Core\Models\User;
use CloudBreeze\Core\Services\DateService;
use CloudBreeze\Core\Services\AuthService;
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
