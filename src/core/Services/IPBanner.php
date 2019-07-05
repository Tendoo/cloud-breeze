<?php
namespace Tendoo\Core\Services;

use Tendoo\Core\Models\BannedIP;

class IPBanner 
{
    public static function isBanned( $ip )
    {
        $client     =   self::getClient( $ip );
        if ( $client instanceof BannedIP ) {
            return $client->banned;
        }
        return false;
    }

    public static function getClient( $ip )
    {
        return BannedIP::searchIP( $ip )->first();
    }

    public static function saveClient( $ip, $user_agent )
    {
        $client                 =   new BannedIP;
        $client->ip             =   $ip;
        $client->location       =   '';
        $client->user_agent     =   $user_agent;
        $client->save();

        return $client;
    }
}