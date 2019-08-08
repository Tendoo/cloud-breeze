<?php
namespace Tendoo\Core\Events;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;

use Tendoo\Core\Http\Requests\OptionsRequest;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Models\User;
use Tendoo\Core\Fields\Frontend\Authentication;


class Fields
{
    public function systemFields( $fields, $namespace )
    {
        $this->authentication    =   new Authentication;

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
            default: 
                return $fields; 
            break;
        }
    }
}