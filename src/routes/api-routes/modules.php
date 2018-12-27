<?php
Route::get( '/tendoo/modules', 'Dashboard\ModulesController@modules' );
Route::post( '/tendoo/modules/upload', 'Dashboard\ModulesController@postModule' );
Route::delete( '/tendoo/modules/{namespace}', 'Dashboard\ModulesController@deleteModule' );
Route::post( '/tendoo/modules/enable', 'Dashboard\ModulesController@enableModule' );
Route::post( '/tendoo/modules/disable', 'Dashboard\ModulesController@disableModule' );
