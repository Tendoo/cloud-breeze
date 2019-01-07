<?php

namespace Tendoo\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Tendoo\Core\Http\Controllers\DashboardController;
use Tendoo\Core\Http\Requests\UserProfileRequest;
use Tendoo\Core\Http\Requests\PostUserSecurityRequest;
use Tendoo\Core\Http\Requests\PostRegisterRequest;
use Tendoo\Core\Http\Requests\PutUserRequest;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Oauth;
use Tendoo\Core\Models\Option as OptionModel;
use Tendoo\Core\Exceptions\CoreException;

class TabsController extends DashboardController
{
    public function getTab( $namespace ) 
    {
        /**
         * should be registered on a service
         */
        switch( $namespace ) {
            case 'dashboard.profile':
                return $this->__getUserProfileTabs();
            break;
        }
    }

    /**
     * get user profile tab
     * @return array
     */
    private function __getUserProfileTabs()
    {
        return [
            [
                'label'     =>  __( 'Security' ),
                'namespace' =>  'dashboard.profile.security',
                'fields'    =>  (new FormsController)->getForm( 'dashboard.profile' )
            ]
        ];
    }
}