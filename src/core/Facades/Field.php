<?php
namespace Tendoo\Core\Facades;

use Illuminate\Support\Facades\Facade;

class Field extends Facade
{
    protected static function getFacadeAccessor() { 
        return 'tendoo.field';
    }
}