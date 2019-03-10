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
            case 'dashboard.settings':
                return $this->__getDashbardSettingsTabs();
            break;
            default:
                throw new CoreException([
                    'status'    =>  'failed',
                    'message'   =>  sprintf( __( 'Unable to load the tab with the namespace "%s."' ), $namespace )
                ]);
            break;
        }
    }

    private function __getDashbardSettingsTabs()
    {
        return [
            [
                'label'     =>  __( 'General' ),
                'namespace' =>  'dashboard.settings.general',
                'fields'    =>  Field::generalSettings()
            ], [
                'label'     =>  __( 'Registration' ),
                'namespace' =>  'dashboard.settings.registration',
                'fields'    =>  Field::registration()
            ], [
                'label'     =>  __( 'Email' ),
                'namespace' =>  'dashboard.settings.email',
                'fields'    =>  Field::emailSettingsFields()
            ], [
                'label'     =>  __( 'reCaptcha' ),
                'namespace' =>  'dashboard.settings.recaptcha',
                'fields'    =>  Field::recaptchaFields()
            ]
        ];
    }

    /**
     * get user profile tab
     * @return array
     */
    private function __getUserProfileTabs()
    {
        return [
            [
                'label'     =>  __( 'General' ),
                'namespace' =>  'dashboard.profile.general',
                'fields'    =>  (new FormsController)->getForm( 'dashboard.profile.general' )
            ], [
                'label'     =>  __( 'Security' ),
                'namespace' =>  'dashboard.profile.security',
                'fields'    =>  (new FormsController)->getForm( 'dashboard.profile.security' )
            ]
        ];
    }
}