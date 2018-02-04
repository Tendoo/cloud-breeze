<?php

namespace Tendoo\Cms\App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Event;
use Tendoo\Cms\App\Services\Field;

class PostUserSecurityRequest extends FormRequest
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
        Event::Fire( 'before.validating.user-security-fields', $this );

        /**
         * implemented to support multiple field on differents tabs
         */
        return Field::buildValidation([ 'userSecurityFields' ]);
    }
}
