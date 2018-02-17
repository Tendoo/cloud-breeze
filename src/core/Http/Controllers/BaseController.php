<?php
namespace Tendoo\Core\Http\Controllers;

use Tendoo\Core\Services\Guard;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Modules;
use Tendoo\Core\Models\User;
use Tendoo\Core\Services\Page;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\Date;
use Tendoo\Core\Services\UserOptions;
use Tendoo\Core\Exceptions\FeatureDisabledException;

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
                $this->options      =   app()->make( 'Tendoo\Core\Services\Options' );
                $this->userOptions  =   app()->make( 'Tendoo\Core\Services\UserOptions' );
                $this->modules      =   app()->make( Modules::class );
                $this->menus        =   app()->make( 'Tendoo\Core\Services\Dashboard\MenusConfig' );
                $this->guard        =   app()->make( Guard::class );
                $this->date         =   app()->make( Date::class );

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
     * set title
     * @param string page title
     */
    public function setTitle( $title )
    {
        Page::setTitle( $title );
    }
}