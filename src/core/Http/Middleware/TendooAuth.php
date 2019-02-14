<?php

namespace Tendoo\Core\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Core\Exceptions\TendooInstalledException;
use Tendoo\Core\Exceptions\WrongCredentialException;
use Tendoo\Core\Exceptions\AccessDeniedException;
use Tendoo\Core\Models\User;
use Tendoo\Core\Services\DateService;
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
        
        if ( $token === null ) {
            throw new WrongCredentialException;
        }

        $Auth   =   Cache::get( 'Auth-Token::' . $token );

        if ( isset( $Auth[ 'user_id' ] ) ) {

            /**
             * check if the token has expired
             */
            if ( $date->gt( $Auth[ 'expires' ] ) ) {
                Cache::forget( 'Auth-Token::' . $token );
                throw new AccessDeniedException( __( 'Your session has expired' ) );
            }
            
            $user   =   User::find( $Auth[ 'user_id' ] );

            if ( $user instanceof User ) {

                /**
                 * login the user according to what has been
                 * retrieved.
                 */
                Auth::loginUsingId( $Auth[ 'user_id' ] );

                /**
                 * let's update the token key
                 */
                Cache::put( 'Auth-Token::' . $token, [
                    'user_id'   =>  $Auth[ 'user_id' ],
                    'expires'   =>  $date->copy()->addHour(1),
                    'key'       =>  'Auth-Token::' . $token
                ], $date->copy()->addHour(1) );

                return $next($request);
            }

            throw new AccessDeniedException( __( 'Unable to authenticate the user using the provided tokens.' ) );
        }

        throw new AccessDeniedException( __( 'Unable to retreive the auth token from the request.' ) );
    }
}
