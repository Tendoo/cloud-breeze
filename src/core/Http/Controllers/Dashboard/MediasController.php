<?php
/**
 * @todo review for api-server
 */
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Tendoo\Core\Http\Controllers\DashboardController;
use Illuminate\Http\Request;
use Tendoo\Core\Models\Media;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Tendoo\Core\Services\DateService;
use Tendoo\Core\Services\MediaService;

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
        $this->extensions     =   [ 'jpeg', 'png', 'gif', 'zip', 'mp4', 'mp3' ];

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
            'message'   =>  __( 'An error occured while uploading the file' )
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
}