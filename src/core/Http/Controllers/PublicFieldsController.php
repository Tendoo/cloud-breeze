<?php
namespace CloudBreeze\Core\Http\Controllers;

use CloudBreeze\Core\Services\Field;
use CloudBreeze\Core\Exceptions\CoreException;
use CloudBreeze\Core\Services\Modules;
use CloudBreeze\Core\Facades\Hook;

class PublicFieldsController extends BaseController
{
    public function getFields( $namespace )  
    {
        if ( empty( $fields     =   Hook::filter( 'public.fields', [], $namespace ) ) ) {
            /**
             * if nothing is returned, then the fields probably
             * doesn't exists.
             */
            throw new CoreException([
                'status'    =>  'failed',
                'message'   =>  __( 'Unable to get the fields with the provided namespace: ' . $namespace )
            ]);
        };

        return $fields;
    }
}