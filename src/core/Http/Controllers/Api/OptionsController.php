<?php

namespace Tendoo\Core\Http\Controllers\Api;

use Illuminate\Http\Request;
use Tendoo\Core\Http\Controllers\ApiController;
use Tendoo\Core\Facades\Hook;
use Illuminate\Support\Facades\Event;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Tendoo\Core\Exceptions\CrudException;
use Tendoo\Core\Models\Application;
use Illuminate\Support\Facades\Auth;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Exceptions\AccessDeniedException;

class OptionsController extends ApiController
{
    protected $options;
    protected $userService;

    public function __construct()
    {
        parent::__construct();
        $this->middleware( function( $request, $next ) {

            $this->options      =   app()->make( Options::class );
            $this->userService  =   app()->make( Users::class );

            if( ! $this->userService->is( 'admin' ) ) {
                throw new AccessDeniedException( __( 'Accessing to this endpoint is reserved to admin token credentials.' ) );
            }

            return $next( $request );
        });
    }

    /**
     * And single option and return it
     */
    public function getOption( $option )
    {
        return [
            'value' =>  $this->options->get( $option )
        ];
    }

    /**
     * Get all options and returns it
     * @return json of options
     */
    public function getAllOptions()
    {
        return $this->options->get();
    }
}