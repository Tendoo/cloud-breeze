<?php

namespace CloudBreeze\Core\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use CloudBreeze\Core\Facades\Hook;
use Illuminate\Support\Facades\Auth;

use CloudBreeze\Core\Events\Crud as CrudEvents;
use CloudBreeze\Core\Events\Forms;
use CloudBreeze\Core\Events\Errors;
use CloudBreeze\Core\Events\Crud;
use CloudBreeze\Core\Events\Settings;
use CloudBreeze\Core\Events\Users;
use CloudBreeze\Core\Events\Options;
use CloudBreeze\Core\Events\Url;
use CloudBreeze\Core\Events\Tabs;
use CloudBreeze\Core\Events\Fields;
use CloudBreeze\Core\Events\Validation;

class TendooEventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
    ];

    protected $subscribe    =   [
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        Hook::addAction( 'after.send-recovery-email',           useThis( Users::class )->method( 'notifyPasswordResetToAdmins' ), 10, 2 );
        Hook::addFilter( 'errors.codes',                        useThis( Errors::class )->method( 'codes' ), 10, 2 );
        Hook::addFilter( 'register.crud',                       useThis( Crud::class )->method( 'define' ), 10, 2 ); 
        Hook::addFilter( 'options.validation.rules',            useThis( Settings::class )->method( 'validation' ), 10, 2 );
        Hook::addFilter( 'profile-security.validation.rules',   useThis( Users::class )->method( 'profileSecurity' ), 10, 2 );
        Hook::addFilter( 'profile-general.validation.rules',    useThis( Users::class )->method( 'profileGeneral' ), 10, 2 );
        Hook::addFilter( 'register.validation.rules',           useThis( Users::class )->method( 'registration' ), 10, 2 );
        Hook::addFilter( 'before.update.options',               useThis( Options::class )->method( 'handle' ), 10 );
        Hook::addFilter( 'disclose.options',                    useThis( Options::class )->method( 'discloseOptions' ), 10, 2 );
        Hook::addFilter( 'signed.url',                          useThis( Url::class )->method( 'generate' ), 10, 2 );
        Hook::addFilter( 'dashboard.settings',                  useThis( Settings::class )->method( 'dashboardSettings' ), 10, 2 );
        Hook::addFilter( 'dashboard.forms',                     useThis( Forms::class )->method( 'define' ), 10, 3 );
        Hook::addFilter( 'dashboard.save.forms',                useThis( Forms::class )->method( 'save' ), 10, 2 );
        Hook::addFilter( 'dashboard.tabs',                      useThis( Tabs::class )->method( 'get' ), 10, 2 );
        Hook::addFilter( 'dashboard.crud.validation',           useThis( CrudEvents::class )->method( 'validation' ), 10, 3 );
        Hook::addFilter( 'dashboard.crud.fields',               useThis( CrudEvents::class )->method( 'fields' ), 10, 3 );
        Hook::addFilter( 'public.fields',                       useThis( Fields::class )->method( 'systemFields' ), 10, 2 );
        Hook::addFilter( 'public.validation',                   useThis( Validation::class )->method( 'publicValidation' ), 10, 3 );
    }   
}
