<?php
namespace Modules\Foo\Events;
use App\Services\Menus;

class DashboardLoaded
{
    public function __construct( Menus $menus )
    {
        $this->menus    =   $menus;
    }

    /**
     * Register Menus
     * @return menus
     */
    public function registerMenus()
    {
        $Foo                =   new \StdClass;
        $Foo->namespace     =   'foo';
        $Foo->text          =   __( 'Foo Index' );
        $Foo->href          =   route( 'dashboard.foo.index');
        $Foo->icon          =   'build';

        $Bar                =   new \StdClass;
        $Bar->namespace     =   'bar';
        $Bar->text          =   __( 'Bar' );
        $Bar->href          =   route( 'dashboard.bar.index');
        $Bar->icon          =   'build';
        
        $Rab                =   new \StdClass;
        $Rab->namespace     =   'rab';
        $Rab->text          =   __( 'Rab' );
        $Rab->href          =   route( 'dashboard.bar.index');

        
        $settings               =   new \StdClass;
        $settings->namespace    =   'nexopos.settings';
        $settings->text         =   __( 'NexoPOS Settings' );
        $settings->href         =   route( 'dashboard.settings.nexopos' );
        $settings->icon         =   'home';
        
        $nexoposGeneral         =   new \StdClass;
        $nexoposGeneral->namespace  =   'nexopos.settings.general';
        $nexoposGeneral->text       =   __( 'General' );
        $nexoposGeneral->href       =   route( 'dashboard.settings.nexopos.general' );
        
        $this->menus->addAfter( 'dashboard', $Foo );
        $this->menus->addAfter( 'foo', $Bar );
        $this->menus->addAfter( 'foo', $settings );
        $this->menus->addTo( 'nexopos.settings', [ $nexoposGeneral, $Rab, $Rab, $Rab, $Rab, $Rab, $Rab, $Rab, $Rab ] );
    }
}