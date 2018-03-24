<?php
namespace Tendoo\Core\Services;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Tendoo\Core\Models\Option;

class Oauth
{
    /**
     * Get Scopes
     * @return array of scopes
     */
    public function getScopes()
    {
        return [
            'profile'   =>  [
                'title'         =>  __( 'Read the Profile' ),
                'description'   =>  __( 'Will grant access to the profile details.' )
            ]
        ];
    }

    /**
     * Authenticate
     * @param request
     */
    public function auth( Request $request )
    {
        $accessToken    =   $request->header( 'X-API-TOKEN' );
        $option         =   Option::where( 'value', $accessToken )->first();
        $user_id        =   $option->user_id;
        Auth::loginUsingId( $user_id );
    }
}