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
            if ( preg_match( '/(.*)\[(\w*)\]/', trim( $option[ 'key' ] ), $result ) ) {
                if ( @$this->options[ strtolower( $result[1] ) ] == null ) {
                    $this->options[ strtolower( $result[1] )]   =   new OptionWrapper( $result[1] );
                }

                $this->options[ strtolower( $result[1] ) ]->add( $result[2], [
                    'value'         =>  $option[ 'value' ],
                    'id'            =>  $option[ 'id' ],
                    'key'           =>  $result[2],
                    'user_id'       =>  $option[ 'user_id' ],
                    'original_key'  =>  $option[ 'key' ],
                    'array'         =>  ( bool ) intval( $option[ 'array' ] )
                ]);

            } else {
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
        if( preg_match( '/(.*)\[(\w*)\]/', $key, $result ) ) {

            // check it the root array exists
            $options    =   @$this->options[ $result[1] ];

            if ( $options instanceof OptionWrapper ) {
                $this->__saveOptionWrapper( $options, $result[2], $value );
            } else if( @$options == null ) {
                $this->__save( $key, $value, 1 );
            } else {
                /**
                 * we're attempting to set an array and
                 * if the a similar value with the same key already exist. We can't proceed
                 * by saving this new entry as an array to avoid Option Build error.
                 * If the value already exists as a non array. The data can't be saved.
                 */
                Log::warning( sprintf( 'Unable to save %s as an array since an entry already exists as a non array.', $key ) );
            }
        } else {
            if ( ! @$this->options[ $key ] instanceof OptionWrapper ) {
                $this->__save( $key, $value, $isArray );
            } else {
                /**
                 * we're attempting to set a non array and
                 * if the a similar value with the same key already exist. We can't proceed
                 * by saving this new entry as an array to avoid Option Build error.
                 * If the value already exists as an array. The data can't be saved.
                 */
                Log::warning( sprintf( 'Unable to save %s as a non array since an entry already exists as an array.', $key ) );
            }   
        }      
    }

    /**
     * Save option Wrapper
     * @return void
     */
    private function __saveOptionWrapper( &$wrapper, $key, $value ) 
    {
        $key    =   trim( strtolower( $key ) );

        /**
         * If option exists
         * then we can directly update it
         */
        if( @$wrapper->get( $key ) ) {
            $this->option()->where( 'id', $wrapper->get( $key )[ 'id' ] )->update([
                'value'     =>  $value
            ]);

            $wrapper->setValue( $key, $value );
        } else {
            $option         =   new Option;
            $option->key    =   $wrapper->getPrimaryKey()  . "[{$key}]";
            $option->value  =   $value;
            $option->array  =   1;
            $option->save();

            if ( $this->user_id != null ) {
                $option->user_id    =   $this->user_id;
            }

            $wrapper->set( $key, $option->toArray() );
        }
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

            if( preg_match( '/(.*)\[(\w*)\]/', $key, $result ) ) {
                if( @$this->options[ $result[1] ] instanceof OptionWrapper ) {
                    return $this->options[ $result[1] ]->getValue( $result[2] );
                }
            } else if( @$this->options[ $key ] != null ) {
                if ( $this->options[ $key ] instanceof OptionWrapper ) {
                    return $this->options[ $key ]->getValue();
                }
                return $this->options[ $key ][ 'value' ];
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
        if( preg_match( '/(.*)\[(\w*)\]/', trim( $key ), $result ) ) {
            // get all array for this input
            $options    =   @$this->options[ strtolower( $result[1] ) ];
            if ( $options != null ) {
                if( $options instanceof OptionWrapper ) {
                    $single     =   $options->get( $result[2] );
                    $this->option()->where( 'id', $single[ 'id' ] )->delete();
                } else {
                    foreach( $options[ 'value' ] as $index => $option ) {
                        // We'll update an index
                        if( $index == $result[2] ) {
                            // @temporal
                            // @todo save indexes before deleting in a bulkd delete
                            unset( $this->options[ $option[ 'key' ] ] );
                            $this->option()->where( 'id', $option[ 'id' ] )->delete();
                        }
                    }
                }
                return true;
            }

            /**
             * The user attempted to delete an entry which doesn't exists
             */
            Log::warning( sprintf( 'Unable to delete the key %s, this key is not defined.', $key ) );
            return false;

        } else {

            /**
             * If the option is an instanceof OptionWrapper, then we'll delete 
             * all options under this label
             */
            if ( @$this->options[ $key ] instanceof OptionWrapper ) {

                /**
                 * Get all sub option of the OptionWrapper
                 */
                $options    =   $this->options[ $key ]->get();
                foreach ( $options as $option ) {
                    $this->option()
                    ->where( 'id', $option[ 'id' ] )
                    ->delete();
                }
            } else {
                $this->option()
                ->where( 'key', $key )
                ->delete();
            }
            unset( $this->options[ $key ] );
        }        
    }
}