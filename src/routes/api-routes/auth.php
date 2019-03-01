<?php
Route::post( '/tendoo/auth/login', 'OauthController@postLogin' );
Route::post( '/tendoo/auth/logout', 'OauthController@postLogout' );
Route::post( '/tendoo/auth/scopes', 'OauthController@getScopes' );
Route::post( '/tendoo/auth/registration', 'OauthController@postRegistration' );
Route::post( '/tendoo/auth/application', 'ApplicationsController@authentication' );
Route::post( '/tendoo/auth/request', 'ApplicationsController@approveRequest' );
Route::post( '/tendoo/auth/token', 'OauthController@authToken' );
