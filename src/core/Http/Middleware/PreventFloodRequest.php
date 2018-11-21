<?php
namespace Tendoo\Core\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Carbon\Carbon;
use Tendoo\Core\Exceptions\FloodRequestException;

class PreventFloodRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if ( config( 'tendoo.flood.prevent', true ) ) {
            $key            =   'flood-watch::' . $request->ip();
            $ipAccessTimes  =   intval( Cache::get( $key, 0 ) );

            /**
             * If has reached the access limit
             */
            if ( $ipAccessTimes >= config( 'tendoo.flood.limit', 10 ) ) {
                throw new FloodRequestException;
            }
            
            /**
             * increment the access for the client
             */
            $ipAccessTimes++;
            Cache::put( $key, $ipAccessTimes, Carbon::now()->addMinutes(1) );
        }
        return $next($request);
    }
}