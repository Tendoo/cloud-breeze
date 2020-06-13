<?php
namespace CloudBreeze\Core\Events;

use CloudBreeze\Core\Http\Requests\OptionsRequest;
use CloudBreeze\Core\Services\Validation;
use CloudBreeze\Core\Fields\Dashboard\GeneralSettings;

class Settings
{
    protected $settings;
    
    public function __construct()
    {
        $this->settings     =   new GeneralSettings;
    }

    public function validation( $validations, OptionsRequest $request )
    { 
        switch( $request->input( '_route' ) ) {
            case 'dashboard.settings':
                return array_merge( 
                    $validations, 
                    Validation::extract( $this->settings->generalSettings() ),
                    Validation::extract( $this->settings->emailSettingsFields() )
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
                        'fields'    =>  $this->settings->generalSettings()
                    ], [
                        'label'     =>  __( 'Registration' ),
                        'namespace' =>  'dashboard.settings.registration',
                        'fields'    =>  $this->settings->registration()
                    ], [
                        'label'     =>  __( 'Email' ),
                        'namespace' =>  'dashboard.settings.email',
                        'fields'    =>  $this->settings->emailSettingsFields()
                    ], [
                        'label'     =>  __( 'reCaptcha' ),
                        'namespace' =>  'dashboard.settings.recaptcha',
                        'fields'    =>  $this->settings->recaptchaFields()
                    ]
                ],
                'title'             =>  'Application Settings',
                'description'       =>  'configure how the application should works'
            ];
        }
        return $settings;
    }
}