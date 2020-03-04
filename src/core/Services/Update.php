<?php
namespace Tendoo\Core\Services;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Artisan;
use Tendoo\Core\Services\Options;

class Update
{
    /**
     * Download archive from github
     * @return void
     */
    public function download( $type )
    {
        $file   =   file_get_contents( config( 'tendoo.archive.' . $type ) );
        Storage::disk( 'cb-root' )
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
        $this->move( Storage::disk( 'cb-root' )->allFiles( 'tendoo-master/app' ) );
    }

    /**
     * Move bootstrap
     */
    public function moveBootstrap()
    {
        $this->move( Storage::disk( 'cb-root' )->allFiles( 'tendoo-master/bootstrap' ) );
    }

    /**
     * Move Config
     * @return void
     */
    public function moveConfig()
    {
        $this->move( Storage::disk( 'cb-root' )->allFiles( 'tendoo-master/config' ) );   
    }

    /**
     * Move Database
     * @return void
     */
    public function moveDatabase()
    {
        $this->move( Storage::disk( 'cb-root' )->allFiles( 'tendoo-master/database' ) );
    }

    /**
     * Move public
     * @return void
     */
    public function movePublic()
    {
        $this->move( Storage::disk( 'cb-root' )->allFiles( 'tendoo-master/public' ) );
    }

    /**
     * Move resources
     * @return void
     */
    public function moveResources()
    {
        $this->move( Storage::disk( 'cb-root' )->allFiles( 'tendoo-master/resources' ) );
    }

    /**
     * move routes
     * @return void
     */
    public function moveRoutes()
    {
        $this->move( Storage::disk( 'cb-root' )->allFiles( 'tendoo-master/routes' ) );
    }

    /**
     * move test
     * @return void
     */
    public function moveTests()
    {
        $this->move( Storage::disk( 'cb-root' )->allFiles( 'tendoo-master/tests' ) );     
    }

    /**
     * Moving array of files
     * @return void
     */
    public function move( $files )
    {
        foreach ( $files as $file ) {
            $fileInfo   =   pathinfo( $file );
            Storage::disk( 'cb-root' )->put( 
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
            Storage::disk( 'cb-root' )->deleteDirectory( $folder );
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
        Storage::disk( 'cb-root' )->deleteDirectory( 'storage/core' );
        Storage::disk( 'cb-root' )->put( 'storage/core/index.php', '<h1>Golden Slicence !</h1>' );
        Artisan::call( 'up' );
    }

    /**
     * Get DB Update files
     * @return array of files
     */
    public function getUpdates()
    {
        $options            =   app()->make( Options::class );
        $db_version         =   $options->get( 'db_version' );
        $file_db_version    =   config( 'tendoo.db_version' );
        $files              =   [];

        foreach( Storage::disk( 'cb-root' )->allDirectories( CB_DBUPDATES_PATH ) as $dir ) {
            if ( version_compare( $dir, $db_version, '>' ) && version_compare( $dir, $file_db_version, '<=' ) ) {
                $files    =   array_merge( 
                    Storage::disk( 'cb-root' )->allFiles( CB_DBUPDATES_PATH . $dir ),
                    $files
                );
            }
        }

        return array_reverse( $files );
    }
}
