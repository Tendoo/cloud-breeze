<?php
Route::get( 'dashboard/foo', 'FooController@index' )->name( 'dashboard.foo.index' );
Route::get( 'something', function() {
    echo 'Something Else';
});
Route::get( 'dashboard/foo/bar', 'FooController@bar' )->name( 'dashboard.bar.index' );
Route::get( 'dashboard/settings/nexopos', 'FooController@settings' )->name( 'dashboard.settings.nexopos' );
Route::get( 'dashboard/settings/nexopos/general', 'FooController@generalSettings' )->name( 'dashboard.settings.nexopos.general' );