<?php
namespace Tendoo\Core\Http\Middleware;

class Cors
{
    public function handle( $request, $next )
    {
        $response   =   $next( $request );;
        $response->headers->set( 'Access-Control-Allow-Origin', '*' );
        return $response;
    }
}