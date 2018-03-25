<?php
namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Tendoo\Core\Services\Page;
use Tendoo\Core\Services\Oauth;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\UserOptions;
use Tendoo\Core\Models\Oauth as OauthModel;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class OauthControllers extends BaseController
{
    private $oauth;
    protected $userOptions;
    public function __construct()
    {
        parent::__construct();
        $this->middleware( 'expect.logged' );
        $this->oauth        =   new Oauth;
    }

    /**
     * index
     */
    public function index()
    {
        $request    =   app()->make( Request::class );

        /**
         * @hook:before.loading.api
         * trigger an action while loading the API.
         */
        Hook::action( 'load.oauth', $request );

        /**
         * Having Scope is required
         */
        if ( ! $scope = $request->query( 'scopes' ) ) {
            return redirect()->route( 'errors', [
                'code'  =>  'missing-scopes'
            ]);
        }
        
        if ( 
            empty( $request->query( 'callback' ) ) || 
            ! isUrl( $request->query( 'callback' ) ) ||
            empty( $request->query( 'name' ) ) 
        ) {
            return redirect()->route( 'errors', [
                'code'  =>  'missing-or-wrong-callback'
            ]);
        }

        /**
         * get the required parameters from the URL
         */
        $callback   = $request->query( 'callback' );
        $name       = $request->query( 'name' );

        /**
         * @hook:api.scope
         * return the list of scope available
         */
        $scopes     =   Hook::filter( 'api.scopes', $this->oauth->getScopes() );

        /**
         * Explode scopes
         */
        $namespaces  =  explode( ',', $scope );

        foreach( $namespaces as $namespace ) {
            if ( @$scopes[ $namespace ] == null ) {
                return redirect()->route( 'errors', [
                    'code'  =>  'undefined-scope'
                ]);
            }
        }


        Page::setTitle( 'Authentication Page' );

        return view( 'tendoo::components.frontend.auth.oauth', compact( 
            'scopes', 
            'namespaces', 
            'callback', 
            'name' 
        ) );
    }

    /**
     * post Oauth Action
     */
    public function post( Request $request )
    {
        /**
         * Only two actions are allowed
         */
        if ( 
            ! in_array( $request->input( 'action' ), [ 'grant', 'deny' ] ) || 
            ! isUrl( $request->input( 'callback' ) ) ||
            empty( $request->input( 'name' ) ) // the application name which request the connexion is required
        ) {
            return redirect()->route( 'errors', [
                'code'  =>  'wrong-oauth-request'
            ]);
        }

        $action     =   $request->input( 'action' );
        $callback   =   $request->input( 'callback' );
        $name       =   $request->input( 'name' );
        $scopes     =   $request->input( 'scopes' );

        /**
         * if the use refuse the connexion
         */
        if ( $action == 'deny' ) {
            return redirect( $callback . '?status=denied' );
        } else {
            $access_token           =   str_random(40);
            $refresh_token          =   str_random(30);

            $oauth                  =   new OauthModel;
            $oauth->access_token    =   $access_token;
            $oauth->app_name        =   $name;
            $oauth->scopes          =   json_encode( $scopes );
            $oauth->refresh_token   =   $refresh_token;
            $oauth->user_id         =   Auth::id();
            $oauth->expires_at      =   Carbon::now()->addDays(7)->toDateTimeString();
            $oauth->save();

            /**
             * @todo adding expiration to the keys
             */
            return redirect( $callback . '?access_token=' . $access_token );
        }
    }
}