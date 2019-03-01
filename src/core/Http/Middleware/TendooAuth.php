<?php

namespace Tendoo\Core\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Core\Exceptions\TendooInstalledException;
use Tendoo\Core\Exceptions\WrongCredentialException;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Tendoo\Core\Models\User;
use Tendoo\Core\Services\DateService;
use Tendoo\Core\Services\AuthService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class TendooAuth
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
        $token  =   $request->header( 'X-AUTH-TOKEN' ) ?? $request->input( 'token' );
        $date   =   app()->make( DateService::class );
        $auth   =   app()->make( AuthService::class );
        
        if ( $token === null ) {
            throw new WrongCredentialException;
        }

        /**
         * if it's not trusty, the service 
         * should throw an error
         */
        if ( $auth->authToken( $token ) ) {
            return $next( $request );
        }
    }
}
