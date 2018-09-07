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
}