<?php
namespace Tendoo\Core\Events;

use Tendoo\Core\Http\Requests\OptionsRequest;
use Tendoo\Core\Services\Field;

class Settings
{
    public function validation( $validations, OptionsRequest $request )
    { 
        switch( $request->input( '_route' ) ) {
            case 'dashboard.settings':
                return array_merge( 
                    $validations, 
                    Field::buildValidation( 'generalSettings' ),
                    Field::buildValidation( 'emailSettingsFields' ) 
                );
            break;
            default:
                return $validations;
            break;
        }
    }

    public function dashboardSettings( $settings, $namespace )
    {
        if ( $namespace === 'application' ) {
            return [
                'tabs'      =>  [
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
                ],
                'title'             =>  'Application Settings',
                'description'       =>  'configure how the application should works'
            ];
        }
        return $settings;
    }
}