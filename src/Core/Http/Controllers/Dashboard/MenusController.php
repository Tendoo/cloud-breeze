<?php
/**
 * @todo review for api-server
 */
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Tendoo\Core\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Tendoo\Core\Facades\Hook;

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
                return Hook::filter( 'dashboard.menus', $this->menus->get() );
            break;
        }
    }
}