<?php

namespace CloudBreeze\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Collection;
use CloudBreeze\Core\Servies\Modules;
use CloudBreeze\Core\Facades\Hook;
use Illuminate\Support\Facades\Auth;
use CloudBreeze\Core\Services\Oauth;
use CloudBreeze\Core\Models\Oauth as OauthModel;
use CloudBreeze\Core\Exceptions\ApiAmbiguousTokenException;
use CloudBreeze\Core\Exceptions\ApiMissingTokenException;
use CloudBreeze\Core\Exceptions\ApiForbiddenScopeException;
use CloudBreeze\Core\Exceptions\ApiUnknowTokenException;
use CloudBreeze\Core\Exceptions\ApiUnknowEndpointException;

class ApiController extends BaseController
{
    protected $option;
    private $accessToken;
    private $accessTokenData;

    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Require Scope
     * @return Exception | Null
     */
    protected function scopeGuard( $scope ) 
    {
        $request                    =   app()->make( Request::class );
        $this->accessToken          =   $request->header( 'X_API_TOKEN' );
        $accessToken                =   OauthModel::where( 'access_token', $this->accessToken )->firstOrFail();

        if ( ! in_array( $scope, json_decode( $accessToken->scopes, true ) ) ) {
            throw new ApiForbiddenScopeException;
        }
    }
}
