<?php
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Tendoo\Core\Facades\Hook;
use Illuminate\Http\Request;
use Tendoo\Core\Http\Controllers\DashboardController;

class LinkController extends DashboardController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getSigned( $namespace, Request $request )
    {
        return Hook::filter( 'signed.url', $namespace, $request );
    }
}