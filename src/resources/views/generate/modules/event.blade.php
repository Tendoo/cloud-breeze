<{{ '?php' }}
namespace Modules\{{ $module[ 'namespace' ] }}\Events;

// use CloudBreeze\Core\Services\Menus;
// use CloudBreeze\Core\Services\Helper;

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