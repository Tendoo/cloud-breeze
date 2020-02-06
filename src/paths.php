<?php
/**
 *  Changing the Auth Model Provider
 */
config([ 'auth.providers.users'     =>  [
    'driver'    =>  'eloquent',
    'model'     =>  'Tendoo\Core\Models\User'
]]);

/**
 * register version
 */
config([
    'tendoo.db_version'     =>  CB_DB_VERSION,
    'tendoo.assets_version' =>  CB_ASSETS_VERSION,
    'tendoo.version'        =>  CB_VERSION
]);

/**
 * Define the table prefix
 */
config([
    'database.connections.mysql.prefix'     =>  env( 'DB_PREFIX', '' ),
    'database.connections.sqlite.prefix'    =>  env( 'DB_PREFIX', '' ),
    'database.connections.pgsql.prefix'     =>  env( 'DB_PREFIX', '' ),
    'database.connections.sqlsrv.prefix'    =>  env( 'DB_PREFIX', '' ),
]);