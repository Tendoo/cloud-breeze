<?php
namespace CloudBreeze\Database\Updates\v1_4;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use CreateApplicationTable;

class CreateExpirationForOptions extends Migration
{
    public function up()
    {
        if ( ! Schema::hasColumn( 'options', 'expire' ) ) {
            Schema::table( 'options', function( Blueprint $table ) {
                $table->string( 'expire' );
            });
        }
    }

    public function down()
    {
        if ( Schema::hasColumn( 'options', 'expire' ) ) {
            Schema::table( 'options', function( Blueprint $table ) {
                $table->dropColumn( 'expire' );
            });
        }
    }
}