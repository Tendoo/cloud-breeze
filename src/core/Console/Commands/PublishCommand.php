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
    protected $signature = 'tendoo:publish';

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
         * moving assets
         */
        $files  =   Storage::disk( 'tendoo-assets' )->allFiles();

        foreach( $files as $file ) {
            Storage::disk( 'laravel-public' )->put( 'tendoo/' . $file, Storage::disk( 'tendoo-assets' )->get( $file ) );
        }

        /**
         * moving config
         */
        $files  =   Storage::disk( 'tendoo-config' )->allFiles();
        
        foreach( $files as $file ) {
            Storage::disk( 'config' )->put( $file, Storage::disk( 'tendoo-config' )->get( $file ) );
        }
    }
}
