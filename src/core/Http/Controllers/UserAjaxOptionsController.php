<?php 
namespace Tendoo\Core\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Tendoo\Core\Models\User;
use Tendoo\Core\Services\Options;


class UserAjaxOptionsController extends BaseController
{
    protected $userOptions;

    public function __construct() 
    {
        parent::__construct();
    }

    public function set( Request $request )
    {   
        $this->userOptions->set( $request->input( 'key' ), $request->input( 'value' ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The options has been saved.' )
        ];
    }

    /**
     * Delete Option
     * @return void
     */
    public function delete( string $key )
    {
        $this->userOptions->delete( $key );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The option has been deleted.' )
        ];
    }

    /**
     * Get Options
     */
    public function get( User $user, string $key  )
    {
        return [
            'value' =>  $this->userOptions->get( $key )
        ];
    }
}