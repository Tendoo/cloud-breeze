<?php
Route::get( '/tendoo/fields/{namespace?}/{index?}', 'Dashboard\FieldsController@getFields' );
Route::get( '/tendoo/forms/{namespace}/{index?}', 'Dashboard\FormsController@getForm' );
Route::post( '/tendoo/forms/{namespace}/{index?}', 'Dashboard\FormsController@postForm' );