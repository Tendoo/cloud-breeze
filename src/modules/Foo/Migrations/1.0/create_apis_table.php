<?php
/**
 * Table Migration
 * @package  5.0
**/

namespace Modules\Foo\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApisTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return  void
     */
    public function up()
    {
        Schema::create( 'apis', function (Blueprint $table) {
			$table->increments('id');
			$table->string( 'host' );
			$table->string( 'ip' );
			$table->string( 'app_name' );
			$table->string( 'app_version' );
			$table->string( 'app_code' );
			$table->string( 'google_code' );
			$table->string( 'google_access_token' );
			$table->string( 'google_refresh_token' );
			$table->string( 'google_token_expire' );
			$table->string( 'google_token_type' );
			$table->string( 'envato_licence' );
			$table->string( 'gcp_proxy' );
			$table->string( 'request_uri' );
			$table->timestamps();
		});
    }

    /**
     * Reverse the migrations.
     *
     * @return  void
     */
    public function down()
    {
        Schema::dropIfExists( 'apis' );
    }
}
