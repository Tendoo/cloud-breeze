<?php
namespace Tendoo\Core\Services\Helpers;

use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Illuminate\Support\Facades\View;

trait App {
    /**
     * Is installed
     * @return boolean
     */
    static function AppIsInstalled()
    {
        return env( 'TENDOO_VERSION', false ) && ! in_array( env( 'TENDOO_VERSION', false ), [ '', null, false ]);
    }

    /**
     * Load application interfaces
     * @param string interface path
     * @return View interface
     */
    static function LoadInterface( $path, $data = [] )
    {
        return View::make( 'tendoo::interfaces.' . $path, $data );
    }
}