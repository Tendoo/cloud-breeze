<?php
namespace Tendoo\Core\Facades;

use Illuminate\Support\Facades\Facade;

class Modules extends Facade
{
    protected static function getFacadeAccessor() { 
        return 'tendoo.modules';
    }
}