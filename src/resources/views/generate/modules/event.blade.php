<{{ '?php' }}
namespace Modules\{{ $module[ 'namespace' ] }}\Events;

// use App\Services\Menus;
// use App\Services\Helper;

/**
 * Register Events
**/
class {{ $module[ 'namespace' ] }}Event
{
    public function __construct( Menus $menus )
    {
        $this->menus    =   $menus;
    }
}