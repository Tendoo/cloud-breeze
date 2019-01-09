<?php
Route::get( '/tendoo/users/{id?}', 'Dashboard\UsersController@getUsers' );
Route::post( '/tendoo/users', 'Dashboard\UsersController@postUser' )->name( 'dashboard.post.user' );
Route::post( '/tendoo/users/delete-selected', 'Dashboard\UsersController@deleteSelected' )->name( 'dashboard.post.user' );
Route::put( '/tendoo/users/{id}', 'Dashboard\UsersController@editUser' )->name( 'dashboard.put.user' );
Route::delete( '/tendoo/users/{id?}', 'Dashboard\UsersController@deleteUser' )->name( 'delete.user' );