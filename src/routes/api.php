<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/**
 * This route is used to proceed to an authentication
 * of the user using Application Credentials and the username, password.
 */
Route::middleware([ 'app.installed' ])->group( function() {
    
    Route::post( '/oauth/login', 'OauthControllers@postLogin' );
    Route::post( '/oauth/registration', 'OauthControllers@postRegistration' );

    /**
     * Every request send here, should have a valid token 
     * provided during the Oauth Authentication.
     */
    Route::middleware([ 'api.guard' ])->namespace( 'Api' )->group( function() {
        Route::get( '/api/option/{key}', 'OptionsController@getOption' );
        Route::get( '/api/options', 'OptionsController@getAllOptions' );
    });
});
