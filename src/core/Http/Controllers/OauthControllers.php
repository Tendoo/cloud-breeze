<?php
namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Tendoo\Core\Services\Page;
use Tendoo\Core\Services\Oauth;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\UserOptions;
use Tendoo\Core\Models\Oauth as OauthModel;
use Illuminate\Support\Facades\Auth;
use Tendoo\Core\Models\Application;
use Carbon\Carbon;
use Exception;
use Tendoo\Core\Exceptions\OauthDeniedException;
use Tendoo\Core\Exceptions\WrongCredentialException;

class OauthControllers extends BaseController
{
    private $oauth;
    protected $userOptions;
    public function __construct()
    {
        parent::__construct();
        $this->middleware( 'expect.logged' )->except([ 'postLogin' ]);
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
            empty( $request->query( 'callback_url' ) ) ||
            ! isUrl( $request->input( 'callback_url' ) )
        ) {
            throw new Exception( __( 'Wrong callback provided for the Oauth resource.' ) );
        }

        /**
         * Authenticating the application
         */
        $application    =   Application::where([
            [ 'client_key',     '=', $request->query( 'client_key' )],
            [ 'client_secret',  '=', $request->query( 'client_secret' )]
        ])->first();

        if( $application === null ) {
            throw new Exception( 'Wrong application credentials are provided' );
        }

        /**
         * get the required parameters from the URL
         */
        $callback_url   = $request->query( 'callback_url' );

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
            'callback_url', 
            'application' 
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
            ! isUrl( $request->input( 'callback_url' ) )
        ) {
            return redirect()->route( 'errors', [
                'code'  =>  'wrong-oauth-request'
            ]);
        }

        return $this->__oauthLogin( $request );
    }

    public function postLogin( Request $request )
    {
        if ( Auth::attempt( $request->only( 'username', 'password' ) ) ) {
            return $this->__oauthLogin( $request );
        }
        throw new WrongCredentialException;
    }

    private function __oauthLogin( Request $request )
    {
        /**
         * Authenticating the application
         */
        $application    =   Application::where([
            [ 'client_key',     '=', $request->input( 'client_key' )],
            [ 'client_secret',  '=', $request->input( 'client_secret' )]
        ])->first();

        if( $application === null ) {
            throw new Exception( 'Wrong application credentials are provided' );
        }

        $action         =   $request->input( 'action' );
        $callback_url   =   $request->input( 'callback_url' );
        // $name           =   $request->input( 'name' );
        $scopes         =   $request->input( 'scopes' );

        /**
         * if the use refuse the connexion
         */
        if ( $action === 'deny' ) {
            if ( $request->ajax() ) {
                throw new OauthDeniedException;
            }
            return redirect( $callback_url . '?status=denied' );
        } else {

            $access_token           =   str_random(40);
            $refresh_token          =   str_random(30);

            /**
             * let's check if the user already have this application
             * within the authorised applications
             */
            $oauth                  =   OauthModel::where( 'app_id', '=', $application->id )->first();

            if ( $oauth != null ) {
                $oauth->access_token    =   $access_token;
                $oauth->app_name        =   $application->name;
                $oauth->app_id          =   $application->id;
                $oauth->scopes          =   json_encode( $scopes );
                $oauth->refresh_token   =   $refresh_token;
                $oauth->user_id         =   Auth::id();
                $oauth->expires_at      =   Carbon::now()->addDays(7)->toDateTimeString();
                $oauth->save();
            } else {
                $oauth                  =   new OauthModel;
                $oauth->access_token    =   $access_token;
                $oauth->app_name        =   $application->name;
                $oauth->app_id          =   $application->id;
                $oauth->scopes          =   json_encode( $scopes );
                $oauth->refresh_token   =   $refresh_token;
                $oauth->user_id         =   Auth::id();
                $oauth->expires_at      =   Carbon::now()->addDays(7)->toDateTimeString();
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
            $hasQueryParam = parse_url( $callback_url, PHP_URL_QUERY);
            
            // Returns a string if the URL has parameters or NULL if not
            if ( $hasQueryParam ) {
                $callback_url .= '&access_token=' . $access_token;
            } else {
                $callback_url .= '?access_token=' . $access_token;
            }

            return $request->ajax() ? [
                'access_token'  =>  $access_token,
                'status'        =>  'success',
                'message'       =>  __( 'You were successfully connected' ),
                'user'          =>  Auth::user()
            ] : redirect( $callback_url );
        }
    }
}