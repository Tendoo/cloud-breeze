<?php
Route::get( '/tendoo/applications/{id}', 'ApplicationsController@getApplication' )->where(['id' => '[0-9]+']);
Route::get( '/tendoo/applications/authorized', 'ApplicationsController@myAuthorizedApplications' );
Route::get( '/tendoo/applications/revoke/{id}', 'ApplicationsController@revokeApplication' );