<?php
namespace CloudBreeze\Core\Services;

use CloudBreeze\Core\Facades\Curl;
use CloudBreeze\Core\Services\Options;

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

    /**
     * helps to validate a 
     * recaptcha fields with Google Servers
     * @param value
     * @return boolean
     */
    public static function verifyRecaptcha( $value, $option = 'recaptcha_site_secret' )
    {
        $options    =   app()->make( Options::class );

        if ( $options->get( 'enable_recaptcha' ) ) {
            $result     =   Curl::to( 'https://www.google.com/recaptcha/api/siteverify' )
                ->withData([ 
                    'secret'    =>  $options->get( $option ),
                    'response'  =>  $value,
                    'ip'        =>  request()->ip()
                ])
                ->withContentType( 'application/x-www-form-urlencoded' )
                ->asJsonResponse()
                ->post();

            if ( $result->success === false ) {
                return false;
            }
        }
        return true;
    }
}