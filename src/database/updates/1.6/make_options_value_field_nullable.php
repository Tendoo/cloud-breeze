<?php
namespace Tendoo\Database\Updates\v1_6;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use CreateApplicationTable;

class MakeOptionsValueFieldNullable extends Migration
{
    public function up()
    {
        if ( Schema::hasColumn( 'options', 'value' ) ) {
            Schema::table( 'options', function( Blueprint $table ) {
                $table->datetime( 'value' )->nullable()->change();
            });
        }
    }

    public function down()
    {
    }
}