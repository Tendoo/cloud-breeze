<?php
/**
 * @todo review for api-server
 */
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Tendoo\Core\Exceptions\NotFoundException;
use Tendoo\Core\Models\Media;
use Tendoo\Core\Services\DateService;
use Tendoo\Core\Services\MediaService;
use Tendoo\Core\Http\Controllers\DashboardController;

class MediasController extends DashboardController
{
    /**
     * Media Service
     * @var service
     */
    private $service;

    /**
     * Media Service
     * should be loaded after the middleware has runned
     */
    protected $mediaService;

    /**
     * Constructor
     * 
     */
    public function __construct()
    {
        parent::__construct();
        
        /**
         * Supported file extension
         * @var array<String>
         */
        $this->extensions     =   [ 'jpeg', 'png', 'gif', 'zip', 'mp4', 'mp3', 'jpg' ];

        $this->middleware( function( $request, $next ) {
            
            /**
             * Launching the media Service
             */
            $this->mediaService  =   new MediaService([
                'extensions'   =>  $this->extensions
            ]);

            return $next( $request );
        });
    }

    /**
     * handle uploaded file
     * @param void
     */
    public function upload( Request $request )
    {
        /**
         * uploading a file
         */
        $file = $request->file('file');
        $response   =   $this->mediaService->upload( $file );

        if( $response !== false ) {
            return [
                'status'    =>  'success',
                'message'   =>  __( 'The file has been uploaded' ),
                'size'      =>  $response
            ];
        }

        return response()->json([
            'status'    =>  'failed',
            'message'   =>  __( 'Unable to proceed to the upload. The file seems to have an unsupported extension.' )
        ], 403 );
    }

    /**
     * Load Media
     * @return json
     */
    public function loadMedias( $page = 1 ) 
    {
        return $this->mediaService->loadAjax( $page );
    }

    /**
     * delete media
     * @param int media id
     * @return json response
     */
    public function delete( $media ) 
    {
        if ( $response = $this->mediaService->deleteMedia( $media ) ) {
            return $response;
        } else {
            return response([
                'status'    =>  'failed',
                'message'   =>  __( 'An error has occured.' )
            ], 403 );
        }
    }

    /**
     * delete bulk medias
     * @param Request form
     * @return json
     */
    public function deleteBulkMedias( Request $request )
    {
        if ( $request->input( 'medias' ) ) {
            $response           =   [
                'success'       =>  [],
                'failed'        =>  []
            ];

            foreach( $request->input( 'medias' ) as $media ) {
                
                $result   =   $this->mediaService->deleteMedia( $media[ 'id' ] );

                switch( $result[ 'status' ] ) {
                    case 'success' :
                        $response[ 'success' ][]    =   $media;
                    break;
                    default:
                        $response[ 'failed' ][]    =   $media;
                    break;
                }
            }

            return [
                'status'    =>  'success',
                'message'   =>  sprintf( __( '%s medias has been deleted, %s has not been deleted.' ), count( $response[ 'success' ] ), count( $response[ 'failed' ]) ),
                'data'      =>  $response
            ];
        }
    }

    /**
     * Delete bulk items
     * @param Request
     * @return json
     */
    public function bulkDelete( Request $request )
    {
        $bulkResponse   =   [];

        foreach( $request->input( 'indexes' ) as $media ) {
            $bulkResponse[]     =   $this->delete( $media[ 'id' ] );
        }

        return [
            'status'    =>  'success',
            'bulk'      =>  $bulkResponse,
            'message'   =>  __( 'Selected entries has been deleted.' )
        ];
    }

    /**
     * get a single media
     * @param int media id
     * @return Array|NotFoundException
     */
    public function getMedia( $id )
    {
        $media  =   $this->mediaService->find( $id );
        if ( $media ) {
            return $media;
        }

        throw new NotFoundException([
            'message'   =>  __( 'Unable to find the media using the provided id' )
        ]);
    }

    /**
     * allow a dowload of a specific 
     * media
     * @param int of the media to download
     * @return Stream
     */
    public function downloadMedia( $id ) 
    {
        $medias     =   $this->mediaService->getMediaPath( $id );
        if( $medias ) {
            return $medias;
        }
    }
}