<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Tendoo\Core\Services\Options;

class DeleteExpiredOptions extends Command
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
        $this->options  =   app()->make( Options::class );
        
    }
}
