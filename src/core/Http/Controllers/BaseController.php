<?php
namespace CloudBreeze\Core\Http\Controllers;

use CloudBreeze\Core\Services\Helper;
use CloudBreeze\Core\Services\Modules;
use CloudBreeze\Core\Models\User;
use CloudBreeze\Core\Services\Page;
use CloudBreeze\Core\Services\Options;
use CloudBreeze\Core\Services\DateService;
use CloudBreeze\Core\Services\UserOptions;
use CloudBreeze\Core\Services\Users;
use CloudBreeze\Core\Exceptions\FeatureDisabledException;
use CloudBreeze\Core\Exceptions\AccessDeniedException;
use CloudBreeze\Core\Exceptions\RoleDeniedException;

use Illuminate\Support\Facades\Event;

class BaseController extends Controller
{
    protected $options;
    protected $userOptions;
    protected $modules;
    protected $menus;

    public function __construct()
    {        
        if ( Helper::AppIsInstalled() ) {
            $this->middleware( function( $request, $next ){

                /**
                 * Registering stuff from middleware
                 */
                $this->options      =   app()->make( Options::class );
                $this->userOptions  =   app()->make( UserOptions::class );
                $this->modules      =   app()->make( Modules::class );
                $this->date         =   app()->make( DateService::class );
                $this->userService  =   app()->make( Users::class );

                return $next($request);
            });
        }
    }

    /**
     * Check permission
     */
    public function checkFeature( $option, $textValue = null )
    {
        if ( $this->options->get( $option ) === null && $textValue == null ) {
            throw new FeatureDisabledException();
        } else if ( $this->options->get( $option ) !== $textValue ) {
            throw new FeatureDisabledException();
        }
    }

    /**
     * Check permission
     */
    public function checkPermission( $permission )
    {
        if ( ! User::allowedTo( $permission ) ) {
            throw new AccessDeniedException( sprintf( 
                __( 'You don\'t have access to that page. Your role doesn\'t have the required permission %s' ),
                $permission
            ) );
        }
    }

    /**
     * Check role
     */
    public function checkRoles( array $roles )
    {
        if ( ! $this->userService->is( $roles ) ) {
            throw new RoleDeniedException( $roles );
        }
    }
}