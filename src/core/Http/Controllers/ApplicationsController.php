<?php
namespace Tendoo\Core\Http\Controllers;

use Validator;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Auth;
use Tendoo\Core\Models\Application;
use Tendoo\Core\Models\Oauth;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\DateService;
use Tendoo\Core\Exceptions\NotFoundException;
use Tendoo\Core\Exceptions\ApiUnknowScopeException;
use Tendoo\Core\Exceptions\ExpiredRequestException;
use Tendoo\Core\Exceptions\BadRequestException;

class ApplicationsController extends Controller
{
    public function __construct()
    {
        $this->middleware( 'tendoo.auth' );
    }

    private function getApplication( $appId ) 
    {
        $application    =   Application::where( 'client_key', $appId )->first();

        if ( $application instanceof Application ) {
            return $application;
        }

        throw new NotFoundException([
            'message'   =>  __( 'Unable to authenticate the oauth request. The "client_key" provided is invalid.' )
        ]);
    }

    /**
     * authenticate an application request 
     * to have access to requested scopes
     * @param Request 
     * @return AsyncResponse
     */
    public function authentication( Request $request )
    {
        $application    =   $this->getApplication( $request->input( 'client_key' ) );
        
        /**
         * let's retreive defined scope
         * and compare them to the requested scopes
         */
        $appScopes          =   Hook::filter( 'api.scopes', []);
        $requestedScopes    =   $request->input( 'scopes' );
        $forward            =   $request->input( 'forward' );

        if ( empty( $appScopes ) ) {
            throw new ApiUnknowScopeException;
        }

        /**
         * a registered scope should conside of an array with the 
         * following shape 
         * {
         *      namespace: string,
         *      label: string,
         *      desccription: string
         * }
         */
        $scopes         =   [];
        foreach( $requestedScopes as $reqScope ) {
            if ( ! in_array( $reqScope, array_pluck( $appScopes, 'namespace' ) ) ) {
                throw new ApiUnknowScopeException;
            } else {
                $_scope     =   collect( $appScopes )->filter( function( $scope ) use ( $reqScope ) {
                    return $scope[ 'namespace' ] === $reqScope;
                })->first();
                $scopes[]   =   $_scope;
            }
        }

        /**
         * Set a token to authenticate the request
         * the token should expire within 10 minutes
         */
        $token          =   str_random(40);
        Cache::put( 'oauth-token-' . Auth::id(), $token, now()->addMinutes(10) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The request can be granted' ),
            'data'      =>  compact( 'scopes', 'application', 'token', 'forward' )
        ];
    }

    /**
     * let's jut approve the request
     * @return AsyncResponse | Exception
     */
    public function approveRequest( Request $request )
    {
        $validation     =   Validator::make( $request->all(), [
            'data.application'  =>  'required',
            'data.scopes'       =>  'required',
            'data.token'        =>  'required'
        ]);

        if ( $validation->fails() ) {
            throw new BadRequestException;
        }

        $key    =   'oauth-token-' . Auth::id();
        if ( ! Cache::has( $key ) ) {
            throw new ExpiredRequestException;
        } 

        /**
         * if it has, let's delete the token
         * to avoid multiple call with the same token
         */
        Cache::pull( $key );

        return $this->__proceedApproval( $request );
    }

    private function __proceedApproval( Request $request )
    {
        $access_token           =   str_random(40);
        $refresh_token          =   str_random(30);
        $data                   =   $request->input( 'data' );
        $date                   =   app()->make( DateService::class );
        extract( $data );
        /**
         * expose
         * -> application: Application
         * -> token
         * -> forward
         * -> scopes: { label: string, description: string, namespace }[]
         */
        $url                    =   parse_url( $forward );
        $scopesNamespaces       =   array_pluck( $scopes, 'namespace' );

        /**
         * A user can not have the same application connected to his account many time. 
         * If a prior connexion has been made, then this latest will be updated with the new
         * credentials.
         */
        $oauth =   Oauth::where([
            'app_id'    =>  $application[ 'id' ],
            'domain'    =>  @$url[ 'host' ]
        ])->first();

        if ( $oauth instanceof Oauth ) {
            $oauth->access_token    =   $access_token;
            $oauth->app_name        =   $application[ 'name' ];
            $oauth->app_id          =   $application[ 'id' ];
            $oauth->scopes          =   json_encode( $scopesNamespaces );
            $oauth->refresh_token   =   $refresh_token;
            $oauth->domain          =   @$url[ 'host' ] ? $url[ 'host' ] : __( 'N/A' );
            $oauth->user_id         =   Auth::id();
            $oauth->expires_at      =   $date->copy()->addDays(7)->toDateTimeString();
            $oauth->save();
        } else {
            $oauth                  =   new Oauth;
            $oauth->access_token    =   $access_token;
            $oauth->app_name        =   $application[ 'name' ];
            $oauth->app_id          =   $application[ 'id' ];
            $oauth->scopes          =   json_encode( $scopesNamespaces );
            $oauth->refresh_token   =   $refresh_token;
            $oauth->domain          =   @$url[ 'host' ] ? $url[ 'host' ] : __( 'N/A' );
            $oauth->user_id         =   Auth::id();
            $oauth->expires_at      =   $date->copy()->addDays(7)->toDateTimeString();
            $oauth->save();
        }

        /**
         * run an action when the Oauth is
         * succesful
         * @hook
         */
        Hook::action( 'oauth.successful', $oauth );

        /**
         * @todo adding expiration to the keys
         */
        $hasQueryParam = parse_url( $forward, PHP_URL_QUERY);
        
        /**
         * clever pasing to add the access_token
         * within the foward url.
         */
        if ( $hasQueryParam ) {
            $forward .= '&access_token=' . $access_token;
        } else {
            $forward .= '?access_token=' . $access_token;
        }

        $user               =   Auth::user();

        return [
            'status'        =>  'success',
            'data'          =>  compact( 'forward', 'access_token', 'user' ),
            'message'       =>  __( 'The access has been successfully granted.' ),
        ];
    }

    /**
     * return all the authorized application
     * on the user profile
     * @return array of applications
     */
    public function myAuthorizedApplications()
    {
        return Oauth::where( 'user_id', Auth::id() )
            ->get();
    }

    /**
     * Revoke application
     * @return array
     */
    public function revokeApplication( $id )
    {
        Oauth::findOrFail( $id )->delete();
        return [ 
            'status'    =>  'success',
            'message'   =>  __( 'The application access has been revoked !' )
        ];
    }
}   