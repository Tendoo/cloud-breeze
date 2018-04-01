<?php
namespace Tendoo\Core\Http\Controllers\dashboard;

use Tendoo\Core\Http\Controllers\TendooController;
use Tendoo\Core\Services\Page;
use Illuminate\Http\Request;
use tendoo\Core\Models\Media;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Tendoo\Core\Services\Date;

class MediasController extends TendooController
{
    /**
     * list all media on the system
     */
    public function list()
    {
        Page::setTitle( 'Media' );

        /**
         * Define used tabs
         */
        $tabs   =   [
            [
                'namespace' =>  'list',
                'text'      =>  __( 'Media' ),
                'active'    =>  true
            ],
            [
                'namespace' =>  'upload',
                'text'      =>  __( 'Upload' ),
                'active'    =>  false
            ]
        ];

        /**
         * define upload url
         */
        $uploadUrl  =   route( 'dashboard.medias.upload' );
        
        return view( 'tendoo::components.backend.media', compact( 'tabs', 'uploadUrl' ) );
    }

    /**
     * handle uploaded file
     * @param void
     */
    public function upload( Request $request )
    {
        $file = $request->file('file');

        /**
         * Differents resize sizes
         */
        $sizes  =   [
            'thumb'     =>  [ 280, 181 ]
        ];

        /**
         * getting file extension
         */
        $extension  =   $request->file->extension();
        
        if ( in_array( $extension, [ 'jpeg', 'png' ] ) ) {

            $pathInfo   =   pathinfo( $request->file->getClientOriginalName() );
            $filename   =   str_slug( $pathInfo[ 'filename' ], '-' ) . '.' . strtolower( $request->file->getClientOriginalExtension() );

            $request->file->storeAs( 
                'uploads', 
                $filename
            );

            dd( Storage::disk( 'local' )->url( 'uploads/' . $filename ) );

            $media              =   new Media;
            $media->name        =   $request->file->getClientOriginalName();
            $media->extension   =   $request->file->getClientOriginalExtension();
            $media->size        =   $request->file->getClientSize();
            $media->url         =   Storage::disk( 'local' )->url( 'uploads/' . $filename );
            $media->user_id     =   Auth::id();
            $media->save();
        }
    }
}