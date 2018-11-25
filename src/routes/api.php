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
    Route::get( '/tendoo/modules', 'ModulesController@modules' );
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
