<?php

namespace Tendoo\Core\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Core\Services\Helper;

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
            return redirect()->route( 'setup.step' );
        }
        return $next($request);
    }
}
