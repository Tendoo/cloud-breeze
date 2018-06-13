<?php 
namespace Tendoo\Core\Http;
use Illuminate\Foundation\Http\Kernel;
use Tendoo\Core\Http\Middleware\VerifyCsrfToken;

class TendooKernel extends Kernel {
    public function __construct()
    {
        $this->middlewareGroups[ 'web' ][]  =   \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class;
        $this->middlewareGroups[ 'web' ][]  =   VerifyCsrfToken::class;
    }
}