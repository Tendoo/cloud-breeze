<?php

namespace Tendoo\Cms\App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class TendooKernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \Tendoo\Cms\App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
        \Tendoo\Cms\App\Http\Middleware\TrustProxies::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \Tendoo\Cms\App\Http\Middleware\RedirectToSetup::class,
            \Tendoo\Cms\App\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\Session\Middleware\AuthenticateSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \Tendoo\Cms\App\Http\Middleware\VerifyCsrfToken::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],

        'api' => [
            'throttle:60,1',
            'bindings',
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \Illuminate\Auth\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'bindings' => \Illuminate\Routing\Middleware\SubstituteBindings::class,
        'can' => \Illuminate\Auth\Middleware\Authorize::class,
        'guest' => \Tendoo\Cms\App\Http\Middleware\RedirectIfAuthenticated::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'app.installed' => \Tendoo\Cms\App\Http\Middleware\AppInstalled::class,
        'app.notInstalled' => \Tendoo\Cms\App\Http\Middleware\AppNotInstalled::class,
        'expect.unlogged'  =>   \Tendoo\Cms\App\Http\Middleware\RedirectIfAuthenticated::class,
        'expect.logged'  =>   \Tendoo\Cms\App\Http\Middleware\RedirectIfNotAuthenticated::class,
        'can.register'  =>  \Tendoo\Cms\App\Http\Middleware\CheckRegistrationStatus::class,
    ];
}
