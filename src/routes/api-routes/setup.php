<?php
Route::post( '/tendoo/do-setup/database', 'SetupController@post_database' );
Route::post( '/tendoo/do-setup/application', 'SetupController@post_appdetails' );