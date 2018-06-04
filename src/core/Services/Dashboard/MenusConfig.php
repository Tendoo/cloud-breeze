<?php
namespace Tendoo\Core\Services\Dashboard;

use Tendoo\Core\Services\Menus;

class MenusConfig 
{
    public function __construct( Menus $menus )
    {        
        $dashboard              =   new \stdClass;
        $dashboard->text        =   __( 'Dashboard' );
        $dashboard->href        =   url( '/dashboard' );
        $dashboard->label       =   10;
        $dashboard->namespace   =   'dashboard';
        $dashboard->icon        =   'dashboard';

        $this->menus            =   $menus;
        $this->menus->add( $dashboard );
        $this->registerMediaMenu();
        $this->registerModulesMenu();
        $this->registerSettingsMenu();
        $this->registerUserMenu();
        $this->registerApplicationsMenu();
    }

    /**
     * register media menu
     * @return void
     */
    public function registerMediaMenu()
    {
        $media              =   new \stdClass;
        $media->text        =   __( 'Media' );
        $media->namespace   =   'media';
        $media->icon        =   'collections';
        $media->href        =   route( 'dashboard.medias.list' );

        $this->menus->add( $media );
    }

    /**
     * Register User menu
     * @return void
     */
    public function registerUserMenu()
    {
        $users                  =   new \stdClass;
        $users->text            =   __( 'Users' );
        $users->label           =   10;
        $users->namespace       =   'users';
        $users->icon            =   'people';

        $this->menus->add( $users );
        
        $list                  =   new \stdClass;
        $list->text            =   __( 'List of users' );
        $list->href            =   route( 'dashboard.users.list' );
        $list->label           =   10;
        $list->namespace       =   'users.list';
        
        $create                  =   new \stdClass;
        $create->text            =   __( 'Create a new user' );
        $create->href            =   route( 'dashboard.users.create' );
        $create->label           =   10;
        $create->namespace       =   'users.create';

        $this->menus->addTo( 'users', [ $list, $create ]);
    }

    /**
     * Register Settings Menu
     * @return void
     */
    public function registerSettingsMenu()
    {
        $settings               =   new \stdClass;
        $settings->text         =   __( 'Settings' );
        $settings->label        =   10;
        $settings->namespace    =   'settings';
        $settings->icon         =   'settings';

        $this->menus->add( $settings );

        $general               =   new \stdClass;
        $general->text         =   __( 'General' );
        $general->label        =   10;
        $general->namespace    =   'settings.general';
        $general->href         =   route( 'dashboard.settings', [
            'tab'   =>  'general'
        ]);

        $registration                   =   new \stdClass;
        $registration->text             =   __( 'Registration' );
        $registration->label            =   0;
        $registration->namespace        =   'settings.registration';
        $registration->href             =   route( 'dashboard.settings', [
            'tab'   =>  'registration'
        ]);

        $this->menus->addTo( 'settings', [ $general, $registration ]);
    }

    /**
     * Register Module Menus
     * @return void
     */
    public function registerModulesMenu()
    {
        $modules                =   new \stdClass;
        $modules->text          =   __( 'Modules' );
        $modules->label         =   10;
        $modules->namespace     =   'modules';
        $modules->icon          =   'input';

        $this->menus->add( $modules );

        $list                =   new \stdClass;
        $list->text          =   __( 'List of modules' );
        $list->href          =   route( 'dashboard.modules.list' );
        $list->label         =   10;
        $list->namespace     =   'modules.list';

        $upload                =   new \stdClass;
        $upload->text          =   __( 'Upload' );
        $upload->href          =   route( 'dashboard.modules.upload' );
        $upload->label         =   10;
        $upload->namespace     =   'modules.upload';

        $this->menus->addTo( 'modules', [ $list, $upload ]);
    }

    /**
     * An interface where user can register 
     * an application for Oauth purposes
     */
    public function registerApplicationsMenu()
    {
        $applications                =   new \stdClass;
        $applications->text          =   __( 'Applications' );
        $applications->label         =   10;
        $applications->namespace     =   'applications';
        $applications->icon          =   'apps';

        $this->menus->add( $applications );

        $applicationList                =   new \stdClass;
        $applicationList->text          =   __( 'All applications' );
        $applicationList->href          =   route( 'dashboard.applications.list' );
        $applicationList->label         =   10;
        $applicationList->namespace     =   'applications.list';

        $applicationRegister                =   new \stdClass;
        $applicationRegister->text          =   __( 'Register a new' );
        $applicationRegister->href          =   route( 'dashboard.applications.create' );
        $applicationRegister->label         =   10;
        $applicationRegister->namespace     =   'applications.create';

        $this->menus->addTo( 'applications', [ $applicationList, $applicationRegister ]);
    }
}