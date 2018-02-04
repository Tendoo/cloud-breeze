<?php

namespace Tendoo\Cms\App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Event;

class CrudPutRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        /**
         * get resource defined
         */
        $resource   =   @Event::fire( 'define.crud' )[0];

        if ( is_object( $resource ) ) {
            return $resource->validationRules( $this );      
        }

        // if a resource is not defined. Let's return an empty array.
        return [];
    }
}
