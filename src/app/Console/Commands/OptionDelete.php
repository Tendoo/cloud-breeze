<?php

namespace Tendoo\App\Console\Commands;

use Illuminate\Console\Command;
use Tendoo\App\Services\Options;

class OptionDelete extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'option:delete {key}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete an option from the option table.';

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
        $this->options->delete( $key );
        return $this->info( 'The option has been deleted !' );
    }
}
