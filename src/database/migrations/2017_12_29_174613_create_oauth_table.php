<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOauthTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('oauth', function (Blueprint $table) {
            $table->increments('id');
            $table->integer( 'user_id' )->nullable();
            $table->string( 'access_token' );
            $table->string( 'app_name' );
            $table->integer( 'app_id' ); // as registered on application table
            $table->string( 'scopes' );
            $table->string( 'refresh_token' );
            $table->datetime( 'expires_at' );
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('oauth');
    }
}
