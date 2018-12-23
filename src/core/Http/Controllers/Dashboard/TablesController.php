<?php
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Tendoo\Core\Http\Controllers\DashboardController;
use Illuminate\Http\Request;

class TablesController extends DashboardController 
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
        return [
            'id'    =>  [
                'label' =>  __( 'ID' ),
            ],
            'username'  =>  [
                'label' =>  __( 'Username' )
            ],
            'email'     =>  [
                'label' =>  __( 'Email' )
            ],
            'created_at'    =>  [
                'label' =>  __( 'Joined On' )
            ]
        ];
    }
}