<?php
namespace Tendoo\Core\Models;

use Illuminate\Database\Eloquent\Model;

class BannedIP extends Model 
{
    protected $table = 'tendoo_banned_ip';
    
    protected $cats     =   [
        'banned'    =>  'boolean'
    ];

    public function scopeSearchIP( $query, $param )
    {
        return $query->where( 'ip', $param );
    }


}