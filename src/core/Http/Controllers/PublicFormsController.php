<?php
namespace CloudBreeze\Core\Http\Controllers;

use CloudBreeze\Core\Facades\Hook;
use CloudBreeze\Core\Services\Field;
use CloudBreeze\Core\Exceptions\CoreException;

class PublicFormsController extends BaseController
{
    /**
     * get a specific forms
     * @param string form namespace
     * @return array of Section
     */
    public function getForm( $namespace, $index = null )  
    {
        if ( empty( $forms     =   Hook::filter( 'public.forms', [], $namespace, $index ) ) ) {
            /**
             * if nothing is returned, then the form probably
             * doesn't exists.
             */
            throw new CoreException([
                'status'    =>  'failed',
                'message'   =>  __( 'Unable to get the form with the provided namespace: ' . $namespace )
            ]);
        };

        return $forms;
    }
}