<?php

namespace Tendoo\Core\Models;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    protected $table = 'tendoo_options';
    
    //
    public function scopeKey( $query, $key )
    {
        return $query->where( 'key', $key )->first();
    }

    /**
     * Get All keys
     * @param string key
     * @return array
    **/

    public function scopeAllkeys( $query, $key )
    {
        return $query->where( 'key', $key )->get();
    }
}
