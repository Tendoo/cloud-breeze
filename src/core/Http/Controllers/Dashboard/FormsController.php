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

class FormsController extends DashboardController 
{
    private $fields;
    public function __construct()
    {
        parent::__construct();

        $this->middleware( function( $request, $next ) {
            $this->fields   =   app()->make( Field::class );
            return $next( $request );
        });
    }

    /**
     * get field for a specific namespace
     * @param string
     * @return array of fields
     */
    public function getForm( $namespace, $index = null ) 
    {
        switch( $namespace ) {
            case 'dashboard.users.create':
                return [
                    'url'   =>  [
                        'post'  =>  route( 'dashboard.post.user' ),
                        'put'   =>  route( 'dashboard.put.user', [
                            'id'    =>  $index
                        ]),
                    ],
                    'fields'    =>  $this->fields->createUserFields( $index )
                ];
            break;
        }

    }
}