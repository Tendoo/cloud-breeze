<?php
namespace CloudBreeze\Core\Events;

use CloudBreeze\Core\Http\Requests\OptionsRequest;
use CloudBreeze\Core\Services\Field;
use CloudBreeze\Core\Facades\Hook;
use CloudBreeze\Core\Services\Options as OptionsService;

class Options {
    /**
     * Handle options saving
     * @param array of options
     * @return array of options
     */
    public function handle( $inputs )
    {
        $options    =   app()->make( OptionsService::class );
        
        /**
         * During maintenance, these options
         * are disabled
         */
        if ( @$inputs[ 'enable_maintenance' ] === 'true' ) {
            $options->delete( 'allow_recovery' );
            $options->delete( 'allow_registration' );
            $options->delete( 'app_restricted_login' );
        }

        return $inputs;
    }

    /**
     * Let some keys to be available for fetch on the server
     * @param string the option key
     * @return boolean
     */
    public function discloseOptions( $status, $key ) 
    {
        if ( in_array( $key, Hook::filter( 'disclosable.options', config( 'tendoo.options.disclosed' ) ?? [] ) ) ) {
            return true;
        }
        return $status;
    }
}