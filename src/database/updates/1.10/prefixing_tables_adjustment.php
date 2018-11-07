<?php
namespace Tendoo\Database\Updates\v1_9;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Tendoo\Core\Models\Option;
use CreateApplicationTable;

class PrefixingTablesAdjustment extends Migration
{
    public function up()
    {
        foreach([ 'options', 'roles', 'permissions', 'role_permission', 'applications', 'oauth', 'medias' ] as $table ) {
            if( Schema::hasTable( $table ) ) {
                $table  =   $table === 'applications' ? 'apps' : $table;
                Schema::rename( $table, 'tendoo_' . $table );
            }
        }
    }

    public function down()
    {
        // no reverse possible.
    }
}