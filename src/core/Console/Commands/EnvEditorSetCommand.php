<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;

class EnvEditorSetCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'env:set {key} {--v=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set an environment value on the .env file';

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
        DotEnvEditor::setKey( strtoupper( $this->argument( 'key' ) ), $this->option( 'v' ) );
        DotEnvEditor::save();
        $this->info( 'The environment value has been set !' );
    }
}
