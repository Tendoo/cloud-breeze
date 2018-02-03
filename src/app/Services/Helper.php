<?php
namespace Tendoo\App\Services;

use Tendoo\App\Services\Helpers\ArrayHelper;
use Tendoo\App\Services\Helpers\App;
use Tendoo\App\Services\Helpers\Routes;
use Tendoo\App\Services\Helpers\Validation;

class Helper
{
    use ArrayHelper, 
        App,
        Routes,
        Validation;
}