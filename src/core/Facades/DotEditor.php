<?php
namespace CloudBreeze\Core\Facades;

use Illuminate\Support\Facades\Facade;

class DotEditor extends Facade
{
    protected static function getFacadeAccessor() { 
        return 'tendoo.doteditor'; 
    }
}