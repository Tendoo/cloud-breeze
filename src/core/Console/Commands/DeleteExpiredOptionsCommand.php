<?php

namespace CloudBreeze\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use CloudBreeze\Core\Services\Options;
use CloudBreeze\Core\Services\DateService;
use Carbon\Carbon;

class DeleteExpiredOptionsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'option:purge';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete all options which has expired.';

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
        $this->options      =   app()->make( Options::class );
        $this->dateTime     =   app()->make( DateService::class );
        $optionCount        =   0;

        /**
         * Make sure to filter the option according to 
         * the expire_on field
         */
        $ExpirableOptions      =   $this->options->option()->get()->map( function( $option ) {
            return $option->expire_on !== null ? $option : false;
        })->reject( function( $option ) {
            return empty( $option );
        });

        /**
         * If the option expire on field are less than the actual
         * server date time, it's deleted
         */
        collect( $ExpirableOptions )->map( function( $option ) use ( &$optionCount ) {
            if ( $this->dateTime->gt( Carbon::parse( $option->expire_on ) ) ) {
                $option->delete();
                $optionCount++;
            }
        });

        return $this->info( sprintf( __( '%s option(s) has been purged !' ), $optionCount ) );
    }
}
