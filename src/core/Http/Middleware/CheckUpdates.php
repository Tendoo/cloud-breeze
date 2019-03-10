<?php
namespace Tendoo\Core\Http\Middleware;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\Helper;
use Illuminate\Support\Facades\Storage;
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
                throw new ShouldUpdateDatabaseException;
            }

            /**
             * let's check if publishing assets is required
             * as well. An update might not include a database update, 
             * but it might include publishing assets.
             */
            if ( $options->get( 'assets_version' ) != config( 'tendoo.assets_version' ) ) {
                throw new SHouldUpdateAssetsException;
            }
        }
        return $next( $request );
    }
}