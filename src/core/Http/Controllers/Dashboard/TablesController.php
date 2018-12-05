<?php
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Tendoo\Core\Http\Controllers\DashboardController;
use Illuminate\Http\Request;

class tablesController extends DashboardController 
{
    public function tableColumn( $namespace ) 
    {
        switch( $namespace ) {
            case 'dashboard.users':
                return $this->__dashboardUsers();
            break;
        }
    }

    /**
     * return column for users table
     * @return array
     */
    private function __dashboardUsers()
    {
        return [ 'id', 'username', 'email' ];
    }
}