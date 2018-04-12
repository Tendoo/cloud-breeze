<?php
namespace Tendoo\Core\Events;

use Illuminate\Foundation\Http\FormRequest;
use Tendoo\Core\Services\Field;

class Users
{
    /**
     * Create Profile Field Validation
     * @param array of validation
     * @param FormRequest
     * @return array of field validation
     */
    public function profileSecurity( $validations, FormRequest $request )
    {
        return array_merge( $validations, Field::buildValidation( 'userSecurityFields' ) );
    }

    /**
     * Create General Field Validation
     * @param array of validation
     * @param FormRequest
     * @return array of field validation
     */
    public function profileGeneral( $validations, FormRequest $request ) 
    {
        return array_merge( $validations, Field::buildValidation( 'userGeneralFields' ) );
    }

    /**
     * Register Fields Valiadtion
     * @param array of validation
     * @param FormRequest
     * @return array of validation
     */
    public function registration( $validations, FormRequest $request )
    {
        return array_merge( $validations, Field::buildValidation( 'register' ) );
    }
}