<?php
namespace Tendoo\Core\Services;

class Page 
{
    private static $title;

    /**
     * Set page title
     * @param string
     * @return void
     */
    public static function setTitle( $title )
    {
        self::$title    =   $title;
    }

    /**
     * get page title
     * @return string
     */
    public static function getTitle()
    {
        if ( self::$title ) {
            return self::$title . ' &mdash; ' . config( 'tendoo.name' );
        }
        return config( 'tendoo.name' );
    }
}