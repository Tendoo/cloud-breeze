<?php
namespace Tendoo\Core\Services;

use Carbon\Carbon;
use Tendoo\Core\Services\Date;
use Tendoo\Core\Models\Media;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Gumlet\ImageResize;

class MediaService
{
    /**
     * define sizes
     * @var array
     */
    private $sizes      =   [
        'thumb'     =>  [ 280, 181 ],
    ];

    /**
     * Supported File Extensions
     * @var array<String>
     */
    private $extensions    =   [];

    public function __construct( $data ) 
    {
        extract( $data );
        $this->extensions   =   $extensions;
        $this->date         =   app()->make( Date::class );
    }

    /**
     * Upload a file
     * @param object File
     * @return boolean
     */
    public function upload( $file )
    {
        /**
         * getting file extension
         */
        $extension  =   $file->extension();
        
        if ( in_array( $extension, $this->extensions ) ) {

            $uploadedInfo   =   pathinfo( $file->getClientOriginalName() );
            $fileName       =   str_slug( $uploadedInfo[ 'filename' ], '-' );
            $fullFileName   =   $fileName . '.' . strtolower( $file->getClientOriginalExtension() );

            $year           =   $this->date->instance()->year;
            $month          =   sprintf( "%02d", $this->date->instance()->month );
            $folderPath     =   $year . DIRECTORY_SEPARATOR . $month . DIRECTORY_SEPARATOR;
            
            $filePath       =   Storage::disk( 'public' )->putFileAs( 
                '', 
                $file,
                $folderPath . $fullFileName
            );

            /**
             * Resizing the images
             */
            $fullPath           =   storage_path( 'app' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . $filePath );
            $realPathInfo       =   pathinfo( $fullPath );

            foreach( $this->sizes as $resizeName => $size ) {
                $image      =   new ImageResize( $fullPath );
                $image->resizeToBestFit( $size[0], $size[1] );
                $image->save( $realPathInfo[ 'dirname' ] . DIRECTORY_SEPARATOR . $fileName . '-' . $resizeName . '.' . $extension );
            }

            $media              =   new Media;
            $media->name        =   $file->getClientOriginalName();
            $media->extension   =   $file->getClientOriginalExtension();
            $media->slug        =   Storage::disk( 'public' )->url( $year . '/' . $month . '/' . $fileName );
            $media->user_id     =   Auth::id();
            $media->save();

            return true;
        }
        
        return false;
    }

    /**
     * get image
     * @param string file name
     * @param string size
     * @return mixed
     */
    public function get( $filename, $size = 'original' )
    {
        if ( in_array( $size, array_keys( $this->sizes ) ) ) {
            $file   =   Media::where( 'slug', $filename )->first();

        }
        return false;
    }

    /**
     * Load Medias
     * @param media int
     * @return void
     */
    public function loadAjax()
    {
        $medias     =   Media::paginate(20);
        
        /**
         * populating the media
         */
        foreach( $medias as &$media ) {
            foreach( $this->sizes as $name => $sizes ) {
                $media->sizes    =   new \stdClass;
                $media->sizes->$name    =   $media->slug . '-' . $name . '.' . $media->extension;
            }
        }

        return $medias;
    }
}