<?php
namespace Tendoo\Core\Http\Controllers\Dashboard;

use Tendoo\Core\Http\Controllers\TendooController;
use Tendoo\Core\Services\Page;
use Illuminate\Http\Request;
use Tendoo\Core\Models\Media;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;
use Tendoo\Core\Services\Date;
use Tendoo\Core\Services\MediaService;

class MediasController extends TendooController
{
    /**
     * Media Service
     * @var service
     */
    private $service;

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
        $this->extensions     =   [ 'jpeg', 'png'  ];

        /**
         * Launching the media Service
         */
        $this->mediaService  =   new MediaService([
            'extensions'   =>  $this->extensions
        ]);
    }

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
         * Text Domain
         */
        $lang   =   [
            'deleteBulk'    =>  __( 'Would you like to delete all selected entries ?' )
        ];

        /**
         * define upload url
         */
        $uploadUrl  =   route( 'dashboard.medias.upload' );
        $loadUrl    =   route( 'dashboard.medias.load' );
        
        return view( 'tendoo::components.backend.media', compact( 'tabs', 'uploadUrl', 'loadUrl', 'lang' ) );
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
        $this->mediaService->upload( $file );
    }

    /**
     * Load Media
     * @return json
     */
    public function loadMedias( $page = 1 ) 
    {
        return $this->mediaService->loadAjax( $page );
    }
}