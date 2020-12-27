<?php

namespace Tendoo\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Tendoo\Core\Facades\Hook;

class RecoveryRequest extends FormRequest
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
        return Hook::filter( 'public.validation', [], 'auth-recovery', $this );
    }
}
