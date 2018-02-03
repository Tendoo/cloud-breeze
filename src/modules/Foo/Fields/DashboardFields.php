<?php
namespace Modules\Foo\Fields;

class DashboardFields
{
    /**
     * General Settings
     * @return array of object<fields>
     */
    public function generalSettings()
    {
        $options            =   app()->make( 'App\Services\Options' );

        $text               =   new \stdClass;
        $text->name         =   'test_field';
        $text->label        =   __( 'Some Text' );
        $text->type         =   'text';
        $text->placeholder  =   __( 'Some Text' );
        $text->value        =   $options->get( 'test_field' );
        $text->validation   =   'required|min:6';

        $textarea               =   new \stdClass;
        $textarea->name         =   'textarea';
        $textarea->label        =   __( 'Text Area' );
        $textarea->type         =   'textarea';
        $textarea->placeholder  =   __( 'This is my test areas' );
        $textarea->value        =   $options->get( 'textarea' );

        $select               =   new \stdClass;
        $select->name         =   'select';
        $select->label        =   __( 'Text Area' );
        $select->type         =   'md-select';
        $select->options        =   [
            'foo'   =>  __( 'Foo Option' ),
            'bar'   =>  __( 'Bar Option' ),
            'rab'   =>  __( 'Rab Option' ),
            'off'   =>  __( 'Off Option' ),
        ];
        $select->placeholder  =   __( 'This is my test areas' );
        $select->value        =   $options->get( 'select' );

        return [ $text, $textarea, $select ];
    }
}