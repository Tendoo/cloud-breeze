<?php
use Illuminate\Http\Request;

/**
 * This route is used to proceed to an authentication
 * of the user using Application Credentials and the username, password.
 */
Route::middleware([ 'tendoo.cors', 'tendoo.prevent.flood', 'tendoo.prevent.not-installed' ])->group( function() {
    include_once( dirname( __FILE__ ) . '/api-routes/auth.php' );
});

Route::middleware([ 'tendoo.cors', 'tendoo.prevent.not-installed', 'tendoo.prevent.flood' ])->group( function() {
    include_once( dirname( __FILE__ ) . '/api-routes/options.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/public-forms.php' );
});

Route::middleware([ 'tendoo.cors', 'tendoo.prevent.not-installed', 'tendoo.prevent.flood', 'tendoo.auth' ])->group( function() {    
    include_once( dirname( __FILE__ ) . '/api-routes/users.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/applications.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/crud.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/link.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/forms.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/modules.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/table.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/tabs.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/menus.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/medias.php' );
});

Route::middleware([ 'tendoo.cors', 'tendoo.prevent.flood', 'tendoo.prevent.installed' ])->group( function() {
    include_once( dirname( __FILE__ ) . '/api-routes/setup.php' );
});

Route::middleware([ 'tendoo.cors' ])->group( function() {
    Route::get( 'tendoo/ping', 'HomeController@ping' );
    Route::get( 'tendoo/update/{action}', 'HomeController@update' );
});
