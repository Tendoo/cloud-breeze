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
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\Site;
use Tendoo\Core\Services\Helper;

global $BasicRoutes;
$BasicRoutes    =   function() {
    Route::get('/', function () {
        return view('welcome');
    });
    
    /**
     * Dashboard Get Routes
     */
    Route::get( '/dashboard', 'Tendoo\Core\Http\Controllers\Dashboard\IndexController@index' )->name( 'dashboard.index' );
    
    /**
     * Users GET Routes
     */
    Route::get( '/dashboard/users', 'Tendoo\Core\Http\Controllers\Dashboard\UsersController@usersList' )->name( 'dashboard.users.list' );
    Route::get( '/dashboard/users/create', 'Tendoo\Core\Http\Controllers\Dashboard\UsersController@createUser' )->name( 'dashboard.users.create' );
    Route::get( '/dashboard/profile/general', 'Tendoo\Core\Http\Controllers\Dashboard\UsersController@showGeneral' )->name( 'dashboard.users.profile.general' );
    Route::get( '/dashboard/profile/security', 'Tendoo\Core\Http\Controllers\Dashboard\UsersController@showSecurity' )->name( 'dashboard.users.profile.security' );
    Route::get( '/dashboard/profile/oauth', 'Tendoo\Core\Http\Controllers\Dashboard\UsersController@showOauth' )->name( 'dashboard.users.profile.oauth' );
    Route::get( '/dashboard/users/{entry}', 'Tendoo\Core\Http\Controllers\Dashboard\UsersController@editUser' )->name( 'dashboard.users.edit' );
    
    /**
     * Module Get Routes
     */
    Route::get( '/dashboard/modules', 'Tendoo\Core\Http\Controllers\Dashboard\ModulesController@modulesList' )->name( 'dashboard.modules.list' );
    Route::get( '/dashboard/modules/upload', 'Tendoo\Core\Http\Controllers\Dashboard\ModulesController@uploadModule' )->name( 'dashboard.modules.upload' );
    Route::get( '/dashboard/modules/enable/{namespace}', 'Tendoo\Core\Http\Controllers\Dashboard\ModulesController@enableModule' )->name( 'dashboard.modules.enable' );
    Route::get( '/dashboard/modules/disable/{namespace}', 'Tendoo\Core\Http\Controllers\Dashboard\ModulesController@disableModule' )->name( 'dashboard.modules.disable' );
    Route::get( '/dashboard/modules/delete/{namespace}', 'Tendoo\Core\Http\Controllers\Dashboard\ModulesController@deleteModule' )->name( 'dashboard.modules.delete' );
    Route::get( '/dashboard/modules/extract/{namespace}', 'Tendoo\Core\Http\Controllers\Dashboard\ModulesController@extractModule' )->name( 'dashboard.modules.extract' );
    Route::get( '/dashboard/modules/migration/{namespace}', 'Tendoo\Core\Http\Controllers\Dashboard\ModulesController@migrateModule' )->name( 'dashboard.modules.migration' );

    /**
     * Media Get Routes
     */
    Route::get( '/dashboard/medias', 'Tendoo\Core\Http\Controllers\Dashboard\MediasController@list' )->name( 'dashboard.medias.list' );
    Route::post( '/dashboard/medias', 'Tendoo\Core\Http\Controllers\Dashboard\MediasController@upload' )->name( 'dashboard.medias.upload' );
    Route::delete( '/dashboard/medias/{id}', 'Tendoo\Core\Http\Controllers\Dashboard\MediasController@post' )->name( 'dashboard.medias.update' );
    
    /**
     * Settings Get Routes
     */
    Route::get( '/dashboard/settings/{tab?}', 'Tendoo\Core\Http\Controllers\Dashboard\SettingsController@dashboardSettings' )->name( 'dashboard.settings' );
    
    /**
     * Update GET Routes
     */
    // Route::get( '/dashboard/update', 'Dashboard/UpdateController@update' )->name( 'dashboard.update' );
    
    /**
     * Auth Get Routes
     */
    Route::get( '/login', 'Tendoo\Core\Http\Controllers\AuthController@loginIndex' )->name( 'login.index' )->middleware( 'expect.unlogged' );
    Route::get( '/logout', 'Tendoo\Core\Http\Controllers\AuthController@LogoutIndex' )->name( 'logout.index' );
    Route::get( '/register', 'Tendoo\Core\Http\Controllers\AuthController@registerIndex' )->name( 'register.index' )->middleware( 'expect.unlogged' );
    Route::get( '/register/activate/{user}/{code}', 'Tendoo\Core\Http\Controllers\AuthController@registerActivate' )->name( 'register.activate' )->middleware( 'expect.unlogged' );
    Route::get( '/register/send-activation/{user}', 'Tendoo\Core\Http\Controllers\AuthController@sendActivation' )->name( 'register.send-activation' )->middleware( 'expect.unlogged' );
    Route::get( '/recovery', 'Tendoo\Core\Http\Controllers\AuthController@recoveryIndex' )->name( 'recovery.index' )->middleware( 'expect.unlogged' );
    Route::get( '/recovery/password/{user}/{code}', 'Tendoo\Core\Http\Controllers\AuthController@recoveryPassword' )->name( 'recovery.password' )->middleware( 'expect.unlogged' );
    
    /**
     * User POST Routes
     */
    Route::post( '/dashboard/profile', 'Tendoo\Core\Http\Controllers\Dashboard\UsersController@postUserProfile' )->name( 'dashboard.users.post' );
    Route::post( '/dashboard/profile/security', 'Tendoo\Core\Http\Controllers\Dashboard\UsersController@postUserSecurity' )->name( 'dashboard.users.post-security' );
    Route::post( '/dashboard/profile/oauth', 'Tendoo\Core\Http\Controllers\Dashboard\UsersController@postUserOauth' )->name( 'dashboard.users.post-oauth' );
    
    /**
     * Module POST Routes
     */
    Route::post( '/dashboard/modules/post', 'Tendoo\Core\Http\Controllers\Dashboard\ModulesController@postModule' )->name( 'dashboard.modules.post' );
    Route::post( '/dashboard/modules/migrate/{namespace}', 'Tendoo\Core\Http\Controllers\Dashboard\ModulesController@runMigration' )->name( 'dashboard.modules.migrate' );
    
    /**
     * Options POST Route
     */
    Route::post( '/dashboard/options/post', 'Tendoo\Core\Http\Controllers\Dashboard\SettingsController@postOptions' )->name( 'dashboard.options.post' );
    
    /**
     * CRUD POST Routes
     */
    Route::post( '/dashboard/crud/post/{namespace}', 'Tendoo\Core\Http\Controllers\Dashboard\CrudController@crudPost' )->name( 'dashboard.crud.post' );
    Route::post( '/dashboard/crud/put/{namespace}/{id}', 'Tendoo\Core\Http\Controllers\Dashboard\CrudController@crudPut' )->name( 'dashboard.crud.put' );
    Route::post( '/dashboard/crud/bulk/{namespace}', 'Tendoo\Core\Http\Controllers\Dashboard\CrudController@crudBulkActions' )->name( 'dashboard.crud.bulk-actions' );
    
    /**
     * Auth POST Routes
     */
    Route::post( '/login/post', 'Tendoo\Core\Http\Controllers\AuthController@postLogin' )->name( 'login.post' )->middleware( 'expect.unlogged' );
    Route::post( '/register/post', 'Tendoo\Core\Http\Controllers\AuthController@postRegister' )->name( 'register.post' )->middleware( 'expect.unlogged' );
    Route::post( '/recovery/post', 'Tendoo\Core\Http\Controllers\AuthController@postRecovery' )->name( 'recovery.post' )->middleware( 'expect.unlogged' );
    Route::post( '/recovery/password/post/{user}', 'Tendoo\Core\Http\Controllers\AuthController@postRecoveryPassword' )->name( 'recovery.password.post' )->middleware( 'expect.unlogged' );
    
    /**
     * CRUD DELETE Routes
     */
    Route::delete( '/dashboard/crud/{namespace}/{id}', 'Tendoo\Core\Http\Controllers\Dashboard\CrudController@crudDelete' )->name( 'dashboard.crud.delete' );
};

Route::middleware([ 'web' ])->group( function(){
    Route::middleware([ 'app.installed', 'check.updates' ])->group( function(){

        global $BasicRoutes;

        /**
         * If the application is not installed.
         * The options should'nt be loaded,
         * and the default routes are loaded.
         */
        if ( Helper::AppIsInstalled() ) {
            $options    =   app()->make( Options::class );
            $multisite  =   $options->get( 'multisite_enabled' );
        }

        /**
         * If the multisite is enabled, 
         * then we should prefix every route with the slug /site/{id}
         */
        if ( @$multisite === 'yes' ) {

            /**
             * Register Site Routes
             */
            Route::prefix( 'site/{site}' )->group( function( $id ) use ( $BasicRoutes ) {
                $BasicRoutes();
            });

            /**
             * We should always be able to access to the basic route
             */
            $BasicRoutes();

        } else {

            /**
             * If a multi site is not enabled.
             * then we should only register the base routes.
             */
            $BasicRoutes();
        }

        /**
         * Register OauthRoutes
         */
        Route::get( '/oauth', 'Tendoo\Core\Http\Controllers\OauthControllers@index' )->name( 'oauth.index' );
        Route::post( '/oauth', 'Tendoo\Core\Http\Controllers\OauthControllers@post' )->name( 'oauth.post' );
    });
    
    Route::middleware([ 'app.notInstalled' ])->group( function(){
        /**
         * Setup Routes
         */
        Route::get( '/do-setup/{step?}', 'Tendoo\Core\Http\Controllers\SetupController@steps' )->name( 'setup.step' );
        Route::post( '/do-setup/post/database', 'Tendoo\Core\Http\Controllers\SetupController@post_database' )->name( 'setup.post.database' );
        Route::post( '/do-setup/post/app-details', 'Tendoo\Core\Http\Controllers\SetupController@post_appdetails' )->name( 'setup.post.app-details' );
    });
    
    /**
     * Error Get Route
     */
    Route::get( '/errors/{code}/{value?}', 'Tendoo\Core\Http\Controllers\ErrorsController@show' )->name( 'errors' );
});

Route::middleware([ 'app.installed' ])->group( function(){
    /**
     * register database updates routes
     */
    Route::get( '/do-update/database', 'Tendoo\Core\Http\Controllers\UpdateController@index' )->name( 'update.database' );
    Route::post( '/do-update/database', 'Tendoo\Core\Http\Controllers\UpdateController@postUpdate' )->name( 'update.post.database' );
    Route::get( '/do-update/files', 'Tendoo\Core\Http\Controllers\UpdateController@filesIndex' )->name( 'update.files' );
    Route::post( '/do-update/files', 'Tendoo\Core\Http\Controllers\UpdateController@postFiles' )->name( 'update.post.files' );
});

/**
 * API Resource
 */
Route::middleware([ 'app.installed' ])->group(function(){
    Route::group([ 'prefix' => '/api/{resource}'], function( $request ) {        
        Route::get( '', 'Tendoo\Core\Http\Controllers\ApiController@getAll' )->name( 'api.all' );
        Route::get( '{id}', 'Tendoo\Core\Http\Controllers\ApiController@getOne' )->name( 'api.one' );
        Route::delete( '{id}', 'Tendoo\Core\Http\Controllers\ApiController@delete' )->name( 'api.delete' );
        Route::put( '{id}', 'Tendoo\Core\Http\Controllers\ApiController@put' )->name( 'api.put' );
        Route::post( '', 'Tendoo\Core\Http\Controllers\ApiController@single' )->name( 'api.post' );
    });
});
