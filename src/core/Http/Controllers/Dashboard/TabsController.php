<?php

namespace CloudBreeze\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use CloudBreeze\Core\Http\Controllers\DashboardController;
use CloudBreeze\Core\Http\Requests\UserProfileRequest;
use CloudBreeze\Core\Http\Requests\PostUserSecurityRequest;
use CloudBreeze\Core\Http\Requests\PostRegisterRequest;
use CloudBreeze\Core\Http\Requests\PutUserRequest;
use CloudBreeze\Core\Models\User;
use CloudBreeze\Core\Models\Oauth;
use CloudBreeze\Core\Models\Option as OptionModel;
use CloudBreeze\Core\Exceptions\CoreException;
use CloudBreeze\Core\Services\Field;
use CloudBreeze\Core\Facades\Hook;

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