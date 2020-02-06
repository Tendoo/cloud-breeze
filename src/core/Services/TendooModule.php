<?php
namespace Tendoo\Core\Services;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Event;

class TendooModule
{
    public function __construct( $file )
    {
        $this->modules  =   app()->make( 'Tendoo\Core\Services\Modules' );
        $this->module   =   $this->modules->asFile( $file );
        $eventFiles     =   Storage::disk( 'cb-modules' )->files( ucwords( $this->module[ 'namespace' ] ) . '\Events' );
        $fieldsFiles    =   Storage::disk( 'cb-modules' )->files( ucwords( $this->module[ 'namespace' ] ) . '\Fields' );
        
        // including events files
        foreach( $eventFiles as $file ) {
            include_once( config( 'tendoo.modules_path' ) . $file );
        }

        // including events files
        foreach( $fieldsFiles as $file ) {
            include_once( config( 'tendoo.modules_path' ) . $file );
        }
    }
}