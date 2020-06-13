<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        if ( ! Schema::hasTable('cb_apps') ) {
            Schema::create('cb_apps', function (Blueprint $table) {
                $table->increments('id');
                $table->string( 'name' );
                $table->string( 'callback_url' );
                $table->text( 'description' )->nullable();
                $table->string( 'client_key' )->unique();
                $table->string( 'client_secret' )->unique();
                $table->integer( 'user_id' );
                $table->boolean( 'active' ); // if the application is live or not
                $table->timestamps();
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cb_apps');
    }
}
