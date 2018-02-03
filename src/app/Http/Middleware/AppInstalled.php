<?php

namespace Tendoo\App\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\App\Services\Helper;

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
