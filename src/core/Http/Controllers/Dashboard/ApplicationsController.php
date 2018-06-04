<?php

namespace Tendoo\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Tendoo\Core\Http\Controllers\TendooController;
use Tendoo\Core\Http\Requests\CrudPostRequest;
use Tendoo\Core\Http\Requests\CrudPutRequest;
use Tendoo\Core\Facades\Hook;
use Illuminate\Support\Facades\Event;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Tendoo\Core\Exceptions\CrudException;
use Tendoo\Core\Models\Application;

class ApplicationsController extends TendooController
{
    public function __construct()
    {
        parent::__construct();

        $this->middleware( function( $request, $next ) {
            return $next( $request );
        });
    }

    /**
     * User List
     * display available users
     * @return view of users
     */
    public function list()
    {
        $this->checkPermission( 'read.applications' );
        $this->setTitle( __( 'Applications' ) );
        return view( 'tendoo::components.backend.applications.list' );
    }

    /**
     * Create users
     * @param void
     * @return view
     */
    public function create()
    {
        $this->checkPermission( 'create.applications' );
        $this->setTitle( __( 'Create an appolication' ) );
        return view( 'tendoo::components.backend.applications.create' );
    }

    /**
     * Edit user
     * @param int user id
     * @return view
     */
    public function edit( Application $entry )
    {
        $this->checkPermission( 'update.applications' );

        $this->setTitle( __( 'Edit an application' ) );
        return view( 'tendoo::components.backend.applications.edit' );
    }
}
