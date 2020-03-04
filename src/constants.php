<?php
/**
 * database update location path
 * @var constant
 */
define( 'CB_S', DIRECTORY_SEPARATOR );

defined( 'CB_DATABASE_UPDATES_PATH' )     ?: define( 'CB_DATABASE_UPDATES_PATH', dirname( __FILE__ ) . CB_S . 'database' . CB_S . 'updates' . CB_S );
defined( 'CB_DATABASE_MIGRATIONS_PATH' )  ?: define( 'CB_DATABASE_MIGRATIONS_PATH', dirname( __FILE__ ) . CB_S . 'database' . CB_S . 'migrations' . CB_S );
defined( 'CB_CONFIG_PATH' )               ?: define( 'CB_CONFIG_PATH', dirname( __FILE__ ) . CB_S . 'config' . CB_S );
defined( 'CB_ASSETS_PATH' )               ?: define( 'CB_ASSETS_PATH', dirname( __FILE__ ) . CB_S . 'public' . CB_S );
defined( 'CB_DBMIGRATIONS_PATH' )         ?: define( 'CB_DBMIGRATIONS_PATH',  dirname( __FILE__ ) . CB_S . 'database' . CB_S . 'migrations'  . CB_S );
defined( 'CB_DIST_PATH' )                 ?: define( 'CB_DIST_PATH',  dirname( __FILE__ ) . CB_S . 'public' . CB_S . 'dist' . CB_S );
defined( 'CB_ROOT_PATH' )                 ?: define( 'CB_ROOT_PATH', dirname( __FILE__ ) );
defined( 'CB_ROUTES_PATH' )               ?: define( 'CB_ROUTES_PATH', CB_ROOT_PATH . CB_S . 'routes' . CB_S );
defined( 'CB_MODULES_PATH' )              ?: define( 'CB_MODULES_PATH', 'modules' . CB_S );
defined( 'CB_DBUPDATES_PATH' )            ?: define( 'CB_DBUPDATES_PATH',  dirname( __FILE__ ) . CB_S . 'database' . CB_S . 'updates'  . CB_S );
defined( 'CB_PUBLIC_PATH' )               ?: define( 'CB_PUBLIC_PATH', 'public' . CB_S );
defined( 'CB_LARAVELCONFIG_PATH' )        ?: define( 'CB_LARAVELCONFIG_PATH', 'config' . CB_S );