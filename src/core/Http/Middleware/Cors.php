<?php
namespace Tendoo\Core\Http\Middleware;

class Cors
{
    public function handle( $request, $next )
    {
        $response   =   $next( $request );;
        $response->header( 'Access-Control-Allow-Origin', '*' );
        return $response;
    }
}