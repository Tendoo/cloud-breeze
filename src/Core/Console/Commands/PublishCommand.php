<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class PublishCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tendoo:publish {--force=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Publish all tendoo assets and config.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        /**
         * moving dist
         */
        $path   =   'vendor/tendoo/cloud-breeze/src/public/dist';
        $files  =   Storage::disk( 'cb-root' )->allFiles( $path );

        Storage::disk( 'cb-root' )->deleteDirectory( CB_PUBLIC_PATH . 'tendoo' );
        Storage::disk( 'cb-root' )->makeDirectory( CB_PUBLIC_PATH . 'tendoo' );

        foreach( $files as $file ) {
            $destination   =   substr( $file, strlen( $path ) + 1 );
            Storage::disk( 'cb-root' )->put( CB_PUBLIC_PATH . 'tendoo-public\\' . $destination, Storage::disk( 'cb-root' )->get( $file ) );
        }

        $this->info( __( 'Tendoo Assets has been published...' ) );
    }
}
