<?php
namespace Tendoo\Core\Events;

class Errors 
{
    public function codes( $errorCode )
    {
        switch( $errorCode ) {
            case '404' : 
                return [
                    'message'   =>  __( 'Unable to located the page' ),
                    'title'     =>  __( 'Page not found' )
                ];
            break;
            case 'access-denied' : 
                return [
                    'message'   =>  __( 'You don\'t have access to this page' ),
                    'title'     =>  __( 'Access Denied' )
                ];
            break;
            case 'unhandled-crud-resource' : 
                return [
                    'message'   =>  __( 'This CRUD resource is either not handled by the system nor by any available module.' ),
                    'title'     =>  __( 'Unhandled Crud' )
                ];
            break;
            case 'unhandled-crud-delete-resource' : 
                return [
                    'message'   =>  __( 'This CRUD resource on DELETE method, is either not handled by the system nor by any available module.' ),
                    'title'     =>  __( 'Unhandled Crud' )
                ];
            break;
            case 'missing-scopes' : 
                return [
                    'message'   =>  __( 'Unable to load the Oauth page. The scopes are not defined.' ),
                    'title'     =>  __( 'Missing Scope Parameter' )
                ];
            break;
            case 'missing-or-wrong-callback' : 
                return [
                    'message'   =>  __( 'Unable to load the Oauth page. The callback is wrong or not provided.' ),
                    'title'     =>  __( 'Wrong Callback Parameter' )
                ];
            break;
            case 'undefined-scope' : 
                return [
                    'message'   =>  __( 'The requested scope is not allowed.' ),
                    'title'     =>  __( 'Wrong Scope Provided' )
                ];
            break;
            case 'wrong-oauth-request' : 
                return [
                    'message'   =>  __( 'The current Oauth request can\'t be handled.' ),
                    'title'     =>  __( 'Wrong Oauth Request' )
                ];
            break;
            default: 
                return [
                    'message'   =>  __( 'Unexpected error code has been send to the system' ),
                    'titlte'    =>  __( 'Unexpected Error Code' )
                ];
            break;
        }
    }
}