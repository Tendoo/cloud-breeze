<?php
namespace Tendoo\Core\Services\Helpers;

trait ArrayHelper {
    /**
     * Return Odds
     * @param array 
     * @param string type
     * @return array
     */
    static function arrayDivide( array $array, string $type = '' )
    {
        if( $array ) {
            $result     =   [
                'odd'   =>  [],
                'even'  =>  []
            ];

            foreach ($array as $k => $v) {
                if ($k % 2 == 0) {
                    $result[ 'even' ][] = $v;
                }
                else {
                    $result[ 'odd' ][] = $v;
                }
            }

            if( ! empty( $type ) ) {
                return $result[ $type ];
            }
            return $result;
        }
        return [];
    }

    /**
     * Collection to options
     * @param array collection of Eloquent results
     * @return array of options
     */
    static function toOptions( $collections, $config )
    {
        $result         =   [];
        if ( $collections ) {
            foreach ( $collections as $collection ) {
                $id     =   $config[0];
                $name   =   $config[1];
                $result[ $collection->$id ]   =  $collection->$name; 
            }
            return $result;
        }
        return [];
    }

    /**
     * to JS options
     * @param array
     * @return an array of options
     */
    static function toJsOptions( $collections, $config ) 
    {
        $result         =   [];
        if ( $collections ) {
            foreach ( $collections as $collection ) {
                $id     =   $config[0];
                $name   =   $config[1];
                $result[]   =  [
                    'label'     =>  $collection->$name,
                    'value'     =>  $collection->$id
                ];
            }
            return $result;
        }
        return [];
    }

    /**
     * Key Value To Js Options
     * @param array
     * @return array of options
     */
    static function kvToJsOptions( $array )
    {
        $final  =   [];
        foreach( $array as $value => $label ) {
            $final[]    =   compact( 'label', 'value' );
        }
        return $final;
    }

    /**
     * True or False Option Select
     * @return array of true/false 
     */
    static function booleanToggle() 
    {
        return [
            [
                'label' =>  __( 'Yes' ),
                'value' =>  true
            ], [
                'label' =>  __( 'No' ),
                'value' =>  false
            ]
        ];
    }
}