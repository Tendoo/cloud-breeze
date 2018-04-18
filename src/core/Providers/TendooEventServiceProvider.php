<?php

namespace Tendoo\Core\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Events\Settings;

class TendooEventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        'Tendoo\Core\Events\Event' => [
            'Tendoo\Core\Listeners\EventListener',
        ]
    ];

    protected $subscribe    =   [
        // 'Tendoo\Core\Listeners\UsersListeners'
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        Hook::addFilter( 'errors.codes', function( $errorCode ) {
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
        }, 10, 2 );

        /**
         * Register Crud definition
         */
        Hook::addFilter( 'register.crud', function( $namespace ) {
            if ( $namespace == 'users' ) {
                return \Tendoo\Core\Crud\Users::class;
            }
            return $namespace;
        });

        /**
         * Register Events
         */
        Hook::addFilter( 'options.validation.rules', Settings::class . '@validation', 10, 2 );
        Hook::addFilter( 'profile-security.validation.rules', 'Tendoo\Core\Events\Users@profileSecurity', 10, 2 );
        Hook::addFilter( 'profile-general.validation.rules', 'Tendoo\Core\Events\Users@profileGeneral', 10, 2 );
        Hook::addFilter( 'register.validation.rules', 'Tendoo\Core\Events\Users@registration', 10, 2 );
    }
}
