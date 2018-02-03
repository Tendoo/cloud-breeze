<?php

namespace Tendoo\App\Services;

class Menus 
{
    private $namesace;
    private $menus;

    public function __construct( )
    {

    }

    /**
     * Push new menu to a specific menu namespaced
     * @param array of menus
     * @param string of namespace
     * @return void
     */
    public function add( $menus )
    {
        $this->menus[]     =   $menus;
    }

    /**
     * Get menus
     */
    public function get( $namespace = null )
    {
        if( $namespace == null ) {
            return $this->menus;
        }

        foreach( $this->menus as $index => &$menu ) {
            if ( $menu->namespace === $namespace ) {
                return $menu;
            }
        }
        return [];
    }

    /**
     * Add menu on
     * @param string menu namespace
     * @return void
     */
    public function addTo( $namespace, $menus )
    {
        if ( $menu = $this->get( $namespace ) ) {
            // if submenu doesn't exist create it
            if ( @$menu->childrens == null ) {
                $menu->childrens   =   [];
            }

            if ( is_array( $menus ) ) {
                foreach ( $menus as $_menu ) {
                    $menu->childrens[]   =   $_menu;
                }
            } else {
                $menu->childrens[]   =   $menus;
            }
        }
    }

    /**
     * Add menu before a specific namespace
     * @param string namespace
     * @param object menu namespace
     * @return void
     */
    public function addBefore( $namespace, $menu )
    {
        $foundIndex     =   -1;
        foreach( $this->menus as $index => $_menu ) {
            if ( $_menu->namespace === $namespace ) {
                $foundIndex     =   $index;
            }
        }

        if ( $foundIndex != -1 ) {
            $this->menus    =   array_insert_before( $this->menus, $foundIndex + 1, [ $menu ] );
        }
    }

    /**
     * Add menu after a specific namespace
     * @param string namespace
     * @param object menu namespace
     * @return void
     */
    public function addAfter( $namespace, $menu )
    {
        $foundIndex     =   -1;
        foreach( $this->menus as $index => $_menu ) {
            if ( $_menu->namespace === $namespace ) {
                $foundIndex     =   $index;
            }
        }

        if ( $foundIndex != -1 ) {
            $this->menus    =   array_insert_after( $this->menus, $foundIndex, [ $menu ] );
        }
    }
}