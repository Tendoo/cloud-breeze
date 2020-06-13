<?php
namespace CloudBreeze\Core\Http\Controllers\Dashboard;

use CloudBreeze\Core\Http\Controllers\BaseController;
use Illuminate\Http\Request;
use CloudBreeze\Core\Facades\Hook;

class OptionsController extends BaseController
{
    /**
     * get specific options
     * these option might run under a filter which can allow to 
     * disclose or not an option
     * @param string option key
     * @return array [ value => 'option value' ]
     */
    public function getOption( $key ) 
    {
        if ( Hook::filter( 'disclose.options', false, $key ) === true ) {
            $option     =   $this->options->get( $key );

            /**
             * this parses if the option returns "true" or "false"
             * and convert it into boolean.
             */
            $option     =   in_array( $option, [ 'true', 'false' ] ) ? 
                $option === 'true' ? true : false 
            : $option;  

            return [ 'value'    =>  $option ];
        }

        return response()->json([
            'status'    =>  'failed',
            'message'   =>  __( 'You\'re not authorised to retrive this option, or this option is not allowed to be retreived.' )
        ]);
    }
}