<?php
Route::get( '/tendoo/modules', 'Dashboard\ModulesController@modules' );
Route::get( '/tendoo/modules/{namespace}', 'Dashboard\ModulesController@getModule' );
Route::get( '/tendoo/modules/{namespace}/symlink', 'Dashboard\ModulesController@setSymlink' );
Route::post( '/tendoo/modules/upload', 'Dashboard\ModulesController@postModule' );
Route::post( '/tendoo/modules/{namespace}/migration', 'Dashboard\ModulesController@runMigration' );
Route::delete( '/tendoo/modules/{namespace}', 'Dashboard\ModulesController@deleteModule' );
Route::post( '/tendoo/modules/enable', 'Dashboard\ModulesController@enableModule' );
Route::post( '/tendoo/modules/disable', 'Dashboard\ModulesController@disableModule' );
Route::post( '/tendoo/modules/reset-migrations', 'Dashboard\ModulesController@resetMigration' );
Route::post( 'tendoo/modules/{namespace}/download', 'Dashboard\ModulesController@extractModule' )->name( 'tendoo.modules.download' );
