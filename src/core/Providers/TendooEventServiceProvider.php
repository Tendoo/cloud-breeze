<?php

namespace Tendoo\Core\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Tendoo\Core\Facades\Hook;

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

        Event::listen( 'before.showing.errors', function( $errorCode ) {
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
                default: 
                    return [
                        'message'   =>  __( 'Unexpected error code has been send to the system' ),
                        'titlte'    =>  __( 'Unexpected Error Code' )
                    ];
                break;
            }
        });

        /**
         * Register Crud definition
         */
        Hook::addFilter( 'define.crud', 'Tendoo\Core\Crud\Users@register', 10, 3 );
    }
}
