<?php
namespace Tendoo\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Models\User;
use Illuminate\Support\Facades\Auth;

class PutUserRequest extends FormRequest
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
        return Field::buildValidation( 'setupUserFields', [ User::find( $this->route( 'id' ) ) ]);
    }
}