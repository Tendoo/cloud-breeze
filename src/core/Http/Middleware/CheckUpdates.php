<?php
namespace Tendoo\Core\Http\Middleware;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\Helper;
use Closure;

class CheckUpdates
{
    public function handle( $request, Closure $next )
    {
        if ( Helper::AppIsInstalled() ) {
            $options    =   app()->make( Options::class );

            /**
             * check if the current database version matched the database
             * version as described on the files
             */
            if ( $options->get( 'db_version' ) != config( 'tendoo.db_version' ) ) {
                return redirect( route( 'update.database' ) );
            }
        }
        return $next( $request );
    }
}