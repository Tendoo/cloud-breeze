<?php
/**
 * Table Migration
 * @package  5.0
**/

namespace Modules\Foo\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class EnvatoLicencesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return  void
     */
    public function up()
    {
        Schema::create( 'envato_licences', function (Blueprint $table) {
			$table->increments('id');
			$table->integer( 'user_id' );
			$table->string( 'licence' );
			$table->string( 'app_name' );
			$table->string( 'ip' );
			$table->string( 'hash' );
			$table->string( 'type' );
			$table->datetime( 'support_until' );
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
        Schema::dropIfExists( 'envato_licences' );
    }
}
