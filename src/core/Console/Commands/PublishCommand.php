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
        if ( $this->option( 'asset' ) ) {
            /**
             * Can only publis file which exists
             */
            if ( Storage::disk( 'tendoo-assets' )->exists( $this->option( 'asset' ) ) ) {
                $file   =   Storage::disk( 'tendoo-assets' )->get( $this->option( 'asset' ) );
                Storage::disk( 'laravel-public' )->put( 'tendoo/' . $this->option( 'asset' ), $file );

                return $this->info( sprintf( __( 'The file : %s has been published' ), $this->option( 'asset' ) ) );
            } else {

                return $this->error( sprintf( __( 'Unable to located the file : %s' ), $this->option( 'asset' ) ) );
            }
        } else {
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
}
