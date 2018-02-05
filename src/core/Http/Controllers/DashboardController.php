<?php

namespace Tendoo\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Auth;

class DashboardController extends TendooController
{
    public function __construct()
    {
        parent::__construct();
    }
}
