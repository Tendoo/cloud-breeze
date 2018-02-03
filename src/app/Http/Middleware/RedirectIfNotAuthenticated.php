<?php

namespace Tendoo\App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class RedirectIfNotAuthenticated
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null )
    {
        if ( ! Auth::guard( $guard )->check() ) {
            return redirect()->route( config( 'tendoo.redirect.not-authenticated' ) )->withErrors([
                'status'    =>  'warning',
                'message'   =>  __( 'Please login first !' )
            ]);
        }
        return $next($request);
    }
}
