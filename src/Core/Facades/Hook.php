<?php
namespace Tendoo\Core\Facades;

use Illuminate\Support\Facades\Facade;

class Hook extends Facade
{
    protected static function getFacadeAccessor() { 
        return 'tendoo.hook'; 
    }
}