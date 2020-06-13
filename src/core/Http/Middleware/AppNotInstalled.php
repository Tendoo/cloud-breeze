<?php

namespace CloudBreeze\Core\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use CloudBreeze\Core\Exceptions\TendooInstalledException;

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
        if ( DotenvEditor::keyExists( 'CB_VERSION' ) ) {
            throw new TendooInstalledException( __( 'Tendoo CMS has already been installed' ) );
        }
        return $next($request);
    }
}
