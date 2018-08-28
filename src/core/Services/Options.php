<?php
namespace Tendoo\Core\Services;

use Tendoo\Core\Models\Option;
use Tendoo\Core\Services\OptionWrapper;
use Illuminate\Support\Facades\Log;

class Options 
{
    private $rawOptions         =   [];
    private $options     =   [];
    private $isUserOptions      =   false;
    private $option;
    private $user_id;
    private $value;
    private $hasFound;
    private $removableIndex;

    /**
     * the option class can be constructed with the user id. If the user is not connected we
     * would like to avoid getting general option. So even if the user is not connected
     * we should treat null (when user is not connected) as if the 
     */
    public function __construct( $user_id = null )
    {
        $this->user_id      =   $user_id;
        $this->build();
    }

    /**
     * return option service
     * @return object
     */
    public function option()
    {
        /**
         * if the user is not connected $this->user_id = 0 which is different from null and we
         * would like to avoid getting general options
         */
        if ( $this->user_id !== null ) {        
            return Option::where( 'user_id', $this->user_id );
        }
        return Option::where( 'user_id', null );
    }

    /**
     * Build
     * Build option array
     * @return void
    **/

    public function build()
    {
        $this->options  =   [];
        $this->rawOptions     =   $this->option()->get();
    }

    /**
     * Set Option
     * @param string key
     * @param any value
     * @param boolean force set
     * @return void
    **/

    public function set( $key, $value )
    {
        $this->hasFound   =   false;
        
        $this->rawOptions->map( function( $option, $index ) use ( $value, $key ) {
            if ( $key === $option->key ) {
                $this->hasFound     =   true;
                $option->value      =   is_array( $value ) ? json_encode( $value ) : $value;
                $option->save();
            }
        });

        if( ! $this->hasFound ) {
            $this->option           =   new Option;
            $this->option->key      =   trim( strtolower( $key ) );
            $this->option->value    =   is_array( $value ) ? json_encode( $value ) : $value;
            $this->option->array    =   true;
            
            /**
             * If user is defined
             */
            if ( $this->user_id ) {
                $this->option->user_id     =   $this->user_id;
            }

            $this->option->save();

            /**
             * Let's save the new option
             */
            $this->rawOptions[ $this->option->key ]     =   $this->option;
        }
    }

    /**
     * Get options
     * @param string/array key
     * @return any
    **/
    public function get( $key = null, $default = null )
    {
        $this->value    =   $default !== null ? $default : null;

        $this->rawOptions->map( function( $option ) use ( $key ) {
            if ( $option->key === $key ) {
                if ( 
                    is_string( $option->value ) && 
                    is_array( $json = json_decode( $option->value, true ) ) && 
                    ( json_last_error() == JSON_ERROR_NONE ) 
                ) {
                    $this->value  =  $json;
                } else {
                    $this->value  =  $option->value;
                }
            }
        });
        
        return $this->value;
    }

    /**
     * Delete Key
     * @param string key
     * @return Eloquent Model Result
    **/
    public function delete( $key ) 
    {
        $this->removableIndex     =   null;
        $this->rawOptions->map( function( $option, $index ) use ( $key ) {
            if ( $option->key === $key ) {
                $option->delete();
                $this->removableIndex     =   $index;
            }
        });   

        if ( $this->removableIndex ) {
            unset( $this->rawOptions[ $this->removableIndex ] );
        }
    }
}