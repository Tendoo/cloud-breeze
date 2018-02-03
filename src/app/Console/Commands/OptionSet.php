<?php

namespace Tendoo\App\Console\Commands;

use Illuminate\Console\Command;
use Tendoo\App\Services\Options;

class OptionSet extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'option:set {key} {--v=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add a new option on the options table.';

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
        $this->options  =   app()->make( Options::class );
        $key            =   $this->argument( 'key' );
        $value          =   $this->option( 'v' );
        if ( empty( $value ) ) {
            return $this->error( 'value must be defined !' );
        }
        
        $this->options->set( $key, $value );
        return $this->info( 'The option has been set !' );
    }
}
