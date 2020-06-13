<?php

namespace CloudBreeze\Core\Console\Commands;

use Illuminate\Console\Command;
use CloudBreeze\Core\Services\Options;
use CloudBreeze\Core\Services\OptionWrapper;
use CloudBreeze\Core\Models\Option;


class OptionGet extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'option:get {key?} {--full}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Retreive option for a specific key.';

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
        
        if( $this->option( 'full' ) ) {
            $headers         =   [
                __( 'ID' ),
                __( 'Key' ),
                __( 'Value' ),
                __( 'User' ),
                __( 'Array' ),
            ];

            $option     =   Option::where( 'key', $key )
                ->first();

            if ( $option instanceof Option ) {
                $values         =   [];
                $values[]       =   [
                    $option->id,
                    $option->key,
                    $option->value,
                    $option->user_id,
                ];

                return $this->table( $headers, $values );
            } else {
                return $this->error( 'Unable to find the option with the key : "' . $key . '"' );
            }
    
        } else {
            $option         =   $this->options->get( $key );
            return $this->line( '=> ' . $option );
        }
        
    }
}
