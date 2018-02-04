<?php

namespace Tendoo\Cms\App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Tendoo\Cms\App\Services\Update;

class RefreshCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:dev';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refresh the current project by pulling the latest development changes.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct( Update $update )
    {
        parent::__construct();
        $this->update   =   $update;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->actions      =   [ 
            'enableMaintenance', 
            'downloadArchive', 
            'extractArchive',
            'deleteAllDirectories',
            [ $this->update, 'moveApp' ],
            [ $this->update, 'moveBootstrap' ],
            [ $this->update, 'moveConfig' ],
            [ $this->update, 'moveConfig' ],
            [ $this->update, 'moveDatabase' ],
            [ $this->update, 'movePublic' ],
            [ $this->update, 'moveResources' ],
            [ $this->update, 'moveRoutes' ],
            [ $this->update, 'moveTests' ],
            'finishSetup'
        ];

        $this->perform();
    }

    /**
     * Perform an action
     * @return void
     */
    public function perform( $index = 0 )
    {
        if ( $index == 0 ) {
            $this->progress     =   $this->output->createProgressBar( count( $this->actions ) );
        }

        if ( @$this->actions[ $index ] ) {
            if ( is_array( $this->actions[ $index ] ) ) {
                call_user_func( $this->actions[ $index ] );
                $index++;
                $this->progress->advance();
                $this->perform( $index );
            } else {
                $actionName     =   $this->actions[ $index ];
                $this->$actionName( function() use ( $index ) {
                    $index++;
                    $this->progress->advance();
                    $this->perform( $index );
                });
            }
        } else {
            $this->progress->finish();
        }
    }

    /**
     * Download Archive from Github
     * @param callable callback
     */
    public function downloadArchive( $callback ) {
        $this->update->download( 'master' );
        $callback();
    }

    /**
     * Extract active
     * @param callable callback
     */
    public function extractArchive( $callback ) {
        $this->update->extract();
        $callback();
    } 

    /**
     * Enable Maintenance
     * @param callback
     * @return void
     */
    public function enableMaintenance( $callback )
    {
        Artisan::call( 'down' );
        $this->update->deleteSymbolicLink();
        $callback();
    }

    /**
     * Move Files
     * @param callback
     * @return void
     */
    public function moveFiles( $callback )
    {
        $this->update->moveApp();        
        $callback();
    }

    /**
     * Delete All directory
     * @return void
     */
    public function deleteAllDirectories( $callback )
    {
        $this->update->deleteDirectories();
        $callback();
    }

    /**
     * Finish Setup
     * @return void
     */
    public function finishSetup( $callback )
    {
        $this->update->finish();
        $callback();
    }
}
