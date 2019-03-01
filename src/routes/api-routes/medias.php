<?php
Route::get( '/tendoo/medias', 'Dashboard\MediasController@loadMedias' );
Route::get( '/tendoo/medias/{id}', 'Dashboard\MediasController@getMedia' );
Route::delete( '/tendoo/medias/{id}', 'Dashboard\MediasController@delete' );
Route::post( '/tendoo/medias', 'Dashboard\MediasController@upload' );
Route::post( '/tendoo/medias/bulk-upload', 'Dashboard\MediasController@bulkUpload' );
Route::post( '/tendoo/medias/delete', 'Dashboard\MediasController@deleteBulkMedias' );