<?php
namespace Tendoo\Core\Http\Controllers;

use Tendoo\Core\Services\Page;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Exceptions\AccessDeniedException;

class UpdateController extends TendooController 
{
    protected $options;

    public function __construct(
        Options $options
    )
    {
        parent::__construct();
        $this->options  =   $options;

        $this->middleware( function( $request, $next ){
            if ( $this->options->get( 'db_version' ) === config( 'tendoo.db_version' ) ) {
                throw new AccessDeniedException( __( 'Unable to access to the update' ) );
            }

            return $next( $request );
        });
    }

    /**
     * index page
     * @return view
     */
    public function index()
    {
        Page::setTitle( __( 'Database Update' ) );
        return view( 'tendoo::components.frontend.update.database' );
    }
}