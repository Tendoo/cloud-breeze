<?php
config([ 'temp.database-updates' => [
    'driver' => 'local',
    'root' => DATABASE_UPDATES_PATH,
] ]);

config([ 'temp.tendoo-assets' => [
    'driver' => 'local',
    'root' => TENDOO_ASSETS_PATH,
] ]);

config([ 'temp.tendoo-dist' => [
    'driver' => 'local',
    'root' => TENDOO_DIST_PATH,
] ]);

config([ 'temp.tendoo-root' => [
    'driver' => 'local',
    'root' => TENDOO_ROOT_PATH,
] ]);

config([ 'temp.laravel-public' => [
    'driver' => 'local',
    'root' => base_path( 'public' ),
] ]);

config([ 'temp.tendoo-config' => [
    'driver' => 'local',
    'root' => TENDOO_CONFIG_PATH,
] ]);

config([ 'temp.database-migrations' => [
    'driver' => 'local',
    'root' => DATABASE_MIGRATIONS_PATH,
] ]);

config([ 'temp.temp-core' => [
    'driver' => 'local',
    'root' => storage_path( 'core' ),
] ]);

config([ 'temp.root' => [
    'driver' => 'local',
    'root' => base_path(),
] ]);

config([ 'temp.modules' => [
    'driver' => 'local',
    'root' => base_path( 'modules' ),
] ]);

config([ 'temp.config' => [
    'driver' => 'local',
    'root' => base_path( 'config' ),
] ]);

config([ 'temp.temp-modules' => [
    'driver'    =>  'local',
    'root'  =>  storage_path( 'modules' )
] ]);

config([ 'temp.uploads' => [
    'driver'    =>  'local',
    'root'      =>  storage_path( 'uploads' )
]]);

config([ 'filesystems.disks' => array_merge( config( 'filesystems.disks' ), config( 'temp' ) ) ]);

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
    'tendoo.db_version'     =>  TENDOO_DB_VERSION,
    'tendoo.assets_version' =>  TENDOO_ASSETS_VERSION,
    'tendoo.version'        =>  TENDOO_VERSION
]);

/**
 * Define the table prefix
 */
config([
    'database.connections.mysql.prefix'     =>  env( 'DB_TABLE_PREFIX', '' ),
    'database.connections.sqlite.prefix'    =>  env( 'DB_TABLE_PREFIX', '' ),
    'database.connections.pgsql.prefix'     =>  env( 'DB_TABLE_PREFIX', '' ),
    'database.connections.sqlsrv.prefix'    =>  env( 'DB_TABLE_PREFIX', '' ),
]);