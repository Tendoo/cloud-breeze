<?php
return [
    'modules_path'      =>  base_path() . DIRECTORY_SEPARATOR . 'modules' . DIRECTORY_SEPARATOR,
    'debug'             =>  [
        'errors'        =>  true
    ],
    'redirect'      =>  [
        'authenticated'         =>  'dashboard.index',
        'not-authenticated'     =>  'login.index' 
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
    'db_version'    =>  '1.3',
    'assets_version'    =>  '1.6'
];