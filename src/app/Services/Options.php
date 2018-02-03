<?php
namespace Tendoo\App\Services;

use Tendoo\App\Models\Option;

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
        $option     =   null;
        // check if we're pushing array value
        $bracket    =   substr( $key, -2 );

        if( $bracket == '[]' ) {
            // reassign key value
            $key        =   substr( $key, 0, -2 );

            if ( ! in_array( $key, array_keys( $this->options ) ) ) {
                // the option has not been loaded. We'll try from the db
                $option       =   $this->option()->key( $key );
            }
            
            // Fetch if item already exists
            if( in_array( $key, array_keys( $this->options ) ) ) {
                $option     =   $this->options[ $key ][ 'value' ];
                // if option is an array
                if( ! $option->array ) {
                    $this->option()->where( 'id', $option[ 'id' ] )->update([
                        'value'     =>  $value
                    ]);
                } else {
                    $option             =   $option->toArray();
                    $newOption          =   new Option;
                    $newOption->key     =   strtolower( $option[ 'key' ] );
                    $newOption->value   =   $value;
                    $newOption->array   =   $option[ 'array' ];

                    /**
                     * If user is defined
                     */
                    if ( $this->user_id ) {
                        $newOption->user_id     =   $this->user_id;
                    }

                    $newOption->save();
                }
                
            } else {
                $this->__save( $key, $value, true );
            }

        } else if( preg_match( '/(.*)\[(\d)\]/', $key, $result ) && ! is_array( $value ) ) {
            // get all array for this input
            $options    =   $this->option()
                ->Allkeys( $result[1] );

            if( $options ) {
                foreach( $options->toArray() as $index => $option ) {
                    // We'll update an index
                    if( $index == $result[2] ) {
                        $_option    =   $this->option()->where( 'id', $option[ 'id' ] )->update([
                            'value' =>  $value
                        ]);
                    }
                }
                return true;
            }
            return false;

        } else {
            $this->__save( $key, $value, $isArray );
        }
        
        return @$this->options[ $key ][ 'value' ];
    }

    private function __save( $key, $value, $isArray = false )
    {
        $option     =   null;
        $value      =   empty( $value ) ? '' : $value;
        // if options is an array, we should then save it as multiple instance
        if( is_array( $value ) ) {
            foreach( $value as $val ) {
                $this->option           =   new Option;
                $this->option->key      =   trim( strtolower( $key ) );
                $this->option->value    =   empty( $val ) ? '' : $val;
                $this->option->array    =   true;

                /**
                 * If user is defined
                 */
                if ( $this->user_id ) {
                    $this->option->user_id     =   $this->user_id;
                }

                $this->option->save();
            }

        } else {

            if( in_array( $key, array_keys( $this->options ) ) ) {
                $this->option()->where( 'key', $key )->update([
                    'value'     =>  $value
                ]);
            } else {
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

            if( preg_match( '/(.*)\[(\d)\]/', $key, $result ) ) {
                if( @$this->options[ $result[1] ] != null ) {
                    return $this->options[ $result[1] ][ 'value' ][ $result[2] ];
                }
            } else if( @$this->options[ $key ] != null ) {
                return @$this->options[ $key ][ 'value' ];
            }
    
            if( $key == null ) {
                return $this->options;
            }
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
        if( preg_match( '/(.*)\[(\d)\]/', trim( $key ), $result ) ) {
            // get all array for this input
            $options    =   $this->options[ strtolower( $result[1] ) ];

            if( $options ) {
                foreach( $options[ 'value' ] as $index => $option ) {
                    // We'll update an index
                    if( $index == $result[2] ) {
                        // @temporal
                        // @todo save indexes before deleting in a bulkd delete
                        unset( $this->options[ $option[ 'key' ] ] );
                        $this->option()->where( 'id', $option[ 'id' ] )->delete();
                    }
                }
                return true;
            }
            return false;

        } else {
            unset( $this->options[ $key ] );
            return $this->option()
                ->where( 'key', $key )
                ->delete();
        }        
    }
}