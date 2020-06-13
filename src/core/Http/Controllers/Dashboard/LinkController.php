<?php
namespace CloudBreeze\Core\Http\Controllers\Dashboard;

use CloudBreeze\Core\Facades\Hook;
use Illuminate\Http\Request;
use CloudBreeze\Core\Http\Controllers\DashboardController;

class LinkController extends DashboardController
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getSigned( $action, Request $request )
    {
        return Hook::filter( 'signed.url', $action, $request );
    }
}