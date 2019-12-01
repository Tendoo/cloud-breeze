<?php

namespace Tendoo\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Event;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Crud\Applications;
use Tendoo\Core\Exceptions\CoreException;

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
