<?php
/**
 * Options request retreive field definition according to routes and 
 * register validation rules
 */

namespace Tendoo\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Event;
use Tendoo\Core\Facades\Hook;

class OptionsRequest extends FormRequest
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
         * @Hook:options.validation.rules
         * Validation rule for options can be registered using this filter
         */
        return Hook::filter( 'options.validation.rules', [], $this );
    }
}
