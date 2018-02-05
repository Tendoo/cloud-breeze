<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Filesystem Disks
    |--------------------------------------------------------------------------
    |
    | Here you may configure as many filesystem "disks" as you wish, and you
    | may even configure multiple disks of the same driver. Defaults have
    | been setup for each driver as an example of the required options.
    |
    | Supported Drivers: "local", "ftp", "s3", "rackspace"
    |
    */

    'disks' => [

        'root'      =>  [
            'driver'    =>  'local',
            'root'      =>  base_path()
        ],

        'temp-core'    =>  [
            'driver' => 'local',
            'root' => storage_path( 'core' ),
        ],

        'modules'    =>  [
            'driver' => 'local',
            'root' => base_path( 'modules' ),
        ],

        'temp-modules'  =>  [
            'driver'    =>  'local',
            'root'  =>  storage_path( 'modules' )
        ],
    ],
];
