<?php
namespace CloudBreeze\Core\Http\Middleware;
use CloudBreeze\Core\Services\Options;
use CloudBreeze\Core\Services\Helper;
use Illuminate\Support\Facades\Storage;
use CloudBreeze\Core\Exceptions\ShouldUpdateAssetsException;
use CloudBreeze\Core\Exceptions\ShouldUpdateDatabaseException;
use Closure;

class CheckMigrations
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
                // throw new ShouldUpdateDatabaseException;
            }

            /**
             * let's check if publishing assets is required
             * as well. An update might not include a database update, 
             * but it might include publishing assets.
             */
            if ( $options->get( 'assets_version' ) != config( 'tendoo.assets_version' ) ) {
                // throw new ShouldUpdateAssetsException;
            }
        }
        return $next( $request );
    }
}