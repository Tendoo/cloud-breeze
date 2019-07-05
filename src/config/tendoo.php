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
        'mistakes-threshold'    =>  1
    ]
];