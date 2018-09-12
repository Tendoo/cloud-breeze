<?php
namespace Tendoo\Database\Updates\v1_9;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Tendoo\Core\Models\Option;
use CreateApplicationTable;

class AdjustOptionsTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasColumn( 'options', 'expire_on' ) ) {
            Schema::table( 'options', function( Blueprint $table ) {
                $table->datetime( 'expire_on' )->nullable();
            });
        }
    }

    public function down()
    {
    }
}