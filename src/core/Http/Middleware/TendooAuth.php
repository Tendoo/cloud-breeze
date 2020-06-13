<?php

namespace CloudBreeze\Core\Http\Middleware;

use Closure;
use Exception;

use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use CloudBreeze\Core\Exceptions\TendooInstalledException;
use CloudBreeze\Core\Exceptions\WrongCredentialException;
use CloudBreeze\Core\Exceptions\AccessDeniedException;
use CloudBreeze\Core\Models\User;
use CloudBreeze\Core\Services\DateService;
use CloudBreeze\Core\Services\AuthService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
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
        if ( Auth::viaRemember() ) {
            return $next( $request );
        }

        /**
         * the auth_token 
         * created should not be encrypted
         * so it should be ignored fromt he EncryptCookie middleware
         */
        $token  =   $request->header( 'X-AUTH-TOKEN' ) ?? $request->input( 'token' ) ?? $request->cookie( 'auth_token' );
        $date   =   app()->make( DateService::class );
        $auth   =   app()->make( AuthService::class );

        /**
         * let's check if the request is made
         * from an api endpoint or from the web
         * to redirect or return a proper json response
         */
        if ( $request->wantsJson() ) {

            if ( Auth::viaRemember() || $auth->authToken( $token, $request->header( 'X-CLIENT-SECRET' ) ) ) {
                return $next( $request );
            }

        } else {

            /**
             * if the request is made from the web
             * we'll catch the error and redirect the 
             * user to the login page
             */
            try {
                $result     =   $auth->authToken( $token );
                return $next( $request );
            } catch( Exception $e ) {
                return redirect( '/tendoo/auth/login?redirect=' . urlencode( url()->current() ) )->with([
                    'status'    =>  'failed',
                    'message'   =>  $e->getMessage()
                ]);
            }
        }

    }
}
