<?php

namespace Tendoo\Core\Http\Middleware;

use Closure;
use Tendoo\Core\Services\Helper;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Storage;
use Illuminate\Session\CookieSessionHandler;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;

class RedirectToSetup
{
    private $session;
    
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if ( ! Helper::AppIsInstalled() && ! in_array( Route::currentRouteName(), [ 
            'setup.step', 
            'setup.post.database', 
            'setup.post.app-details' 
        ]) ) {

            /**
             * Redirect to the setup route
             */
            $cookie_name    =   strtolower( config( 'app.name' ) ) . '_session';
            Cookie::queue( Cookie::forget( $cookie_name ) );
            return redirect()->route( 'setup.step' );


        } else if ( Helper::AppIsInstalled() && in_array( Route::currentRouteName(), [ 
            'setup.step', 
            'setup.post.database', 
            'setup.post.app-details' 
        ]) ) {

            /**
             * Redirect to the auth page
             */
            return redirect()->route( 'login.index' )->withErrors([
                'status'    =>  'warning',
                'message'   =>  __( 'You don\'t have access to that page.' )
            ]);


        }
        return $next($request);
    }
}
