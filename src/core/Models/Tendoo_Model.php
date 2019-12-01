<?php
namespace Tendoo\Core\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Tendoo_Model extends Authenticatable 
{
    /**
     * find or null
     * @param int index
     * @return User|Null 
     */
    public static function findOrNull( $id )
    {
        $model  =   self::find( $id );
        return ( $model instanceof self ) ? $model : null;
    }
}