<?php
namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Tendoo\Core\Models\Application;
use Tendoo\Core\Exceptions\NotFoundException;

class ApplicationsController extends Controller
{
    public function getApplication( $appId ) 
    {
        $application    =   Application::where( 'client_key', $appId )->first();

        if ( $application instanceof Application ) {
            return $application;
        }

        throw new NotFoundException([
            'message'   =>  __( 'Unable to authenticate the oauth request. The key provided are invalid.' )
        ]);
    }

    /**
     * authenticate an application request 
     * to have access to requested scopes
     * @param Request 
     * @return AsyncResponse
     */
    public function authenticateApplication( Request $request )
    {
        $app    =   $this->getApplication( $request->input( 'id' ) );
        return $app;
    }
}   