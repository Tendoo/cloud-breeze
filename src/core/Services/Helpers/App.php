<?php
namespace Tendoo\Core\Services\Helpers;

use Jackiedo\DotenvEditor\Facades\DotenvEditor;

trait App {
    /**
     * Is installed
     * @return boolean
     */
    static function AppIsInstalled()
    {
        return env( 'TENDOO_VERSION', false ) && ! in_array( env( 'TENDOO_VERSION', false ), [ '', null, false ]);
    }
}