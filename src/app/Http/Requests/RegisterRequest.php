<?php

namespace Tendoo\Cms\App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Tendoo\Cms\App\Services\Field;

class RegisterRequest extends FormRequest
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
        return Field::buildValidation( 'register' );
    }
}
