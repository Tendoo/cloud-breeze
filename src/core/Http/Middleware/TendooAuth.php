<?php

namespace Tendoo\Core\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Core\Exceptions\TendooInstalledException;
use Tendoo\Core\Exceptions\WrongCredentialException;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Tendoo\Core\Models\User;
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
        $token  =   $request->header( 'X-AUTH-TOKEN' );
        
        if ( $token === null ) {
            throw new WrongCredentialException;
        }

        $Auth   =   Cache::get( 'Auth-Token::' . $token );

        if ( isset( $Auth[ 'user_id' ] ) ) {
            
            $user   =   User::find( $Auth[ 'user_id' ] );

            if ( $user instanceof User ) {
                Auth::loginUsingId( $Auth[ 'user_id' ] );
                return $next($request);
            }

            throw new AccessDeniedException( __( 'Unable to authenticate the user using the provided tokens.' ) );
        }

        throw new AccessDeniedException( __( 'Unable to retreive the auth token from the request.' ) );
    }
}
