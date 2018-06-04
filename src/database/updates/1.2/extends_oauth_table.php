<?php
namespace Tendoo\Database\Updates\v1_2;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

use CreateApplicationTable;

class ExtendsOauthTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasColumn( 'oauth', 'app_id' ) ) {
            Schema::table( 'oauth', function( Blueprint $table ) {
                $table->integer( 'app_id' );
            });
        }
    }

    public function down()
    {
        if ( Schema::hasColumn( 'oauth', 'app_id' ) ) {
            Schema::table( 'oauth', function( Blueprint $table ) {
                $table->dropColumn( 'app_id' );
            });
        }
    }
}
