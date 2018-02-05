<?php
namespace Tendoo\Core\Services;

use Tendoo\Core\Services\Helpers\ArrayHelper;
use Tendoo\Core\Services\Helpers\App;
use Tendoo\Core\Services\Helpers\Routes;
use Tendoo\Core\Services\Helpers\Validation;

class Helper
{
    use ArrayHelper, 
        App,
        Routes,
        Validation;
}