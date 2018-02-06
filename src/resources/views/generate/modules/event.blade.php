<{{ '?php' }}
namespace Modules\{{ $module[ 'namespace' ] }}\Events;

// use Tendoo\Core\Services\Menus;
// use Tendoo\Core\Services\Helper;

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