<?php
namespace Tendoo\Database\Updates\v1_10;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Tendoo\Core\Models\Option;
use CreateApplicationTable;

class RenameUsersTable extends Migration
{
    public function up()
    {
        foreach([ 'users' ] as $table ) {
            if( Schema::hasTable( $table ) ) {
                Schema::rename( $table, 'tendoo_' . $table );
            }
        }
    }

    public function down()
    {
        // no reverse possible.
    }
}