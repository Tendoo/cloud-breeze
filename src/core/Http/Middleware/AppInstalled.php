<?php

namespace Tendoo\Core\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Exceptions\TendooNotInstalledException;

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
