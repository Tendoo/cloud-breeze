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
        'original'  =>  [] // when not defined, image original with is choosed
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

            $pathInfo       =   pathinfo( $file->getClientOriginalName() );
            $fileName       =   str_slug( $pathInfo[ 'filename' ], '-' );
            $fullFileName   =   $fileName . '.' . strtolower( $file->getClientOriginalExtension() );

            $year           =   $this->date->instance()->year;
            $month          =   sprintf( "%02d", $this->date->instance()->month );
            $folderPath     =   $year . '/' . $month . '/';
            
            $filePath       =   $file->storeAs( 
                'uploads', 
                $folderPath . $fullFileName
            );

            dd( $filePath );

            $media              =   new Media;
            $media->name        =   $file->getClientOriginalName();
            $media->extension   =   $file->getClientOriginalExtension();
            $media->slug        =   $fileName;
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

}