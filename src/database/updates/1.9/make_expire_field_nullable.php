<?php
namespace Tendoo\Database\Updates\v1_8;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use CreateApplicationTable;

class MakeExpireFieldNullable extends Migration
{
    public function up()
    {
        if ( Schema::hasColumn( 'options', 'expire' ) ) {
            Schema::table( 'options', function( Blueprint $table ) {
                $table->datetime( 'expire_on' );
                $table->boolean( 'expire' )
                    ->change();
            });
        }
    }

    public function down()
    {
    }
}