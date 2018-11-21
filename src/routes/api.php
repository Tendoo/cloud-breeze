<?php

use Illuminate\Http\Request;

/**
 * This route is used to proceed to an authentication
 * of the user using Application Credentials and the username, password.
 */
Route::middleware([ 'tendoo.prevent.flood', 'tendoo.prevent.not-installed' ])->group( function() {
    Route::post( '/oauth/login', 'OauthControllers@postLogin' );
    Route::post( '/oauth/registration', 'OauthControllers@postRegistration' );
});

Route::middleware([ 'tendoo.prevent.flood', 'tendoo.prevent.installed' ])->group( function() {
    Route::post( 'api/do-setup/database', 'SetupController@post_database' );
    Route::post( 'api/do-setup/application', 'SetupController@post_appdetails' );
});

Route::get( 'api/ping', function() {

})
->middleware([
    'tendoo.prevent.installed',
    'tendoo.prevent.not-installed'
]);

