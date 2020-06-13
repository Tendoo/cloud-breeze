<?php

namespace CloudBreeze\Core\Http\Middleware;

use Closure;
use CloudBreeze\Core\Services\Oauth;
use CloudBreeze\Core\Services\Helper;
use CloudBreeze\Core\Models\Application;
use Illuminate\Support\Facades\Auth;
use CloudBreeze\Core\Models\Oauth as OauthModel;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use CloudBreeze\Core\Exceptions\ApiUnknowTokenException;
use CloudBreeze\Core\Exceptions\ApiMissingTokenException;
use CloudBreeze\Core\Exceptions\ApiAmbiguousTokenException;
use CloudBreeze\Core\Exceptions\ApiForbiddenScopeException;
use CloudBreeze\Core\Exceptions\ApiUnknowEndpointException;

class LoadApi
{
    private $accessToken;
    private $accessTokenData;

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $this->accessToken      =   $request->header( 'X_API_TOKEN' );
        $this->secretKey        =   $request->header( 'X_CLIENT_SECRET' );
        
        /**
         * In case the token is not provided
         */
        if ( $this->accessToken == null ) {
            throw new ApiMissingTokenException;
        }

        /**
         * Let's retreive the option which use the accessToken
         */
        $this->oauth      =   OauthModel::where( 'access_token', $this->accessToken )->first();

        /**
         * More than one key has been found
         */
        if ( ! $this->oauth instanceof OauthModel ) {
            throw new ApiUnknowTokenException;
        }

        /**
         * let's find wether the application
         * attached to the OauthModel has the same
         * client secret send on the header
         */
        $application    =   Application::where([
            'id'            =>  $this->oauth->id,
            'client_secret' =>  $this->secretKey
        ])->first();

        if ( ! $application instanceof Application ) {
            throw new ApiUnknowTokenException;
        }
        
        /**
         * Auth the user
         */
        Auth::loginUsingId( $this->oauth->user_id );

        return $next( $request );
    }
}
