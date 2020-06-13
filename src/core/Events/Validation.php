<?php
namespace CloudBreeze\Core\Events;

use CloudBreeze\Core\Fields\Frontend\Authentication;
use CloudBreeze\Core\Services\Validation as ValidationExtractor;

class Validation
{
    private $fields;

    public function publicValidation( $fields, $namespace )
    {
        $this->fields       =   new Authentication;

        switch( $namespace ) {
            case 'auth-password-change': 
                return ValidationExtractor::extract( $this->fields->changePassword() );
            case 'auth-recovery':
                return ValidationExtractor::extract( $this->fields->recovery() );
        }
    }
}