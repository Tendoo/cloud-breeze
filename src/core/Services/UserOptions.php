<?php
namespace CloudBreeze\Core\Services;

use CloudBreeze\Core\Models\Option;
use CloudBreeze\Core\Services\Options;

class UserOptions extends Options
{
    protected $user_id;

    public function __construct( $user_id )
    {
        $this->user_id  =   $user_id;
        parent::__construct();
    }

    public function option() 
    {
        return Option::where( 'user_id', $this->user_id );
    }

    public function beforeSave( $option )
    {
        $option->user_id    =   $this->user_id;
        return $option;
    }
}