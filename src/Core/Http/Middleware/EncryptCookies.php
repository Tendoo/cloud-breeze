<?php

namespace Tendoo\Core\Http\Middleware;

use App\Http\Middleware\EncryptCookies as Middleware;
use Illuminate\Contracts\Encryption\Encrypter;

class EncryptCookies extends Middleware
{
    public function __construct( Encrypter $encrypter )
    {
        $this->except[]     =   'auth_token';
        $this->encrypter    =   $encrypter;
    }
}
