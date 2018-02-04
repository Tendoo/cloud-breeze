<?php
namespace Tendoo\Cms\App\Services;

use Tendoo\Cms\App\Services\Options;

class UserOptions extends Options
{
    protected $user_id;

    public function __construct( $user_id )
    {
        parent::__construct( $user_id );
    }

    /**
     * Get user option
     * @return mixed
     */
    public function getOption( $key = null, $default = null )
    {
        /**
         * If key is provided
         */
        if ( $key !== null ) {
            return $this->get( $key, $default );
        }

        /**
         * If no keys are provided
         */
        return $this->get();
    }
}