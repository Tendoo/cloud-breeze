<?php

/**
 * Loading Index for Tendoo CMS
 * to render SPA
 * @since 1.0
 */
Route::get( '', 'HomeController@index' );
Route::fallback( 'HomeController@index' );