<?php
return [
    /**
     * Anti Flood Security
     * -------------------------------
     * this helps to limit connexion attempt per
     * users using the client IP address
     */
    'flood'             =>  [
        'prevent'       =>  true,
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
    ]
];