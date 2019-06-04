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
use Tendoo\Core\Services\Field;
use Tendoo\Core\Facades\Hook;

class TabsController extends DashboardController
{
    public function getTab( $namespace ) 
    {
        if ( empty( $tab =  Hook::filter( 'dashboard.tabs', $namespace, []) ) ) {
            throw new CoreException([
                'status'    =>  'failed',
                'message'   =>  sprintf( __( 'Unable to load the tab with the namespace "%s."' ), $namespace )
            ]);
        }
        return $tab;
    }
}