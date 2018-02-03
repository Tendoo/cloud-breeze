<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/**
 * Dashboard Get Routes
 */
Route::get( '/dashboard', 'Dashboard\IndexController@index' )->name( 'dashboard.index' );

/**
 * Users GET Routes
 */
Route::get( '/dashboard/users', 'Dashboard\UsersController@usersList' )->name( 'dashboard.users.list' );
Route::get( '/dashboard/users/create', 'Dashboard\UsersController@createUser' )->name( 'dashboard.users.create' );
Route::get( '/dashboard/users/profile/{tab?}', 'Dashboard\UsersController@showProfile' )->name( 'dashboard.users.profile' );
Route::get( '/dashboard/users/{entry}', 'Dashboard\UsersController@editUser' )->name( 'dashboard.users.edit' );

/**
 * Module Get Routes
 */
Route::get( '/dashboard/modules', 'Dashboard\ModulesController@modulesList' )->name( 'dashboard.modules.list' );
Route::get( '/dashboard/modules/upload', 'Dashboard\ModulesController@uploadModule' )->name( 'dashboard.modules.upload' );
Route::get( '/dashboard/modules/enable/{namespace}', 'Dashboard\ModulesController@enableModule' )->name( 'dashboard.modules.enable' );
Route::get( '/dashboard/modules/disable/{namespace}', 'Dashboard\ModulesController@disableModule' )->name( 'dashboard.modules.disable' );
Route::get( '/dashboard/modules/delete/{namespace}', 'Dashboard\ModulesController@deleteModule' )->name( 'dashboard.modules.delete' );
Route::get( '/dashboard/modules/extract/{namespace}', 'Dashboard\ModulesController@extractModule' )->name( 'dashboard.modules.extract' );
Route::get( '/dashboard/modules/migration/{namespace}', 'Dashboard\ModulesController@migrateModule' )->name( 'dashboard.modules.migration' );

/**
 * Settings Get Routes
 */
Route::get( '/dashboard/settings/{tab?}', 'Dashboard\SettingsController@dashboardSettings' )->name( 'dashboard.settings' );

/**
 * Update GET Routes
 */
// Route::get( '/dashboard/update', 'Dashboard/UpdateController@update' )->name( 'dashboard.update' );

/**
 * Auth Get Routes
 */
Route::get( '/login', 'AuthController@loginIndex' )->name( 'login.index' )->middleware( 'expect.unlogged' );
Route::get( '/logout', 'AuthController@LogoutIndex' )->name( 'logout.index' );
Route::get( '/register', 'AuthController@registerIndex' )->name( 'register.index' )->middleware( 'expect.unlogged' );

/**
 * User POST Routes
 */
Route::post( '/dashboard/users/profile', 'Dashboard\UsersController@postUserProfile' )->name( 'dashboard.users.post' );
Route::post( '/dashboard/users/profile/security', 'Dashboard\UsersController@postUserSecurity' )->name( 'dashboard.users.post-security' );

/**
 * Module POST Routes
 */
Route::post( '/dashboard/modules/post', 'Dashboard\ModulesController@postModule' )->name( 'dashboard.modules.post' );
Route::post( '/dashboard/modules/migrate/{namespace}', 'Dashboard\ModulesController@runMigration' )->name( 'dashboard.modules.migrate' );

/**
 * Options POST Route
 */
Route::post( '/dashboard/options/post', 'Dashboard\SettingsController@postOptions' )->name( 'dashboard.options.post' );

/**
 * CRUD POST Routes
 */
Route::post( '/dashboard/crud/post/{namespace}', 'Dashboard\CrudController@crudPost' )->name( 'dashboard.crud.post' );
Route::post( '/dashboard/crud/put/{namespace}/{id}', 'Dashboard\CrudController@crudPut' )->name( 'dashboard.crud.put' );
Route::post( '/dashboard/crud/bulk/{namespace}', 'Dashboard\CrudController@crudBulkActions' )->name( 'dashboard.crud.bulk-actions' );

/**
 * Auth POST Routes
 */
Route::post( '/login/post', 'AuthController@postLogin' )->name( 'login.post' )->middleware( 'expect.unlogged' );
Route::post( '/register/post', 'AuthController@postRegister' )->name( 'register.post' )->middleware( 'expect.unlogged' );

/**
 * CRUD DELETE Routes
 */
Route::delete( '/dashboard/crud/{namespace}/{id}', 'Dashboard\CrudController@crudDelete' )->name( 'dashboard.crud.delete' );

/**
 * API Resource
 */
Route::group([ 'prefix' => '/api/{resource}'], function( $request ) {        
    Route::get( '', 'ApiController@getAll' )->name( 'api.all' );
    Route::get( '{id}', 'ApiController@getOne' )->name( 'api.one' );
    Route::delete( '{id}', 'ApiController@delete' )->name( 'api.delete' );
    Route::put( '{id}', 'ApiController@put' )->name( 'api.put' );
    Route::post( '', 'ApiController@single' )->name( 'api.post' );
});

/**
 * Setup Routes
 */
Route::get( '/do-setup/{step?}', 'SetupController@steps' )->name( 'setup.step' );
Route::post( '/do-setup/post/database', 'SetupController@post_database' )->name( 'setup.post.database' );
Route::post( '/do-setup/post/app-details', 'SetupController@post_appdetails' )->name( 'setup.post.app-details' );

/**
 * Error Get Route
 */
Route::get( '/errors/{code}', 'ErrorsController@show' )->name( 'errors' );

/**
 * @testing
 */
Route::get( '/mail', function(){
    return new App\Mail\SetupComplete();
});