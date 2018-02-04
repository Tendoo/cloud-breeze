<?php
namespace Tendoo\Cms\App\Services\Helpers;

use Jackiedo\DotenvEditor\Facades\DotenvEditor;

trait App {
    /**
     * Is installed
     * @return boolean
     */
    static function AppIsInstalled()
    {
        return DotenvEditor::keyExists( 'TENDOO_VERSION' ) && ! in_array( DotenvEditor::getValue( 'TENDOO_VERSION' ), [ '', null, false ]);
    }
}