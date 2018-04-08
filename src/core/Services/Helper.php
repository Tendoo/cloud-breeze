<?php
namespace Tendoo\Core\Services;

use Tendoo\Core\Services\Helpers\ArrayHelper;
use Tendoo\Core\Services\Helpers\App;
use Tendoo\Core\Services\Helpers\Routes;
use Tendoo\Core\Services\Helpers\Validation;
use Tendoo\Core\Services\Helpers\Modules;

class Helper
{
    use ArrayHelper, 
        App,
        Routes,
        Modules,
        Validation;
}