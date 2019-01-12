<?php
use Illuminate\Http\Request;

/**
 * This route is used to proceed to an authentication
 * of the user using Application Credentials and the username, password.
 */
Route::middleware([ 'tendoo.cors', 'tendoo.prevent.flood', 'tendoo.prevent.not-installed', 'tendoo.guest' ])->group( function() {
    include_once( dirname( __FILE__ ) . '/api-routes/auth.php' );
});

Route::middleware([ 'tendoo.cors', 'tendoo.prevent.not-installed', 'tendoo.prevent.flood', 'tendoo.auth' ])->group( function() {    
    include_once( dirname( __FILE__ ) . '/api-routes/users.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/modules.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/forms.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/table.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/tabs.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/menus.php' );
    include_once( dirname( __FILE__ ) . '/api-routes/medias.php' );
});

Route::middleware([ 'tendoo.cors', 'tendoo.prevent.flood', 'tendoo.prevent.installed' ])->group( function() {
    include_once( dirname( __FILE__ ) . '/api-routes/setup.php' );
});

Route::get( 'tendoo/ping', function() {
})
->middleware([
    'tendoo.cors',
    'tendoo.prevent.installed',
    'tendoo.prevent.not-installed'
]);
