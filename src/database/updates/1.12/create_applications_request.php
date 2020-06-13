<?php
namespace CloudBreeze\Database\Updates\v1_12;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use CloudBreeze\Core\Models\Option;
use CreateApplicationTable;

class CreateApplicationsRequest extends Migration
{
    public function up()
    {
        if( ! Schema::hasTable( 'tendoo_apps_requests' ) ) {
            Schema::create( 'tendoo_apps_requests', function (Blueprint $table) {
                $table->increments('id');
                $table->integer( 'application_id' );
                $table->string( 'type' ); // either POST, PUT, DELETE, PATCH
                $table->string( 'path' );
                $table->string( 'response_code' );
                $table->integer( 'user_id' );
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        Schema::dropIfExists('tendoo_apps');
    }
}