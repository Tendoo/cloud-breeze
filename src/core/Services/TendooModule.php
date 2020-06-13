<?php
namespace CloudBreeze\Core\Services;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Event;

class TendooModule
{
    public function __construct( $file )
    {
        $this->modules  =   app()->make( 'CloudBreeze\Core\Services\Modules' );
        $this->module   =   $this->modules->asFile( $file );
        $eventFiles     =   Storage::disk( 'cb-root' )->files( CB_MODULES_PATH . ucwords( $this->module[ 'namespace' ] ) . '\Events' );
        $fieldsFiles    =   Storage::disk( 'cb-root' )->files( CB_MODULES_PATH . ucwords( $this->module[ 'namespace' ] ) . '\Fields' );
        
        // including events files
        foreach( $eventFiles as $file ) {
            include_once( base_path() . CB_S . $file );
        }

        // including events files
        foreach( $fieldsFiles as $file ) {
            include_once( base_path() . CB_S . $file );
        }
    }
}