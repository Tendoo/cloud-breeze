<?php
namespace Tendoo\Core\Services\Dashboard;

use Tendoo\Core\Services\Menus;

class MenusConfig 
{
    private $user;

    public function __construct( Menus $menus )
    {        
        $this->user             =   app()->make( \Tendoo\Core\Services\Users::class );

        $dashboard              =   new \stdClass;
        $dashboard->text        =   __( 'Dashboard' );
        $dashboard->href        =   '/dashboard';
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
        $user       =   app()->make( \Tendoo\Core\Services\Users::class );

        if ( $user->is([ 'admin', 'supervisor' ] ) ) {
            $media              =   new \stdClass;
            $media->text        =   __( 'Media' );
            $media->namespace   =   'media';
            $media->icon        =   'collections';
            $media->href        =   '/dashboard/medias';

            $this->menus->add( $media );
        }
    }

    /**
     * Register User menu
     * @return void
     */
    public function registerUserMenu()
    {
        $user       =   app()->make( \Tendoo\Core\Services\Users::class );

        if ( $user->is([ 'admin' ] ) ) {
            $users                  =   new \stdClass;
            $users->text            =   __( 'Users' );
            $users->label           =   10;
            $users->namespace       =   'users';
            $users->icon            =   'people';

            $this->menus->add( $users );
            
            $list                  =   new \stdClass;
            $list->text            =   __( 'List of users' );
            $list->href            =   '/dashboard/users';
            $list->label           =   10;
            $list->namespace       =   'users.list';
            
            $create                  =   new \stdClass;
            $create->text            =   __( 'Create a new user' );
            $create->href            =   '/dashboard/users/create';
            $create->label           =   10;
            $create->namespace       =   'users.create';

            $this->menus->addTo( 'users', [ $list, $create ]);
        }
    }

    /**
     * Register Settings Menu
     * @return void
     */
    public function registerSettingsMenu()
    {
        $user       =   app()->make( \Tendoo\Core\Services\Users::class );

        if ( $user->is([ 'admin', 'supervisor' ] ) ) {
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
            $general->href         =   '/dashboard/settings?tab=general';

            $registration                   =   new \stdClass;
            $registration->text             =   __( 'Registration' );
            $registration->label            =   0;
            $registration->namespace        =   'settings.registration';
            $registration->href             =   '/dashboard/settings?tab=registration';

            $email                   =   new \stdClass;
            $email->text             =   __( 'Mail' );
            $email->label            =   0;
            $email->namespace        =   'settings.email';
            $email->href             =   '/dashboard/settings?tab=email';

            $this->menus->addTo( 'settings', [ $general, $registration, $email ]);
        }
    }

    /**
     * Register Module Menus
     * @return void
     */
    public function registerModulesMenu()
    {
        $user       =   app()->make( \Tendoo\Core\Services\Users::class );

        if ( $user->is([ 'admin', 'supervisor' ] ) ) {
            $modules                =   new \stdClass;
            $modules->text          =   __( 'Modules' );
            $modules->label         =   10;
            $modules->namespace     =   'modules';
            $modules->icon          =   'input';

            $this->menus->add( $modules );

            $list                =   new \stdClass;
            $list->text          =   __( 'List of modules' );
            $list->href          =   '/dashboard/modules';
            $list->label         =   10;
            $list->namespace     =   'modules.list';

            $upload                =   new \stdClass;
            $upload->text          =   __( 'Upload' );
            $upload->href          =   '/dashboard/modules/upload';
            $upload->label         =   10;
            $upload->namespace     =   'modules.upload';

            $this->menus->addTo( 'modules', [ $list, $upload ]);
        }
    }

    /**
     * An interface where user can register 
     * an application for Oauth purposes
     */
    public function registerApplicationsMenu()
    {
        $user       =   app()->make( \Tendoo\Core\Services\Users::class );

        if ( $user->is([ 'admin', 'supervisor' ] ) ) {
            $applications                =   new \stdClass;
            $applications->text          =   __( 'Applications' );
            $applications->label         =   10;
            $applications->namespace     =   'applications';
            $applications->icon          =   'apps';
    
            $this->menus->add( $applications );
    
            $applicationList                =   new \stdClass;
            $applicationList->text          =   __( 'All applications' );
            $applicationList->href          =   '/dashboard/applications';
            $applicationList->label         =   10;
            $applicationList->namespace     =   'applications.list';
    
            $applicationRegister                =   new \stdClass;
            $applicationRegister->text          =   __( 'Register a new' );
            $applicationRegister->href          =   '/dashboard/application/create';
            $applicationRegister->label         =   10;
            $applicationRegister->namespace     =   'applications.create';
    
            $this->menus->addTo( 'applications', [ $applicationList, $applicationRegister ]);
        }
    }
}