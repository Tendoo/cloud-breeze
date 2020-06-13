<?php
namespace CloudBreeze\Database\Updates\v1_5;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use CreateApplicationTable;

class UpdateExpirationTableForOptions extends Migration
{
    public function up()
    {
        if ( Schema::hasColumn( 'options', 'expire' ) ) {
            Schema::table( 'options', function( Blueprint $table ) {
                $table->string( 'expire' )->nullable()->change();
            });
        }
    }

    public function down()
    {
    }
}