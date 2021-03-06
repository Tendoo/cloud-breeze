<?php
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Hash;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Oauth;
use Tendoo\Core\Models\Option as OptionModel;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Http\Controllers\DashboardController;

use Tendoo\Core\Fields\Dashboard\User as UserFields;

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
                return new UserFields( User::findOrNull( $id ) );
            break;
        }
    }
}