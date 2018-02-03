<?php
/**
 * Options request retreive field definition according to routes and 
 * register validation rules
 */

namespace Tendoo\App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Event;

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
         * Define default validation rules
         */
        config([ 'tendoo.validations.options' => [
            'app_name'  =>  'sometimes|required'
        ]]);
        
        /**
         * Options validation rules can be registered using the 
         * Tendoo\App\Service\Helper::(trait)pushValidationRule method
         */
        Event::Fire( 'before.validating.options', $this );

        return config( 'tendoo.validations.options' );
    }
}
