<?php

namespace CloudBreeze\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Event;
use CloudBreeze\Core\Services\Helper;
use CloudBreeze\Core\Facades\Hook;
use CloudBreeze\Core\Crud\Applications;
use CloudBreeze\Core\Exceptions\CoreException;

class CrudPostRequest extends FormRequest
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
        return Hook::filter( 'dashboard.crud.validation', [], $this->route( 'namespace' ), $this );
    }
}
