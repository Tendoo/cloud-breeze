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
     * get All
     * @return json
     * @deprecated
     */
    public function getAll( $resource )
    {
        $request    =   app()->make( Request::class );
        
        /**
         * Load route and pass resource loaded
         * @hook:api.guard
         */
        $details    =   Hook::filter( 'api.guard', false, $resource, $request );
        
        if ( $details != false ) {

            /**
             * check if the current token has access to the requested scope
             */
            $this->__checkScope( $details );

            /**
             * if a where statement is provided
             */
            $model  =   $details->model;
            
            if ( is_array( @$details->where ) ) {
                foreach( $details->where as $key => $value ) {
                    $model::where( $key, $value );
                }
            }

            return $model::all();

        } else {

            /**
             * If the endpoint is unknow
             * we should throw an exception
             */
            throw new ApiUnknowEndpointException;
        }
    }

    /**
     * Check the scope
     * @deprecated
     * @param object api resource
     * @return void
     */
    private function __checkScope( $apiResource )
    {
        $accessToken       =   $this->accessTokenData[0];
        if ( ! in_array( $apiResource->scope, json_decode( $accessToken->scopes, true ) ) ) {
            throw new ApiForbiddenScopeException;
        }
    }

    /**
     * get One
     * @deprecated
     * @return json
     */
    public function getOne( $resource, $id )
    {
        $request    =   app()->make( Request::class );

        /**
         * Load route and pass resource loaded
         * @hook:api.guard
         */
        $details    =   Hook::filter( 'api.guard', false, $resource, $request );
        
        if ( $details ) {

            /**
             * check if the current token has access to the requested scope
             */
            $this->__checkScope( $details );

            /**
             * if a where statement is provided
             */
            $model  =   $details->model;

            if ( is_array( @$details->where ) ) {
                foreach( $details as $key => $value ) {
                    $model::where( $key, $value );
                }
            }

            $model  =   $model::find( $id );
            return $model->first();
        }

        throw new ApiUnknowEndpointException;
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
