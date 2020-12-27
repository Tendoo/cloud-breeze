<?php

namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Collection;
use Tendoo\Core\Servies\Modules;
use Tendoo\Core\Facades\Hook;
use Illuminate\Support\Facades\Auth;
use Tendoo\Core\Services\Oauth;
use Tendoo\Core\Models\Oauth as OauthModel;
use Tendoo\Core\Exceptions\ApiAmbiguousTokenException;
use Tendoo\Core\Exceptions\ApiMissingTokenException;
use Tendoo\Core\Exceptions\ApiForbiddenScopeException;
use Tendoo\Core\Exceptions\ApiUnknowTokenException;
use Tendoo\Core\Exceptions\ApiUnknowEndpointException;

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
