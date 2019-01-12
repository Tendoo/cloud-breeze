<?php
/**
 * @todo review for api-server
 */
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Tendoo\Core\Http\Controllers\DashboardController;
use Tendoo\Core\Services\Page;
use Illuminate\Http\Request;
use Tendoo\Core\Models\Media;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Tendoo\Core\Services\DateService;
use Tendoo\Core\Services\MediaService;

class MenusController extends DashboardController
{
    /**
     * get defined menus
     * @return array of menus
     */
    public function getMenus( $namespace )
    {
        switch( $namespace ) {
            case 'dashboard.aside': 
                return $this->__dashboardAside();
            break;
        }
    }

    /**
     * return a dashboard aside
     * menu
     * @return array of Link
     */
    private function __dashboardAside()
    {
        return [
            [
                'label' =>  __( 'Dashboard' ),
                'namespace' =>  'dashboard.index',
                'href'      =>  '/dashboard'
            ], [
                'label' =>  __( 'Users' ),
                'namespace' =>  'dashboard.users',
                'href'      =>  '/dashboard/users'
            ], [
                'label' =>  __( 'Modules' ),
                'namespace' =>  'dashboard.modules',
                'href'      =>  '/dashboard/modules'
            ], [
                'label' =>  __( 'Medias' ),
                'namespace' =>  'dashboard.medias',
                'href'      =>  '/dashboard/medias'
            ], [
                'label' =>  __( 'Settings' ),
                'namespace' =>  'dashboard.settings',
                'href'      =>  '/dashboard/settings'
            ]
        ];
    }
}