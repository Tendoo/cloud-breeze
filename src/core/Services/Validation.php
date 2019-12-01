<?php
namespace Tendoo\Core\Services;

class Validation 
{
    public static function extract( array $fields )
    {
        $validation         =   [];
        foreach( $fields as $field ) {
            // if field provide validation
            if ( @$field->validation ) {
                $validation[ $field->name ]     =   $field->validation;
            }
        }
        return $validation;
    }
}