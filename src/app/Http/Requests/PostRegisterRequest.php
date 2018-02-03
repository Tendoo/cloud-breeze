<?php

namespace Tendoo\App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Tendoo\App\Services\Field;

class PostRegisterRequest extends FormRequest
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
