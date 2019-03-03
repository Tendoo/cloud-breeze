<?php

namespace Tendoo\Core\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Tendoo\Core\Services\Modules;

class ModuleCrudGeneratorCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'module:crud {namespace}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate a crud resource for a module model';

    /**
     * Crud Details
     */
    private $crudDetails    =   [];

    /**
     * Current Module
     */
    private $module;

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
        $this->module     =   $this->modules->get( $this->argument( 'namespace' ) );
        
        /**
         * If the module exits
         */
        if ( $this->module ) {
            return $this->askResourceName();
        } 
        return $this->error( __( 'Unable to located the module.' ) );
    }

    /**
     * Resource Name
     * @return void
     */
    public function askResourceName()
    {
        $name   =   $this->ask( __( 'What is the CRUD single resource name ? [Q] to quit.' ) );
        if ( $name !== 'Q' && ! empty( $name ) ) {
            $this->crudDetails[ 'resource_name' ]    =   $name;
            return $this->askTableName();
        } else if( $name == 'Q' ) {
            return;
        }
        $this->error( __( 'Please provide a valid value' ) );
        return $this->askResourceName();
    }

    /**
     * Table Name
     * @return void
     */
    public function askTableName()
    {
        $name   =   $this->ask( __( 'Which table name should be used ? [Q] to quit.' ) );
        if ( $name !== 'Q' && ! empty( $name ) ) {
            $this->crudDetails[ 'table_name' ]    =   $name;
            return $this->askMainRoute();
        } else if( $name == 'Q' ) {
            return;
        }
        $this->error( __( 'Please provide a valid value' ) );
        return $this->askTableName();
    }

    /**
     * Crud Name
     * @return void
     */
    public function askMainRoute()
    {
        $name   =   $this->ask( __( 'What is the main route name to the resource ? [Q] to quit.' ) );
        if ( $name !== 'Q' && ! empty( $name ) ) {
            $this->crudDetails[ 'route_name' ]    =   $name;
            return $this->askNamespace();
        } else if( $name == 'Q' ) {
            return;
        }
        $this->error( __( 'Please provide a valid value' ) );
        return $this->askMainRoute();
    }

    /**
     * Crud Name
     * @return void
     */
    public function askNamespace()
    {
        $name   =   $this->ask( __( 'What is the namespace of the CRUD Resource. eg: system.users ? [Q] to quit.' ) );
        if ( $name !== 'Q' && ! empty( $name ) ) {
            $this->crudDetails[ 'namespace' ]    =   $name;
            return $this->askFullModelName();
        } else if( $name == 'Q' ) {
            return;
        }
        $this->error( __( 'Please provide a valid value' ) );
        return $this->askNamespace();
    }

    /**
     * Crud Name
     * @return void
     */
    public function askFullModelName()
    {
        $name   =   $this->ask( __( 'What is the full model name. eg: Modules\Foo\Bar\Models\Order ? [Q] to quit.' ) );
        if ( $name !== 'Q' && ! empty( $name ) ) {
            $this->crudDetails[ 'model_name' ]    =   $name;
            return $this->askRelation();
        } else if( $name == 'Q' ) {
            return;
        }
        $this->error( __( 'Please provide a valid value' ) );
        return $this->askFullModelName();
    }

    /**
     * Crud Name
     * @return void
     */
    public function askRelation( $fresh = true )
    {
        if ( $fresh ) {
            $message    =   __( 'If your CRUD resource has a relation, mention it as follow "foreign_table, foreign_key, local_key" ? [S] to skip, [Q] to quit.' );
        } else {
            $message    =   __( 'Add a new relation ? Mention it as follow "foreign_table, foreign_key, local_key" ? [S] to skip, [Q] to quit.' );
        }

        $name   =   $this->ask( $message );
        if ( $name !== 'Q' && $name != 'S' && ! empty( $name ) ) {
            if ( @$this->crudDetails[ 'relations' ] == null ) {
                $this->crudDetails[ 'relations' ]   =   [];
            }
            $parameters     =   explode( ',', $name );

            if ( count( $parameters ) != 3 ) {
                $this->error( __( 'No enough paramters provided for the relation.' ) );
                return $this->askRelation(false);
            }

            $this->crudDetails[ 'relations' ][]     =   [
                trim( $parameters[0] ), 
                trim( $parameters[0] ) . '.' . trim( $parameters[1] ),
                $this->crudDetails[ 'table_name' ] . '.' . trim( $parameters[2] )
            ];

            return $this->askRelation(false);
        } else if ( $name === 'S' ) {
            return $this->askFillable();
        } else if( $name == 'Q' ) {
            return;
        }
        $this->error( __( 'Please provide a valid value' ) );
        return $this->askRelation();
    }

    /**
     * Crud Name
     * @return void
     */
    public function askFillable()
    {
        $name   =   $this->ask( __( 'What are the fillable column on the table: eg: username, email, password ? [S] to skip, [Q] to quit.' ) );
        if ( $name !== 'Q' && ! empty( $name ) && $name != 'S' ) {
            $this->crudDetails[ 'fillable' ]    =   $name;
            return $this->generateCrud();
        } else if( $name == 'S' ) {
            $this->crudDetails[ 'fillable' ]    =   '';
            return $this->generateCrud();
        } else if( $name == 'Q' ) {
            return;
        }
        $this->error( __( 'Please provide a valid value' ) );
        return $this->askFillable();
    }

    /**
     * Crud Name
     * @return void
     */
    public function generateCrud()
    {
        $this->crudDetails[ 'module' ]     =   $this->module;
        Storage::disk( 'modules' )->put( 
            $this->module[ 'namespace' ] . DIRECTORY_SEPARATOR . 'Crud' . DIRECTORY_SEPARATOR . ucwords( Str::camel( $this->crudDetails[ 'resource_name' ] ) ) . '.php', 
            view( 'tendoo::generate.modules.crud', $this->crudDetails )
        );

        return $this->info( sprintf( __( 'The CRUD resource has been published for %s' ), $this->module[ 'name' ] ) );
    }
}
