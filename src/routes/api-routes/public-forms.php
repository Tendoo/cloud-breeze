<?php
Route::get( '/tendoo/public/fields/{namespace}/{index?}', 'PublicFieldsController@getFields' );
Route::get( '/tendoo/public/forms/{namespace}/{index?}', 'PublicFormsController@getForm' );
Route::post( '/tendoo/public/forms/{namespace}/{index?}', 'PublicFormsController@postForm' );