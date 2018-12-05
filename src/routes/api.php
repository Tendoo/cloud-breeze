<?php
use Illuminate\Http\Request;

/**
 * This route is used to proceed to an authentication
 * of the user using Application Credentials and the username, password.
 */
Route::middleware([ 'tendoo.cors', 'tendoo.prevent.flood', 'tendoo.prevent.not-installed', 'tendoo.guest' ])->group( function() {
    Route::post( '/tendoo/auth/login', 'OauthControllers@postLogin' );
    Route::post( '/tendoo/auth/registration', 'OauthControllers@postRegistration' );
});

Route::middleware([ 'tendoo.cors', 'tendoo.prevent.flood', 'tendoo.auth' ])->group( function() {
    Route::get( '/tendoo/permissions', 'OauthController@permissions' );
    Route::get( '/tendoo/modules', 'Dashboard\ModulesController@modules' );
    Route::post( '/tendoo/modules/upload', 'Dashboard\ModulesController@postModule' );
    Route::delete( '/tendoo/modules/{namespace}', 'Dashboard\ModulesController@deleteModule' );
    Route::post( '/tendoo/modules/enable', 'Dashboard\ModulesController@enableModule' );
    Route::post( '/tendoo/modules/disable', 'Dashboard\ModulesController@disableModule' );
    Route::get( '/tendoo/tables/{namespace}', 'Dashboard\TablesController@tableColumn' );
    Route::get( '/tendoo/users/{id?}', 'Dashboard\UsersController@getUsers' );
});

Route::middleware([ 'tendoo.cors', 'tendoo.prevent.flood', 'tendoo.prevent.installed' ])->group( function() {
    Route::post( '/tendoo/do-setup/database', 'SetupController@post_database' );
    Route::post( '/tendoo/do-setup/application', 'SetupController@post_appdetails' );
});

Route::get( 'tendoo/ping', function() {
})
->middleware([
    'tendoo.cors',
    'tendoo.prevent.installed',
    'tendoo.prevent.not-installed'
]);
