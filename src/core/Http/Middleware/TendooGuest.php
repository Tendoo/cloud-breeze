<?php

namespace CloudBreeze\Core\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use CloudBreeze\Core\Exceptions\TendooInstalledException;
use CloudBreeze\Core\Exceptions\WrongCredentialException;
use CloudBreeze\Core\Exceptions\AccessDeniedException;
use CloudBreeze\Core\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class TendooGuest
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
        $token  =   $request->header( 'X-AUTH-TOKEN' );
        
        if ( $token !== null ) {
            throw new AccessDeniedException( __( 'You don\'t have access to this resource. The request embed token while it\'s not required.' ) );
        }

        return $next( $request );
    }
}
