<?php

namespace Tendoo\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Event;
use Tendoo\Core\Facades\Hook;

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

        /**
         * In case nothing handle this crud
         */
        if ( ! class_exists( $crudClass ) ) {
            return redirect()->route( 'errors', [ 'code' => 'unhandled-crud-resource' ]);
        }
        
        $resource   =   new $crudClass;

        if ( is_object( $resource ) ) {
            return $resource->validationRules( $this );      
        }

        // if a resource is not defined. Let's return an empty array.
        return [];
    }
}
