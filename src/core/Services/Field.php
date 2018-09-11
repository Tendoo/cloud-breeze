<?php
namespace Tendoo\Core\Services;

use Tendoo\Core\Services\Fields\SetupFields;
use Tendoo\Core\Services\Fields\AuthFields;
use Tendoo\Core\Services\Fields\GeneralSettingsFields;
use Tendoo\Core\Services\Fields\UsersFields;
use Tendoo\Core\Services\Fields\ProfileFields;
use Tendoo\Core\Services\Fields\ApplicationsFields;

class Field
{
    use SetupFields,
        AuthFields,
        GeneralSettingsFields,
        UsersFields,
        ApplicationsFields,
        ProfileFields;

    /**
     * Build Self for validation
     * Accept Trait method name which must return an array of fields
     * @return array
     */
    static function buildValidation( $method )
    {
        /**
         * check if we're submitting various field methods
         */
        if ( is_array( $method ) ) {
            $final      =   [];

            /**
             * Lopping all methods to build the validation array
             */
            foreach ( $method as $_method ) {
                if ( $validation =  self::buildValidation( $_method ) ) {
                    $final    =   array_merge( $final, $validation );
                }
            }

            return $final;
        } else {

            /**
             * We're here dealing with string only
             */
            $fields         =   self::$method();
            $validation     =   [];
            if ( $fields ) {
                foreach( self::$method() as $field ) {
                    // if field provide validation
                    if ( @$field->validation ) {
                        $validation[ $field->name ]     =   $field->validation;
                    }
                }
            }
    
            return $validation;
        }
    }

    /**
     * Get Fields
     * @param string Class Name
     * @return void
     */
    static function get( string $className, $method, $entry = null )
    {
        /**
         * if an entry is defined (Model Object), we might pass it to the fields
         */
        return app()->make( $className )->$method( $entry );
    }

    // private $type = 'text';
    // private $placeholder = '';
    // private $name = '';
    // private $description = '';
    // private $value = '';
    // private $validation = '';
    // private $label = '';
    // private $options = [];

    // /**
    //  * Set value for the current field
    //  * @return self
    //  */
    // public function value( $value ) 
    // {
    //     $this->value    =   $value;
    //     return $this;
    // }

    // /**
    //  * set placeholder for the current field
    //  * @return self
    //  */
    // public function placeholder( $placeholder )
    // {
    //     $this->placeholder  =   $placeholder;
    //     return $this;
    // }

    // /**
    //  * Set the name for the current field
    //  * @return self
    //  */
    // public function name( $name )
    // {
    //     $this->name     =   $name;
    //     return $this;
    // }

    // /**
    //  * Set the validation for the current field
    //  * @return self
    //  */
    // public function validation( $validation )
    // {
    //     $this->validation     =   $validation;
    //     return $this;
    // }

    // /**
    //  * Set the name for the current field
    //  * @return self
    //  */
    // public function type( $type )
    // {
    //     $this->type     =   $type;
    //     return $this;
    // }
    
    // /**
    //  * Set the description for the current field
    //  * @return self
    //  */
    // public function description( $description )
    // {
    //     $this->description     =   $description;
    //     return $this;
    // }
    
    // /**
    //  * Set the options for the current field
    //  * @return self
    //  */
    // public function options( $options )
    // {
    //     $this->options     =   $options;
    //     return $this;
    // }
    
    // /**
    //  * Set the label for the current field
    //  * @return self
    //  */
    // public function label( $label )
    // {
    //     $this->label     =   $label;
    //     return $this;
    // }
}