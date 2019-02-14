<?php
Route::get( '/tendoo/applications/{id}', 'ApplicationsController@getApplication' );
Route::post( '/tendoo/applications/authentication', 'ApplicationsController@authenticateApplication' );