<?php
namespace CloudBreeze\Core\Events;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;

use CloudBreeze\Core\Http\Requests\OptionsRequest;
use CloudBreeze\Core\Services\Field;
use CloudBreeze\Core\Models\User;
use CloudBreeze\Core\Fields\Frontend\Authentication;
use CloudBreeze\Core\Fields\Frontend\SetupFields;


class Fields
{
    public function systemFields( $fields, $namespace )
    {
        $this->authentication   =   new Authentication;
        $this->setup            =   new SetupFields;

        switch( $namespace ) {
            case 'auth.login':
                return $this->authentication->login();
            break;
            case 'auth.register':
                return $this->authentication->register();
            break;
            case 'auth.recovery':
                return $this->authentication->recovery();
            break;
            case 'auth.change-password':
                return $this->authentication->changePassword();
            break;
            case 'auth.request-activation':
                return $this->authentication->requestActivation();
            break;
            case 'setup.database':
                return $this->setup->databaseDetails();
            break;
            default: 
                return $fields; 
            break;
        }
    }
}