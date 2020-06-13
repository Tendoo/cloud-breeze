<?php

namespace CloudBreeze\Core\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use CloudBreeze\Core\Services\Helper;
use CloudBreeze\Core\Exceptions\TendooNotInstalledException;

class AppInstalled
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
        if ( ! Helper::AppIsInstalled() ) {
            throw new TendooNotInstalledException;
        }
        return $next($request);
    }
}
