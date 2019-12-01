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
        $files  =   Storage::disk( 'tendoo-dist' )->allFiles();

        Storage::disk( 'laravel-public' )->deleteDirectory( 'tendoo' );
        Storage::disk( 'laravel-public' )->makeDirectory( 'tendoo' );

        foreach( $files as $file ) {
            Storage::disk( 'laravel-public' )->put( 'tendoo-public/' . $file, Storage::disk( 'tendoo-dist' )->get( $file ) );
        }


        /**
         * moving config
         */
        $files  =   Storage::disk( 'tendoo-config' )->allFiles();
        
        foreach( $files as $file ) {
            Storage::disk( 'config' )->put( $file, Storage::disk( 'tendoo-config' )->get( $file ) );
        }

        $this->info( __( 'Tendoo Assets has been published...' ) );
    }
}
