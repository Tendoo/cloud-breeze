<?php
namespace Tendoo\App\Http\Controllers;

use Tendoo\App\Services\Guard;
use Tendoo\App\Services\Helper;
use Tendoo\App\Services\Modules;
use Tendoo\App\Models\User;
use Tendoo\App\Services\Page;
use Tendoo\App\Services\Options;
use Tendoo\App\Services\UserOptions;
use Tendoo\App\Exceptions\AccessDeniedException;

use Illuminate\Support\Facades\Event;

class TendooController extends Controller
{
    protected $options;
    protected $userOptions;
    protected $modules;
    protected $menus;

    public function __construct()
    {
        /**
         * Redirect user if he's not authenticated
         */
        $this->middleware( 'expect.logged' );
        
        if ( Helper::AppIsInstalled() ) {
            $this->middleware( function( $request, $next ){

                /**
                 * Registering stuff from middleware
                 */
                $this->options      =   app()->make( 'Tendoo\App\Services\Options' );
                $this->userOptions  =   app()->make( 'Tendoo\App\Services\UserOptions' );
                $this->modules      =   app()->make( Modules::class );
                $this->menus        =   app()->make( 'Tendoo\App\Services\Dashboard\MenusConfig' );
                $this->guard        =   app()->make( Guard::class );
        
                Event::fire( 'dashboard.loaded' );

                return $next($request);
            });
        }
    }

    /**
     * Check permission
     */
    public function checkPermission( $permission )
    {
        if ( ! User::allowedTo( $permission ) ) {
            throw new AccessDeniedException( $permission );
        }
    }

    /**
     * set title
     * @param string page title
     */
    public function setTitle( $title )
    {
        Page::setTitle( $title );
    }
}