<?php
namespace CloudBreeze\Core\Models;

use Illuminate\Database\Eloquent\Model;
use CloudBreeze\Core\Services\DateService;

class Oauth extends Model
{
    protected $table    = 'cb_oauth';

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
