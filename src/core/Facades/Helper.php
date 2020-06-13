<?php
namespace CloudBreeze\Core\Facades;

use Illuminate\Support\Facades\Facade;

class Helper extends Facade
{
    protected static function getFacadeAccessor() { 
        return 'tendoo.helper';
    }
}