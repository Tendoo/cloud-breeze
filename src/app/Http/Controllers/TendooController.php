<?php
namespace Tendoo\Cms\App\Http\Controllers;

use Tendoo\Cms\App\Services\Guard;
use Tendoo\Cms\App\Services\Helper;
use Tendoo\Cms\App\Services\Modules;
use Tendoo\Cms\App\Models\User;
use Tendoo\Cms\App\Services\Page;
use Tendoo\Cms\App\Services\Options;
use Tendoo\Cms\App\Services\UserOptions;
use Tendoo\Cms\App\Exceptions\AccessDeniedException;

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
                $this->options      =   app()->make( 'Tendoo\Cms\App\Services\Options' );
                $this->userOptions  =   app()->make( 'Tendoo\Cms\App\Services\UserOptions' );
                $this->modules      =   app()->make( Modules::class );
                $this->menus        =   app()->make( 'Tendoo\Cms\App\Services\Dashboard\MenusConfig' );
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