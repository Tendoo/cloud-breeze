<?php
namespace Tendoo\Core\Events;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;

use Tendoo\Core\Http\Controllers\Dashboard\FormsController;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Models\User;


class Tabs
{
    public function get( $namespace, $config )
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
                return $config;
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