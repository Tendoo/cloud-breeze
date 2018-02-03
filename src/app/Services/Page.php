<?php
namespace Tendoo\App\Services;

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
        return self::$title . ' &mdash; ' . config( 'tendoo.name' );
    }
}