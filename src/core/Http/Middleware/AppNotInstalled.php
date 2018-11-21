<?php

namespace Tendoo\Core\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Core\Exceptions\TendooInstalledException;

class AppNotInstalled
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
        if ( DotenvEditor::keyExists( 'TENDOO_VERSION' ) ) {
            throw new TendooInstalledException( __( 'Tendoo CMS has already been installed' ) );
        }
        return $next($request);
    }
}
