<?php 
namespace Tendoo\Core\Http;
use App\Http\Kernel;

class TendooKernel extends Kernel {
    public function __construct()
    {
        $this->middlewareGroups[ 'web' ][]  =   \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class;
    }
}