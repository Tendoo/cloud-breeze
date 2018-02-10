<?php
namespace Tendoo\Core\Services;

use Tendoo\Core\Models\Option;

class OptionWrapper 
{
    private $options    =   [];
    private $primaryKey    =   '';

    /**
     * Constructor register the base key
     * @return void
     */
    public function __construct( $primaryKey )
    {
        $this->primaryKey      =   $primaryKey;
    }

    /**
     * Push
     * @param object array
     * @return void
     */
    public function add( $key, $value ) 
    {
        $this->options[ $key ]  =   $value;
    }

    /**
     * get value
     * @param string
     */
    public function get( $key = null ) {
        if  ( $key != null ) {
            return @$this->options[ $key ];
        }
        return $this->options;
    }

    /**
     * get Value
     * @return value
     */
    public function getValue( $key = null )
    {
        $values     =   [];
        foreach ( $this->get( $key ) as $key => $option ) {
            $values[ $key ]     =   $option[ 'value' ];
        }
        return $values;
    }

    /**
     * Set value
     * @param string key
     * @param mixed value
     * @return void
     */
    public function setValue( string $key, $mixed )
    {
        $this->options[ $key ][ 'value' ]  =   $mixed;
    }

    /**
     * Set option
     * @param string key
     * @param mixed value
     * @return void
     */
    public function set( string $key, $mixed )
    {
        $this->options[ $key ]  =   $mixed;
    }


    /**
     * Get Primary Key
     * @return stirng
     */
    public function getPrimaryKey()
    {
        return $this->primaryKey;
    }

    /**
     * delete option from OptionWrapper
     * @param string key to remove
     * @return void
     */
    public function delete( $key )
    {
        unset( $this->options[ $key ] );
    }
}