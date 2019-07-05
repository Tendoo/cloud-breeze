<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBannedIpTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tendoo_banned_ip', function (Blueprint $table) {
            $table->increments('id');
            $table->string( 'ip' )->unique();
            $table->string( 'user_agent' );
            $table->string( 'location' );
            $table->integer( 'fault' )->default(0); // count how many time the ip make a mistakes
            $table->boolean( 'banned' )->default(false); // determine wether the ip is banned or not
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
        Schema::dropIfExists('tendoo_banned_ip');
    }
}
