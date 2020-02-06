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
    protected $signature = 'tendoo:publish {--asset=}';

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
        $files  =   Storage::disk( 'cb-dist' )->allFiles();

        Storage::disk( 'cb-public' )->deleteDirectory( 'tendoo' );
        Storage::disk( 'cb-public' )->makeDirectory( 'tendoo' );

        foreach( $files as $file ) {
            Storage::disk( 'cb-public' )->put( 'tendoo-public/' . $file, Storage::disk( 'cb-dist' )->get( $file ) );
        }


        /**
         * moving config
         */
        $files  =   Storage::disk( 'cb-config' )->allFiles();
        
        foreach( $files as $file ) {
            Storage::disk( 'cb-laravel-config' )->put( $file, Storage::disk( 'cb-config' )->get( $file ) );
        }

        $this->info( __( 'Tendoo Assets has been published...' ) );
    }
}
