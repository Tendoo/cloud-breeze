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
use Tendoo\Core\Facades\Hook;

\Debugbar::disable();

global $BasicRoutes;
$BasicRoutes    =   function() {
    
    Route::get('/', 'HomeController@index' );
    
    /**
     * Dashboard Get Routes
     */
    Route::get( '/dashboard', 'Dashboard\IndexController@index' )
        ->name( 'dashboard.index' );
    
    /**
     * Users GET Routes
     */
    Route::get( '/dashboard/users', 'Dashboard\UsersController@usersList' )
        ->name( 'dashboard.users.list' );
    Route::get( '/dashboard/users/create', 'Dashboard\UsersController@createUser' )
        ->name( 'dashboard.users.create' );
    Route::get( '/dashboard/users/{entry?}', 'Dashboard\UsersController@editUser' )
        ->name( 'dashboard.users.edit' );
    Route::get( '/dashboard/profile/general', 'Dashboard\UsersController@showGeneral' )
        ->name( 'dashboard.users.profile.general' );
    Route::get( '/dashboard/profile/security', 'Dashboard\UsersController@showSecurity' )
        ->name( 'dashboard.users.profile.security' );
    Route::get( '/dashboard/profile/oauth', 'Dashboard\UsersController@showOauth' )
        ->name( 'dashboard.users.profile.oauth' );

    /**
     * Applications Routes
     */
    Route::get( '/dashboard/applications', 'Dashboard\ApplicationsController@list' )
        ->name( 'dashboard.applications.list' );
    Route::get( '/dashboard/applications/create', 'Dashboard\ApplicationsController@create' )
        ->name( 'dashboard.applications.create' );
    Route::get( '/dashboard/applications/{entry?}', 'Dashboard\ApplicationsController@edit' )
        ->name( 'dashboard.applications.edit' );
    
    /**
     * Module Get Routes
     */
    Route::get( '/dashboard/modules', 'Dashboard\ModulesController@modulesList' )
        ->name( 'dashboard.modules.list' );
    Route::get( '/dashboard/modules/upload', 'Dashboard\ModulesController@uploadModule' )
        ->name( 'dashboard.modules.upload' );
    Route::get( '/dashboard/modules/enable/{namespace}', 'Dashboard\ModulesController@enableModule' )
        ->name( 'dashboard.modules.enable' );
    Route::get( '/dashboard/modules/disable/{namespace}', 'Dashboard\ModulesController@disableModule' )
        ->name( 'dashboard.modules.disable' );
    Route::get( '/dashboard/modules/delete/{namespace}', 'Dashboard\ModulesController@deleteModule' )
        ->name( 'dashboard.modules.delete' );
    Route::get( '/dashboard/modules/extract/{namespace}', 'Dashboard\ModulesController@extractModule' )
        ->name( 'dashboard.modules.extract' );
    Route::get( '/dashboard/modules/migration/{namespace}', 'Dashboard\ModulesController@migrateModule' )
        ->name( 'dashboard.modules.migration' );

    /**
     * Media Get Routes
     */
    Route::get( '/dashboard/medias', 'Dashboard\MediasController@list' )
        ->name( 'dashboard.medias.list' );
    Route::get( '/ajax/medias/{page?}', 'Dashboard\MediasController@loadMedias' )
        ->name( 'dashboard.medias.load' );
    Route::post( '/dashboard/medias', 'Dashboard\MediasController@upload' )
        ->name( 'dashboard.medias.upload' );
    Route::post( '/dashboard/medias/bulk-delete', 'Dashboard\MediasController@bulkDelete' )
        ->name( 'dashboard.medias.bulk-delete' );
    Route::delete( '/dashboard/medias/{media?}', 'Dashboard\MediasController@delete' )
        ->name( 'dashboard.medias.delete' );
    
    /**
     * Settings Get Routes
     */
    Route::get( '/dashboard/settings/{tab?}', 'Dashboard\SettingsController@dashboardSettings' )
        ->name( 'dashboard.settings' );
    
    /**
     * Update GET Routes
     */
    // Route::get( '/dashboard/update', 'Dashboard/UpdateController@update' )->name( 'dashboard.update' );
    
    /**
     * Auth Get Routes
     */
    Route::get( '/login', 'AuthController@loginIndex' )
        ->name( 'login.index' )->middleware( 'expect.unlogged' );
    Route::get( '/logout', 'AuthController@LogoutIndex' )
        ->name( 'logout.index' );
    Route::get( '/register', 'AuthController@registerIndex' )
        ->name( 'register.index' )->middleware( 'expect.unlogged' );
    Route::get( '/register/activate/{user}/{code}', 'AuthController@registerActivate' )
        ->name( 'register.activate' )->middleware( 'expect.unlogged' );
    Route::get( '/register/send-activation/{user}', 'AuthController@sendActivation' )
        ->name( 'register.send-activation' )->middleware( 'expect.unlogged' );
    Route::get( '/recovery', 'AuthController@recoveryIndex' )
        ->name( 'recovery.index' )->middleware( 'expect.unlogged' );
    Route::get( '/recovery/password/{user}/{code}', 'AuthController@recoveryPassword' )
        ->name( 'recovery.password' )->middleware( 'expect.unlogged' );
    
    /**
     * User POST Routes
     */
    Route::post( '/dashboard/profile', 'Dashboard\UsersController@postUserProfile' )
        ->name( 'dashboard.users.post' );
    Route::post( '/dashboard/profile/security', 'Dashboard\UsersController@postUserSecurity' )
        ->name( 'dashboard.users.post-security' );
    Route::post( '/dashboard/profile/oauth', 'Dashboard\UsersController@postUserOauth' )
        ->name( 'dashboard.users.post-oauth' );
    
    /**
     * Module POST Routes
     */
    Route::post( '/dashboard/modules/post', 'Dashboard\ModulesController@postModule' )
        ->name( 'dashboard.modules.post' );
    Route::post( '/dashboard/modules/migrate/{namespace}', 'Dashboard\ModulesController@runMigration' )
        ->name( 'dashboard.modules.migrate' );
    
    /**
     * Options POST Route
     */
    Route::post( '/dashboard/options/post', 'Dashboard\SettingsController@postOptions' )
        ->name( 'dashboard.options.post' );
    
    /**
     * CRUD POST Routes
     */
    Route::post( '/dashboard/crud/post/{namespace}', 'Dashboard\CrudController@crudPost' )
        ->name( 'dashboard.crud.post' );
    Route::post( '/dashboard/crud/put/{namespace}/{id}', 'Dashboard\CrudController@crudPut' )
        ->name( 'dashboard.crud.put' );
    Route::post( '/dashboard/crud/bulk/{namespace}', 'Dashboard\CrudController@crudBulkActions' )
        ->name( 'dashboard.crud.bulk-actions' );
    Route::get( '/dashboard/crud/list/{namespace}', 'Dashboard\CrudController@crudList' )
        ->name( 'dashboard.crud.list' );
    
    /**
     * Auth POST Routes
     */
    Route::post( '/login/post', 'AuthController@postLogin' )
        ->name( 'login.post' )->middleware( 'expect.unlogged' );
    Route::post( '/register/post', 'AuthController@postRegister' )
        ->name( 'register.post' )->middleware( 'expect.unlogged' );
    Route::post( '/recovery/post', 'AuthController@postRecovery' )
        ->name( 'recovery.post' )->middleware( 'expect.unlogged' );
    Route::post( '/recovery/password/post/{user}', 'AuthController@postRecoveryPassword' )
        ->name( 'recovery.password.post' )->middleware( 'expect.unlogged' );
    
    /**
     * CRUD DELETE Routes
     */
    Route::delete( '/dashboard/crud/{namespace}/{id?}', 'Dashboard\CrudController@crudDelete' )
        ->name( 'dashboard.crud.delete' );

    /**
     * Options CRUD
     */
    Route::get( '/user-ajax/options/{key?}', 'UserAjaxOptionsController@get' )
        ->name( 'user-ajax.get.options' );
    Route::post( '/user-ajax/options', 'UserAjaxOptionsController@set' )
        ->name( 'user-ajax.set.options' );
    Route::delete( '/user-ajax/options/{key?}', 'UserAjaxOptionsController@delete' )
        ->name( 'user-ajax.delete.options' );

    Route::get( '/ajax/options/{key?}', 'AjaxOptionsController@get' )
        ->name( 'ajax.get.options' );
    Route::post( '/ajax/options', 'AjaxOptionsController@set' )
        ->name( 'ajax.set.options' );
    Route::delete( '/ajax/options/{key?}', 'AjaxOptionsController@delete' )
        ->name( 'ajax.delete.options' );

    /**
     * Builder Routes
     */
    Route::get( '/dashboard/builder/{id?}', 'Dashboard\PageBuilderController@list' )
        ->name( 'dashboard.builder.list' );
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
    });
    
    Route::middleware([ 'app.notInstalled' ])->group( function(){
        /**
         * Setup Routes
         */
        Route::get( '/do-setup/{step?}', 'SetupController@steps' )
            ->name( 'setup.step' );
        Route::post( '/do-setup/post/database', 'SetupController@post_database' )
            ->name( 'setup.post.database' );
        Route::post( '/do-setup/post/app-details', 'SetupController@post_appdetails' )
            ->name( 'setup.post.app-details' );
    });

    /**
     * Register OauthRoutes
     */
    Route::get( '/oauth', 'OauthControllers@index' )
        ->name( 'oauth.index' );
    Route::post( '/oauth', 'OauthControllers@post' )
        ->name( 'oauth.post' );
});

Route::middleware([ 'app.installed' ])->group( function(){
    /**
     * register database updates routes
     */
    Route::get( '/do-update/database', 'UpdateController@index' )
        ->name( 'update.database' );
    Route::post( '/do-update/database', 'UpdateController@postUpdate' )
        ->name( 'update.post.database' );
    Route::get( '/do-update/files', 'UpdateController@filesIndex' )
        ->name( 'update.files' );
    Route::post( '/do-update/files', 'UpdateController@postFiles' )
        ->name( 'update.post.files' );
});