<?php

namespace Tendoo\App\Console\Commands;

use Illuminate\Console\Command;
use Tendoo\App\Services\Modules;

class ModulesList extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:list';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Display the current list of module available';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct( Modules $modules )
    {
        parent::__construct();
        $this->modules  =   $modules;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $header    =   [
            __( 'Name' ),
            __( 'Namespace' ),
            __( 'Version' ),
            __( 'Author' ),
            __( 'Enabled' ),
        ];

        $modulesList        =   $this->modules->get();
        $modulesTable       =  [];

        foreach( $modulesList as $module ) {
            $modulesTable[]     =   [
                $module[ 'name' ],
                $module[ 'namespace' ],
                $module[ 'version' ],
                $module[ 'author' ],
                $module[ 'enabled' ] ? __( 'Yes' ) : __( 'No' ),
            ];
        }
        
        $this->table( $header, $modulesTable );
    }
}
