<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Autoloaded Service Providers
    |--------------------------------------------------------------------------
    |
    | The service providers listed here will be automatically loaded on the
    | request to your application. Feel free to add your own services to
    | this array to grant expanded functionality to your applications.
    |
    */

    'providers' => [

        

        /*
         * Application Service Providers...
         */
        Tendoo\Core\Providers\AppServiceProvider::class,
        Tendoo\Core\Providers\ModulesServiceProvider::class,
        Tendoo\Core\Providers\AuthServiceProvider::class,
        Tendoo\Core\Providers\EventServiceProvider::class,
        Tendoo\Core\Providers\RouteServiceProvider::class,
        Tendoo\Core\Providers\UserOptionsProvider::class,

        /**
         * Custom Providers
         */
        Orchestra\Parser\XmlServiceProvider::class,
        Jackiedo\DotenvEditor\DotenvEditorServiceProvider::class,
        // Silber\Bouncer\BouncerServiceProvider::class,

    ],

    /*
    |--------------------------------------------------------------------------
    | Class Aliases
    |--------------------------------------------------------------------------
    |
    | This array of class aliases will be registered when this application
    | is started. However, feel free to register as many as you wish as
    | the aliases are "lazy" loaded so they don't hinder performance.
    |
    */

    'aliases' => [
        /**
         * Custom Aliases
         */
        'XmlParser' => Orchestra\Parser\Xml\Facade::class,
        'DotenvEditor' => Jackiedo\DotenvEditor\Facades\DotenvEditor::class,
        'RoleManager' => Silber\Bouncer\BouncerFacade::class,
    ],
];
