<?php
Route::get( '/tendoo/crud/{namespace}', 'Dashboard\CrudController@crudList' );
Route::post( '/tendoo/crud/{namespace}', 'Dashboard\CrudController@crudPost' );
Route::post( '/tendoo/crud/{namespace}/bulk-actions', 'Dashboard\CrudController@crudBulkActions' );
Route::put( '/tendoo/crud/{namespace}/{id}', 'Dashboard\CrudController@crudPut' );
Route::delete( '/tendoo/crud/{namespace}/{id}', 'Dashboard\CrudController@crudList' );
Route::get( '/tendoo/crud/{namespace}/columns', 'Dashboard\CrudController@getColumns' );
Route::get( '/tendoo/crud/{namespace}/fields', 'Dashboard\CrudController@fields' );
Route::get( '/tendoo/crud/{namespace}/config', 'Dashboard\CrudController@getConfig' );
Route::get( '/tendoo/crud/{namespace}/create-config', 'Dashboard\CrudController@createConfig' );