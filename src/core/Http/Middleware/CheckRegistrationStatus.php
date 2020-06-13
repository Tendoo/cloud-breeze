<?php

namespace CloudBreeze\Core\Http\Middleware;

use Closure;
use CloudBreeze\Core\Services\Helper;

class CheckRegistrationStatus
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
        if ( Helper::AppIsInstalled() ) {
            $options    =   app()->make( 'CloudBreeze\Core\Services\Options' );
    
            /**
             * It's not strict. So it's not proceeding a strict comparison
             */
            if ( ! $options->get( 'allow_registration' ) ) {
                return redirect()->route( 'login.index' )->with([
                    'status'    =>  'danger',
                    'message'   =>  __( 'The registration is closed. Please contact the administrator.' )
                ]);
            }
        }
        return $next($request);
    }
}
