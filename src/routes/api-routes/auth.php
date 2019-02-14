<?php
Route::post( '/tendoo/auth/login', 'OauthController@postLogin' );
Route::post( '/tendoo/auth/scopes', 'OauthController@getScopes' );
Route::post( '/tendoo/auth/registration', 'OauthController@postRegistration' );
