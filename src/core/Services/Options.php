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

    /**
     * the option class can be constructed with the user id. If the user is not connected we
     * would like to avoid getting general option. So even if the user is not connected
     * we should treat null (when user is not connected) as if the 
     */
    public function __construct( $user_id = null )
    {
        $this->user_id      =   $user_id;
        $this->rawOptions   =   $this->option()
            ->get();
        
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
        $this->options                  =   [];

        foreach( $this->rawOptions as $option ) {
            $option     =   array_only( $option->toArray(), [ 'id', 'key', 'value', 'array', 'user_id' ] );
            // might be deprecated
            if( @$this->options[ $option[ 'key' ] ] == null ) {
                if( ( bool ) $option[ 'array' ] ) {
                    $this->options[ $option[ 'key' ] ]      =   array_merge( $option, [
                        'value'     =>  [ $option ]
                    ]);
                } else {
                    $this->options[ $option[ 'key' ] ]      =   array_merge( $option, [
                        'value'     =>  $option[ 'value' ]
                    ]);
                }               
            } else {
                // if value has yet been saved, then well consider it as an array
                if( ! is_array( $this->options[ $option[ 'key' ] ][ 'value' ] ) ) {
                    $temp   =   $this->options[ $option[ 'key' ] ][ 'value' ];
                    unset( $this->options[ $option[ 'key' ] ][ 'value' ] );
                    $this->options[ $option[ 'key' ] ][ 'value' ]      =   [ $temp ];
                } else {
                    $this->options[ $option[ 'key' ] ][ 'value' ][]    =   $option;
                }
            } 
        }
        // dd( $this->options );
    }

    /**
     * Get Raw Options
     * @return array;
    **/

    public function raw()
    {
        return $this->rawOptions;
    }

    /**
     * Set Option
     * @param string key
     * @param any value
     * @param boolean force set
     * @return void
    **/

    public function set( $key, $value, $isArray = false )
    {
        $this->__save( $key, $value, $isArray );
    }

    private function __save( $key, $value, $isArray = false )
    {
        $option     =   null;
        $value      =   empty( $value ) ? '' : $value;
        // if options is an array, we should then save it as multiple instance
        if( is_array( $value ) ) {
            $this->option           =   new Option;
            $this->option->key      =   trim( strtolower( $key ) );
            $this->option->value    =   json_encode( $value );
            $this->option->array    =   true;

            /**
             * If user is defined
             */
            if ( $this->user_id ) {
                $this->option->user_id     =   $this->user_id;
            }

            $this->option->save();
        } else {

            $option     =   $this->option()->where( 'key', $key )->first();

            if ( $option === null ) {
                // if option doesn't exist, we'll just
                $this->option               =   new Option;
                $this->option->key          =   trim( strtolower( $key ) );
                $this->option->value        =   $value;
                $this->option->array        =   $isArray;

                /**
                 * If user is defined
                 */
                if ( $this->user_id ) {
                    $this->option->user_id     =   $this->user_id;
                }

                $this->option->save();
            } else {
                $this->option()->where( 'key', $key )->update([
                    'value'     =>  $value
                ]);
            }

            /**
             * Updating value
             */
            $this->options[ $key ][ 'value' ]      =   $value;
        }
    }

    /**
     * Get options
     * @param string/array key
     * @return any
    **/

    public function get( $key = null, $default = null )
    {
        $key    =   trim( strtolower( $key ) );

        // Get a set of options
        if( is_array( $key ) ) {
            $options    =   [];

            foreach( $key as $key_options ) {
                $options[ $key_options ]    =   $this->get( $key_options );
            }

            return $options;

        } else {
            /**
             * if keys are saved to lowercase, then we should retreive using lowercase as well
             */
            $key    =   strtolower( $key );

            /**
             * get default value
             */
            return @$this->options[ $key ][ 'value' ] != null ? 
                $this->options[ $key ][ 'value' ] : $default;
        }

        return $default;
    }

    /**
     * Delete Key
     * @param string key
     * @return Eloquent Model Result
    **/

    public function delete( $key ) 
    {
        $this->option()
            ->where( 'key', $key )
            ->delete();
        unset( $this->options[ $key ] );      
    }
}