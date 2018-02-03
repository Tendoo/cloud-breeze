<?php

namespace Tendoo\App\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;

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
            return redirect()->route( 'login.index' )->withErrors([
                'status'    =>  'warning',
                'message'   =>  __( 'You don\'t have access to that page.' )
            ]);
        }
        return $next($request);
    }
}
