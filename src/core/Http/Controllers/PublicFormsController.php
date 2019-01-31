<?php
namespace Tendoo\Core\Http\Controllers;

use Tendoo\Core\Services\Field;
use Tendoo\Core\Exceptions\CoreException;

class PublicFormsController extends BaseController
{
    public function getForm( $namespace )  
    {
        switch( $namespace ) {
            
        }

        /**
         * if nothing is returned, then the form probably
         * doesn't exists.
         */
        throw new CoreException([
            'status'    =>  'failed',
            'message'   =>  __( 'Unable to get the form with the provided namespace: ' . $namespace )
        ]);
    }
}