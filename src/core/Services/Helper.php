<?php
namespace CloudBreeze\Core\Services;

use CloudBreeze\Core\Services\Helpers\App;
use CloudBreeze\Core\Services\Helpers\Routes;
use CloudBreeze\Core\Services\Helpers\Modules;
use CloudBreeze\Core\Services\Helpers\Validation;
use CloudBreeze\Core\Services\Helpers\ArrayHelper;

class Helper
{
    use ArrayHelper, 
        App,
        Routes,
        Modules,
        Validation;
}