<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\OptionWrapper;

class OptionGet extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'option:get {key?}';

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
        
        $headers         =   [
            __( 'ID' ),
            __( 'Parent' ),
            __( 'Key' ),
            __( 'Value' ),
            __( 'User' ),
            __( 'Array' ),
        ];

        $values         =   [];
        $key            =   $this->argument( 'key' );
        $options        =   $this->options->get( $key );
        foreach( $options as $option ) {
            
            if ( ! $option instanceof OptionWrapper ) {
                $values[]   =   [
                    $option[ 'id' ],
                    __( 'N/A' ),
                    $option[ 'key' ],
                    $option[ 'value' ],
                    $option[ 'user_id' ],
                    ( bool ) intval( $option[ 'array' ] ) ? __( 'Yes' ) : __( 'No' ),
                ];
            } else {
                $subOptions     =   $option->get();
                foreach ( $subOptions as $sub ) {
                    $values[]   =   [
                        $sub[ 'id' ],
                        $option->getPrimaryKey(),
                        $sub[ 'key' ],
                        $sub[ 'value' ],
                        $sub[ 'user_id' ],
                        ( bool ) intval( $sub[ 'array' ] ) ? __( 'Yes' ) : __( 'No' ),
                    ];
                }
            }
        }

        return $this->table( $headers, $values );
    }
}
