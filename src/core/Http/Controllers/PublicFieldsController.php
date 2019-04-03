<?php
namespace Tendoo\Core\Http\Controllers;

use Tendoo\Core\Services\Field;
use Tendoo\Core\Exceptions\CoreException;
use Tendoo\Core\Services\Modules;

class PublicFieldsController extends BaseController
{
    public function getFields( $namespace )  
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
        }

        /**
         * if nothing is returned, then the fields probably
         * doesn't exists.
         */
        throw new CoreException([
            'status'    =>  'failed',
            'message'   =>  __( 'Unable to get the fields with the provided namespace: ' . $namespace )
        ]);
    }
}