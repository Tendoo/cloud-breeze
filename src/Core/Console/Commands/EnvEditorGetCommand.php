<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;

class EnvEditorGetCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'env:get {key}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get an environment value on the .env file';

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
        $argument   =   strtoupper( $this->argument( 'key' ) );
        if ( DotEnvEditor::keyExists( $argument ) ) {
            $value      =   DotEnvEditor::getValue( $argument );
            return $this->info( empty( $value ) ? 'NULL' : '=> ' . $value );
        }
        return $this->info( sprintf( 'Unable to retreive the key : %s', $argument ) );
    }
}
