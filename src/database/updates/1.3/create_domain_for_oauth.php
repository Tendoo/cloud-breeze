<?php
namespace CloudBreeze\Database\Updates\v1_3;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use CreateApplicationTable;

class CreateDomainForOauth extends Migration
{
    public function up()
    {
        if ( ! Schema::hasColumn( 'oauth', 'domain' ) ) {
            Schema::table( 'oauth', function( Blueprint $table ) {
                $table->string( 'domain' );
            });
        }
    }

    public function down()
    {
        if ( Schema::hasColumn( 'oauth', 'domain' ) ) {
            Schema::table( 'oauth', function( Blueprint $table ) {
                $table->dropColumn( 'domain' );
            });
        }
    }
}