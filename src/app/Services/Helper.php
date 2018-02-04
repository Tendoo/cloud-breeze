<?php
namespace Tendoo\Cms\App\Services;

use Tendoo\Cms\App\Services\Helpers\ArrayHelper;
use Tendoo\Cms\App\Services\Helpers\App;
use Tendoo\Cms\App\Services\Helpers\Routes;
use Tendoo\Cms\App\Services\Helpers\Validation;

class Helper
{
    use ArrayHelper, 
        App,
        Routes,
        Validation;
}