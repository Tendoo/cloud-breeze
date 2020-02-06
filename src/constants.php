<?php
/**
 * database update location path
 * @var constant
 */
defined( 'CB_DATABASE_UPDATES_PATH' )     ?: define( 'CB_DATABASE_UPDATES_PATH', dirname( __FILE__ ) . '/database/updates/' );
defined( 'CB_DATABASE_MIGRATIONS_PATH' )  ?: define( 'CB_DATABASE_MIGRATIONS_PATH', dirname( __FILE__ ) . '/database/migrations/' );
defined( 'CB_CONFIG_PATH' )               ?: define( 'CB_CONFIG_PATH', dirname( __FILE__ ) . '/config/' );
defined( 'CB_ASSETS_PATH' )               ?: define( 'CB_ASSETS_PATH', dirname( __FILE__ ) . '/public/' );
defined( 'CB_DIST_PATH' )                 ?: define( 'CB_DIST_PATH', dirname( __FILE__ ) . '/public/dist/' );
defined( 'CB_ROOT_PATH' )                 ?: define( 'CB_ROOT_PATH', dirname( __FILE__ ) );
defined( 'CB_ROUTES_PATH' )               ?: define( 'CB_ROUTES_PATH', CB_ROOT_PATH . DIRECTORY_SEPARATOR . 'routes' . DIRECTORY_SEPARATOR );
defined( 'CB_MODULES_PATH' )              ?: define( 'CB_MODULES_PATH', base_path() . DIRECTORY_SEPARATOR . 'modules' . DIRECTORY_SEPARATOR );