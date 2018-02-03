<?php
namespace Tendoo\App\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Artisan;

class Update
{
    /**
     * Download archive from github
     * @return void
     */
    public function download( $type )
    {
        $file   =   file_get_contents( config( 'tendoo.archive.' . $type ) );
        Storage::disk( 'temp-core' )
            ->put( 'master.zip', $file );
    }

    /**
     * Extracting downloaded archive
     * @return void
     */
    public function extract()
    {
        $fullPath   =   storage_path( 'core' );     
        $archive    =   new \ZipArchive;

        $archive->open( $fullPath . '/master.zip' );
        $archive->extractTo( $fullPath );
        $archive->close();
    }

    /**
     * Moving files
     * @return void
     */
    public function moveApp()
    {
        $this->move( Storage::disk( 'temp-core' )->allFiles( 'tendoo-master/app' ) );
    }

    /**
     * Move bootstrap
     */
    public function moveBootstrap()
    {
        $this->move( Storage::disk( 'temp-core' )->allFiles( 'tendoo-master/bootstrap' ) );
    }

    /**
     * Move Config
     * @return void
     */
    public function moveConfig()
    {
        $this->move( Storage::disk( 'temp-core' )->allFiles( 'tendoo-master/config' ) );   
    }

    /**
     * Move Database
     * @return void
     */
    public function moveDatabase()
    {
        $this->move( Storage::disk( 'temp-core' )->allFiles( 'tendoo-master/database' ) );
    }

    /**
     * Move public
     * @return void
     */
    public function movePublic()
    {
        $this->move( Storage::disk( 'temp-core' )->allFiles( 'tendoo-master/public' ) );
    }

    /**
     * Move resources
     * @return void
     */
    public function moveResources()
    {
        $this->move( Storage::disk( 'temp-core' )->allFiles( 'tendoo-master/resources' ) );
    }

    /**
     * move routes
     * @return void
     */
    public function moveRoutes()
    {
        $this->move( Storage::disk( 'temp-core' )->allFiles( 'tendoo-master/routes' ) );
    }

    /**
     * move test
     * @return void
     */
    public function moveTests()
    {
        $this->move( Storage::disk( 'temp-core' )->allFiles( 'tendoo-master/tests' ) );     
    }

    /**
     * Moving array of files
     * @return void
     */
    public function move( $files )
    {
        foreach ( $files as $file ) {
            $fileInfo   =   pathinfo( $file );
            Storage::disk( 'root' )->put( 
                substr( $file, strlen( 'tendoo-master/' ) ),
                file_get_contents( base_path() . '/storage/core/' . $file ) 
            );
        }
    }

    /**
     * Delete All directories
     * @return void
     */
    public function deleteDirectories()
    {
        foreach ([ 
            'app', 
            'bootstrap', 
            'config', 
            'database', 
            'public', 
            'resources', 
            'routes',
            'tests' 
        ] as $folder ) {
            Storage::disk( 'root' )->deleteDirectory( $folder );
        }
    }

    /**
     * Delete Symbolic link
     * @return void
     */
    public function deleteSymbolicLink()
    {
        $storageLink    =   base_path() . '/public/storage';
        if ( is_link( $storageLink ) ) {
            unlink( $storageLink );
        } else {
            rmdir( $storageLink );
        }
    }

    /**
     * Create Symbolic Link
     * @return void
     */
    public function createSymbolicLink()
    {
        Artisan::call( 'storage:link' );
    }

    /**
     * Finish Setup
     * @return void
     */
    public function finish()
    {
        $this->createSymbolicLink();
        Storage::disk( 'root' )->deleteDirectory( 'storage/core' );
        Storage::disk( 'root' )->put( 'storage/core/index.php', '<h1>Golden Slicence !</h1>' );
        Artisan::call( 'up' );
    }
}
