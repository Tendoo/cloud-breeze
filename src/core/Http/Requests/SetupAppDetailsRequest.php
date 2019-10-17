<?php

namespace Tendoo\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Tendoo\Core\Services\Validation;
use Tendoo\Core\Fields\Frontend\SetupFields;

class SetupAppDetailsRequest extends FormRequest
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
        return Validation::extract( SetupFields::setupAppDetails() );
    }
}
