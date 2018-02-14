<?php
namespace Tendoo\Core\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;
use Tendoo\Core\Mail\SetupComplete;
use Tendoo\Core\Models\User;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\Permission;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\UserOptions;

class Setup
{
    /**
     * Attempt database and save db informations
     * @return void
     */
    public function saveDatabaseSettings( Request $request )
    {
        config([ 'database.connections.test' => [
            'driver'         =>      'mysql',
            'host'           =>      $request->input( 'hostname' ),
            'port'           =>      env('DB_PORT', '3306'),
            'database'       =>      $request->input( 'db_name' ),
            'username'       =>      $request->input( 'username' ),
            'password'       =>      $request->input( 'password' ),
            'unix_socket'    =>      env('DB_SOCKET', ''),
            'charset'        =>      'utf8',
            'collation'      =>      'utf8_unicode_ci',
            'prefix'         =>      $request->input( 'dbprefix' ),
            'strict'         =>      true,
            'engine'         =>      null,
        ]]);

        try {
            $DB     =   DB::connection( 'test' )->getPdo();
        } catch (\Exception $e) {

            switch( $e->getCode() ) {
                case 2002   :   
                    $message =  [
                        'name'              =>   'hostname',
                        'error'             =>  'unableToReachHost',
                        'message'           =>  __( 'Unable to reach the host' ),
                        'status'            =>  'failed'
                    ]; 
                break;
                case 1045   :   
                    $message =  [
                        'name'              =>   'username',
                        'error'             =>   'wrongUserCredentials',
                        'message'           =>  __( 'Wrong user credentials.' ),
                        'status'            =>  'failed'
                    ];
                break;
                case 1049   :   
                    $message =  [
                         'name'             => 'db_name',
                         'error'            =>  'unableToSelectDb',
                         'message'          =>  __( 'Unable to select the database.' ),
                         'status'           =>  'failed'
                    ];
                break;
                case 1044   :   
                    $message =  [
                        'name'        => 'username',
                        'error'         =>  'accessDenied',
                        'message'      =>  __( 'Access denied for this user.' ),
                        'status'       =>  'failed'
                    ];
                break;
                default     :   
                    $message =  [
                         'name'        => 'hostname',
                         'error'         => 'unexpectedError',
                         'message'      =>  sprintf( __( 'Unexpected error occured. :%s' ), $e->getCode() ),
                         'status'       =>  'failed'
                    ]; 
                break;
            }

            return $message;
        }

        DotEnvEditor::setKey( 'DB_HOST', $request->input( 'hostname' ) );
        DotEnvEditor::setKey( 'DB_DATABASE', $request->input( 'db_name' ) );
        DotEnvEditor::setKey( 'DB_USERNAME', $request->input( 'username' ) );
        DotEnvEditor::setKey( 'DB_PASSWORD', $request->input( 'password' ) );
        DotEnvEditor::setKey( 'DB_PREFIX', $request->input( 'table_prefix' ) );
        DotEnvEditor::setKey( 'DB_PORT', 3306 );
        DotEnvEditor::setKey( 'DB_CONNECTION', 'mysql' );
        DotEnvEditor::setKey( 'APP_URL', url()->to( '/' ) );
        DotenvEditor::save();

        return true;   
    }

    /**
     * Run migration
     * @param Http Request
     * @return void
     */
    public function runMigration( Request $request )
    {
        /**
         * Let's create the tables. The DB is supposed to be set
         */
        Artisan::call( 'migrate:fresh' );
        
        /**
         * We assume so far the application is installed
         * then we can launch option service
         */
        $this->options  =   app()->make( 'Tendoo\Core\Services\Options' );
        
        /**
         * Add permissions
         */
        $this->createPermissions();

        /**
         * Create Roles
         */
        $this->createRoles();
        
        $this->options->set( 'app_name', $request->input( 'app_name' ) );
        $this->options->set( 'allow_registration', 'true' );
        $this->options->set( 'db_version', config( 'tendoo.db_version' ) );
        $this->options->set( 'register_as', 1 ); // register as user;
        
        $user               =   new User;
        $user->id           =   rand(1,99);
        $user->username     =   $request->input( 'username' );
        $user->password     =   bcrypt( $request->input( 'password' ) );
        $user->email        =   $request->input( 'email' );
        $user->active       =   true; // first user active by default;
        $user->save();
        
        /**
         * The main user is the master
         */
        User::set( $user )->as( 'admin' );

        /**
         * Send Welcome email 
         * since we're polite
         */
        // Mail::to( $user->email )->send( 
        //     new SetupComplete()
        // );

        /**
         * Login auth since we would like to create some basic options
         */
        Auth::loginUsingId( $user->id );

        /**
         * define option for the admin
         */
        $this->userOptions  =   app()->make( 'Tendoo\Core\Services\UserOptions' );
        $this->userOptions->set( 'theme_class', 'dark-theme' ); 

        Auth::logout();
        
        /**
         * Set version to close setup
         */
        DotenvEditor::setKey( 'TENDOO_VERSION', TENDOO_VERSION );
        DotenvEditor::save();

        /**
         * Clear Cache
         */
        Artisan::call( 'cache:clear' );
        Artisan::call( 'config:clear' );
    }

    /**
     * Create Permission
     * @param void
     * @return void
     */
    private function createPermissions()
    {
        /**
         * All roles with basic permissions
         */
        // Crud for users and options
        foreach( [ 'users', 'profile' ] as $permission ) {
            foreach( [ 'create', 'read', 'update', 'delete' ] as $crud ) {
                // Create User
                $this->permission                   =   new Permission;
                $this->permission->name             =   ucwords( $crud ) . ' ' . ucwords( $permission );
                $this->permission->namespace        =   $crud . '.' . $permission;
                $this->permission->description      =   sprintf( __( 'Can %s %s' ), $crud, $permission );
                $this->permission->save();
            }
        }

        foreach( [ 'modules' ] as $permission ) {
            foreach( [ 'install', 'enable', 'disable', 'update', 'delete' ] as $crud ) {
                // Create User
                $this->permission                   =   new Permission;
                $this->permission->name             =   ucwords( $crud ) . ' ' . ucwords( $permission );
                $this->permission->namespace        =   $crud . '.' . $permission;
                $this->permission->description      =   sprintf( __( 'Can %s %s' ), $crud, $permission );
                $this->permission->save();
            }
        }

        // for core update
        $this->permission                   =   new Permission;
        $this->permission->name             =   __( 'Update Core' );
        $this->permission->namespace        =   'update.core';
        $this->permission->description      =   __( 'Can update core' );
        $this->permission->save();
        
        // for module migration
        $this->permission                   =   new Permission;
        $this->permission->name             =   __( 'Manage Modules' );
        $this->permission->namespace        =   'manage.modules';
        $this->permission->description      =   __( 'Can manage module : install, delete, update, migrate, enable, disable' );
        $this->permission->save();
        
        // for options
        $this->permission                   =   new Permission;
        $this->permission->name             =   __( 'Manage Options' );
        $this->permission->namespace        =   'manage.options';
        $this->permission->description      =   __( 'Can manage options : read, update' );
        $this->permission->save();
    }

    /**
     * Create Roles
     * @param void
     * @return void
     */
    private function createRoles()
    {
        // User Role
        $this->role                 =   new Role;
        $this->role->name           =   __( 'User' );
        $this->role->namespace      =   'user';
        $this->role->description    =   __( 'Basic user role.' );
        $this->role->save(); 

        // Admin Role
        $this->role                 =   new Role;
        $this->role->name           =   __( 'Supervisor' );
        $this->role->namespace      =   'supervisor';
        $this->role->description    =   __( 'Advanced role which can access to the dashboard manage settings.' );
        $this->role->save(); 

        // Master User
        $this->role                 =   new Role;
        $this->role->name           =   __( 'Administrator' );
        $this->role->namespace      =   'admin';
        $this->role->description    =   __( 'Master role which can perform all actions like create users, install/update/delete modules and much more.' );
        $this->role->save(); 

        Role::AddPermissions( 'admin', [ 
            'crud.users', 
            'crud.profile', 
            'manage.options', 
            'manage.modules'
        ]);

        Role::AddPermissions( 'supervisor', [ 
            'crud.users', 
            'manage.options', 
            'crud.profile' 
        ]);

        Role::AddPermissions( 'user', [ 
            'crud.profile' 
        ]);
    }
}