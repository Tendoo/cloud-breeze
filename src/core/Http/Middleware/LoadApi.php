<?php

namespace Tendoo\Core\Http\Middleware;

use Closure;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Oauth;
use Tendoo\Core\Models\Oauth as OauthModel;
use Tendoo\Core\Exceptions\ApiAmbiguousTokenException;
use Tendoo\Core\Exceptions\ApiMissingTokenException;
use Tendoo\Core\Exceptions\ApiForbiddenScopeException;
use Tendoo\Core\Exceptions\ApiUnknowTokenException;
use Tendoo\Core\Exceptions\ApiUnknowEndpointException;
use Illuminate\Support\Facades\Auth;

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
        $this->accessToken    =   $request->header( 'X_API_TOKEN' );
        
        /**
         * In case the token is not provided
         */
        if ( $this->accessToken == null ) {
            throw new ApiMissingTokenException;
        }

        /**
         * Let's retreive the option which use the accessToken
         */
        $this->accessTokenData      =   OauthModel::where( 'access_token', $this->accessToken )->get();

        /**
         * More than one key has been found
         */
        if ( $this->accessTokenData->count() > 1 ) {
            throw new ApiAmbiguousTokenException;
        } else if ( $this->accessTokenData->isEmpty() ) {
            throw new ApiUnknowTokenException;
        }
        
        /**
         * Auth the user
         */
        Auth::loginUsingId( $this->accessTokenData[0]->user_id );

        return $next( $request );
    }
}
