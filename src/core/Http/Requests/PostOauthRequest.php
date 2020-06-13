<?php
namespace CloudBreeze\Core\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use CloudBreeze\Core\Facades\Hook;

class PostOauthRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return Hook::filter( 'oauth.rules.authentication', [
            'username'      =>  'required',
            'password'      =>  'required',
            'client_key'    =>  'required'
        ]);
    }
}