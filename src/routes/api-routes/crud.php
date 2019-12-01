<?php
Route::get( '/tendoo/crud/{namespace}', 'Dashboard\CrudController@crudList' );
Route::get( '/tendoo/crud/{namespace}/columns', 'Dashboard\CrudController@getColumns' );
Route::get( '/tendoo/crud/{namespace}/fields', 'Dashboard\CrudController@fields' );
Route::get( '/tendoo/crud/{namespace}/config', 'Dashboard\CrudController@getConfig' );
Route::get( '/tendoo/crud/{namespace}/form-config/{id?}', 'Dashboard\CrudController@getFormConfig' );
Route::put( '/tendoo/crud/{namespace}/{id}', 'Dashboard\CrudController@crudPut' )->where(['id' => '[0-9]+']);
Route::post( '/tendoo/crud/{namespace}', 'Dashboard\CrudController@crudPost' );
Route::post( '/tendoo/crud/{namespace}/bulk-actions', 'Dashboard\CrudController@crudBulkActions' );
Route::post( '/tendoo/crud/{namespace}/can-access', 'Dashboard\CrudController@canAccess' );
Route::delete( '/tendoo/crud/{namespace}/{id}', 'Dashboard\CrudController@crudDelete' );