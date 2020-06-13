<?php
namespace CloudBreeze\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use CloudBreeze\Core\Models\User;
use CloudBreeze\Core\Models\Oauth;
use CloudBreeze\Core\Models\Option as OptionModel;
use CloudBreeze\Core\Services\Field;
use CloudBreeze\Core\Http\Controllers\DashboardController;

use CloudBreeze\Core\Fields\Dashboard\User as UserFields;

class FieldsController extends DashboardController 
{
    private $fields;
    public function __construct()
    {
        parent::__construct();

        $this->middleware( function( $request, $next ) {
            return $next( $request );
        });
    }

    /**
     * get field for a specific namespace
     * @param string
     * @return array of fields
     */
    public function getFields( $namespace, $index = null ) 
    {
        switch( $namespace ) {
            case 'dashboard.users.create':
            case 'dashboard.users.edit':
                return new UserFields( User::find( $id ) );
            break;
        }
    }
}