<?php
namespace Tendoo\Core\Events;

use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;

use Tendoo\Core\Http\Requests\OptionsRequest;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Models\User;


class Fields
{
    public function systemFields( $fields, $namespace )
    {
        switch( $namespace ) {
            case 'auth.login':
                return Field::login();
            break;
            case 'auth.register':
                return Field::register();
            break;
            case 'auth.recovery':
                return Field::recovery();
            break;
            case 'auth.change-password':
                return Field::changePassword();
            break;
            default: 
                return $fields; 
            break;
        }
    }
}