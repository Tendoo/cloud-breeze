@inject( 'SchemaService', 'App\Services\Schema' )<{{ '?php' }}
/**
 * Table Migration
 * @package {{ config( 'tendoo.version' ) }}
**/

namespace Modules\{{ $module[ 'namespace' ] }}\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class {{ ucwords( camel_case( $migration ) ) }} extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        @php
        $SchemaService->renderSchema( compact( 'table', 'schema' ) )
        @endphp
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        @php
        $SchemaService->renderDrop( compact( 'table', 'schema' ) )
        @endphp
    }
}
