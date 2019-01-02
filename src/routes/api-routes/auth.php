<?php
Route::post( '/tendoo/auth/login', 'OauthControllers@postLogin' );
Route::post( '/tendoo/auth/registration', 'OauthControllers@postRegistration' );