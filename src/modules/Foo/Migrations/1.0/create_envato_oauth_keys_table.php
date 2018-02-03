<?php
/**
 * Table Migration
 * @package  5.0
**/

namespace Modules\Foo\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEnvatoOauthKeysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return  void
     */
    public function up()
    {
        Schema::create( 'envato_oauth_keys', function (Blueprint $table) {
			$table->increments('id');
			$table->string( 'refresh_token' );
			$table->string( 'token_type' );
			$table->string( 'access_token' );
			$table->integer( 'user_id' );
			$table->datetime( 'expires_at' );
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
        Schema::dropIfExists( 'envato_oauth_keys' );
    }
}
