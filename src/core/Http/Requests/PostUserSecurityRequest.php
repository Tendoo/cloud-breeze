<?php

namespace CloudBreeze\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use CloudBreeze\Core\Services\Field;
use CloudBreeze\Core\Facades\Hook;


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
        /**
         * @Hook:profile-security.validation.rules
         */
        return Hook::filter( 'profile-security.validation.rules', [], $this );
    }
}
