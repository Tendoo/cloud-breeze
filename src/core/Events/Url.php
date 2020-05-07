<?php
namespace Tendoo\Core\Events;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL as UrlHelper;
use Tendoo\Core\Http\Requests\OptionsRequest;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Services\DateService;

class Url
{
    public function generate( $action, Request $request )
    {
        if( $action === 'extract.module' ) {
            $date       =   app()->make( DateService::class );
            return [
                'url'   =>  UrlHelper::temporarySignedRoute( 'tendoo.modules.download', $date->addYears(30), [
                    'namespace' =>  $request->input( 'namespace' )
                ]),
                'token' =>  $request->header( 'X-AUTH-TOKEN' ),
                'csrf'  =>  csrf_token()
            ];
        }
    }
}