<?php

/**
 * Loading Index for Tendoo CMS
 * to render SPA
 * @since 1.0
 */
Route::get( 'auth/token', 'OauthController@usingToken' )
    ->name( 'auth.token' );

Route::prefix( 'tendoo' )->group( function() {
    Route::fallback( 'HomeController@index' ); 
});