<?php
namespace CloudBreeze\Core\Http\Middleware;

use Closure;
use CloudBreeze\Core\Services\IPBanner;
use CloudBreeze\Core\Models\BannedIP;
use CloudBreeze\Core\Exceptions\ClientBannedException;

class SafeURLMiddleware
{
    public function handle( $request, Closure $next ) 
    {
        /**
         * checks if the banner is enabled
         * or not before processing
         */
        if ( config( 'tendoo.ip-banner.enable' ) ) {
            /**
             * check if the client hasn't yet 
             * been banned before proceeding
             */
            if( IPBanner::isBanned( $request->ip() ) ) {
                IPBanner::refreshDenyOnHtaccess();
                throw new ClientBannedException(
                    __( 'You have been restricted to access to this website.' )
                );
            }

            foreach( config( 'tendoo.ip-banner.forbidden' ) as $word ) {

                /**
                 * let's check if the forbidden words
                 * appear on the current request
                 */
                if ( strpos( $request->url(), $word ) !== false ) {
                    $client     =   IPBanner::getClient( $request->ip() );

                    if( $client instanceof BannedIP ) {
                        $this->increaseFault( $client );

                        /**
                         * the client has already made a mistake
                         * it's no more useful to proceed the loop
                         */
                        continue;
                    } else {
                        $client     =   IPBanner::saveClient( $request->ip(), $request->header( 'User-Agent' ) );
                        $this->increaseFault( $client );
                    }
                }
            }
        }

        return $next( $request );
    }

    private function increaseFault( $client )
    {
        $client->fault     +=  1;
        
        /**
         * if the client has made a lot of mistakes
         * times to ban his ip
         */
        if ( $client->fault >= config( 'tendoo.ip-banner.mistakes-threshold', 5 ) ) {
            $client->banned     =   true;
        }
        
        $client->save();
        
        IPBanner::refreshDenyOnHtaccess();
    }
}