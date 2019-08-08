<?php
namespace Tendoo\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Tendoo\Core\Services\DateService;

class Oauth extends Model
{
    protected $table    = 'tendoo_oauth';

    public function scopeToken( $query, $token )
    {
        return $query->where( 'access_token', $token );
    }

    public function scopeValid( $query )
    {
        $date       =   app()->make( DateService::class );
        return $query->where( 'expires_at', '>', $date->now()->toDateTimeString() );
    }
}
