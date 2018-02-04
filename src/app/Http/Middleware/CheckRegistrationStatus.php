<?php

namespace Tendoo\Cms\App\Http\Middleware;

use Closure;

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
        $options    =   app()->make( 'Tendoo\Cms\App\Services\Options' );

        /**
         * It's not strict. So it's not proceeding a strict comparison
         */
        if ( ! $options->get( 'open_registration' ) ) {
            return redirect()->route( 'login.index' )->with([
                'status'    =>  'danger',
                'message'   =>  __( 'The registration is closed. Please contact the administrator.' )
            ]);
        }
        return $next($request);
    }
}
