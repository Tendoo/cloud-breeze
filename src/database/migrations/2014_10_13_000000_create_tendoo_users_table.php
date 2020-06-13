<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTendooUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string( 'username' );
            $table->string( 'name' )->nullable()->change();
            $table->boolean( 'active' )->default( false );
            $table->integer( 'role_id' )->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn( 'username' );
            $table->dropColumn( 'active' );
            $table->dropColumn( 'role_id' );
        });
    }
}
