<?php
Route::get( '/tendoo/medias', 'Dashboard\MediasController@loadMedias' );
Route::post( '/tendoo/medias', 'Dashboard\MediasController@upload' );
Route::post( '/tendoo/medias/delete', 'Dashboard\MediasController@deleteBulkMedias' );