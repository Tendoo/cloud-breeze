<?php
return [
    /**
     * Anti Flood Security
     * -------------------------------
     * this helps to limit connexion attempt per
     * users using the client IP address
     */
    'flood'             =>  [
        'prevent'       =>  false, // should be enabled
        'limit'         =>  30,
        'expiration'    =>  60
    ],

    'db_version'        =>  '5.0.1',
    'version'           =>  '5.0.1',
    'assets_version'    =>  '1.8.1',

    /**
     * Modules
     * -------------------------------
     * Provide the path where the 
     * module are stores
     */
    'modules_path'      =>  base_path() . DIRECTORY_SEPARATOR . 'modules' . DIRECTORY_SEPARATOR,

    /**
     * Debug Mode
     * -------------------------------
     * handle debug mode on Tendoo CMS
     */
    'debug'             =>  [
        'errors'        =>  true
    ],
    'validations'    => [
        'options'       =>  [],
        'crud'          =>  [],
    ],
    'name'          =>  'Tendoo CMS',
    'pagination'    =>  [
        'users'         =>  2
    ],
    'archive'       =>  [
        'master'    =>  'https://github.com/Tendoo/cms/archive/master.zip',
    ],

    'options'       =>  [

        /**
         * this is the list of options allowed to be 
         * retreived from an api request.
         */
        'disclosed' =>  [ 
            'allow_registration',
            'app_restricted_login',
            'app_notify_password_reset',
            'allow_recovery',
            'validate_users',
            'reset_activation_link',
            'register_as',
            'registration_notification',
        ]
    ],

    'ip-banner' => [
        'enable'        =>  true,

        /**
         * describe what is forbidden
         * on each request processed
         */
        'forbidden'     =>  [
            '.php',
        ],

        /**
         * if a client makes the same mistake
         * "x" times, his ip will be banned
         */
        'mistakes-threshold'    =>  1,

        /**
         * the ip of the client
         * will be recorded
         * on the mentionned htaccess file
         */
        'htaccess-blocking'     =>  false,

        'htaccess-path'         =>  ''
    ],

    'auth'          =>          [
        /**
         * for the browser to always the
         * same while checking an auth token.
         * Might makes authentication impossible if
         * it's made from a popup on mobile apps.
         */
        'strict-browser-match'      =>  true
    ]
];