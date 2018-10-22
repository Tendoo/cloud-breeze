<?php

namespace Tendoo\Core\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Blade;
use Illuminate\Encryption\Encrypter;
use Illuminate\Console\Scheduling\Schedule;
use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\UserOptions;
use Tendoo\Core\Services\DateService;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Services\AuthService;
use Tendoo\Core\Services\MediaService;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Models\Permission;
use Jackiedo\DotenvEditor\Facades\DotenvEditor;


class TendooAppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::withoutDoubleEncoding();

        /**
         * We might need to publish views as well
         */
        if ( ! is_dir( base_path() . '/public/tendoo' ) ) {
            Artisan::call( 'vendor:publish', [
                '--tag' => 'tendoo-assets',
            ]);

            Artisan::call( 'vendor:publish', [
                '--tag' => 'tendoo-config',
            ]);
        }

        /**
         * Let's check if the .env exists 
         * if not. Let's create it. since it's needed
         */
        if ( ! Storage::disk( 'root' )->exists( '.env' ) ) {
            Storage::disk( 'root' )->put( '.env', view( 'tendoo::generate.env' ) );            
            return redirect( url()->current() )->send();
        }
        
        Schema::defaultStringLength(191);

        /**
         * If app key is not defined, we can define it automatically and redirect 
         * to the same page
         */
        if ( DotenvEditor::keyExists( 'APP_KEY' ) ) {
            if ( empty( DotenvEditor::getValue( 'APP_KEY' ) ) ) {
                DotEnvEditor::setKey( 'APP_KEY', 'base64:' . base64_encode(
                    Encrypter::generateKey( config( 'app.cipher' ) )
                ) );
                DotEnvEditor::save();
            }
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // save Singleton for options
        $this->app->singleton( Options::class, function(){
            return new Options;
        });

        // save Singleton for options
        $this->app->singleton( DateService::class, function(){
            $options    =   app()->make( Options::class );
            $timeZone   =   $options->get( 'app_timezone', 'Europe/London' );
            return new DateService( $timeZone );
        });

        // save Singleton for options
        $this->app->singleton( AuthService::class, function(){
            return new AuthService();
        });
        
        // save Singleton for options
        $this->app->singleton( UserOptions::class, function(){
            return new UserOptions( Auth::id() );
        });

        // save Singleton for options
        $this->app->singleton( Users::class, function(){
            return new Users( 
                new Role,
                new User,
                new Permission
            );
        });

        // provide media manager
        $this->app->singleton( MediaService::class, function() {
            return new MediaService([
                'extensions'    =>  [ 'jpg', 'jpeg', 'png', 'gif', 'zip', 'docx', 'txt' ]
            ]);
        });

        /**
         * Perform these modification only if the application
         * has been installed
         */
        if ( Helper::AppIsInstalled() ) {
            /**
             * Let's register the option of the mail
             * according to what is set on the dashboard
             */
            $options        =   $this->app->make( Options::class );
            $mailDriver     =   $options->get( 'app_mail_driver' );
            
            if( $mailDriver !== 'didsable' ) {
                switch( $mailDriver ) {
                    case 'smtp':
                        $config     =   [
                            'driver'        =>  $mailDriver,
                            'host'          =>  $options->get( 'app_mail_host' ),
                            'port'          =>  $options->get( 'app_mail_port' ),
                            'from'          =>  [
                                'email'     =>  $options->get( 'app_mail_from_address' ),
                                'name'      =>  $options->get( 'app_mail_from_name' )
                            ],
                            'username'      =>  $options->get( 'app_mail_smtp_username' ),
                            'password'      =>  $options->get( 'app_mail_smtp_password' ),
                            'encryption'    =>  $options->get( 'app_mail_encryption' )
                        ];
                    break;
                    case 'mail':
                        $config     =   [
                            'driver'    =>  $mailDriver,
                        ];
                    break;
                    case 'mandrill':
                    break;
                    case 'mailgun':
    
                    $config     =   [
                        'driver'        =>  $mailDriver,
                        'host'          =>  $options->get( 'app_mail_host' ),
                        'port'          =>  $options->get( 'app_mail_port' ),
                        'from'          =>  [
                            'email'     =>  $options->get( 'app_mail_from_address' ),
                            'name'      =>  $options->get( 'app_mail_from_name' )
                        ],
                        'username'      =>  $options->get( 'app_mail_smtp_username' ),
                        'password'      =>  $options->get( 'app_mail_smtp_password' ),
                        'encryption'    =>  $options->get( 'app_mail_encryption' ),
                    ];
    
                    // dd( config( 'services' ) );
                    
                    config()->set( 'services.mailgun', [
                        'endpoint'  =>  'api.mailgun.net',
                        'domain'    =>  $options->get( 'app_mail_mailgun_domain' ),
                        'secret'    =>  $options->get( 'app_mail_mailgun_secret' ),
                    ]);
                    
                    // dd( config( 'services' ) );
    
                    break;
                    case 'sendmail':
                    $config     =   [
                        'driver'    =>  $mailDriver,
                        'host'      =>  $options->get( 'app_mail_host' ),
                        'port'      =>  $options->get( 'app_mail_port' ),
                        'from'      =>  [
                            'email' =>  $options->get( 'app_mail_from_address' ),
                            'name'  =>  $options->get( 'app_mail_from_name' )
                        ],
                        'username'  =>  $options->get( 'app_mail_smtp_username' ),
                        'password'  =>  $options->get( 'app_mail_smtp_password' ),
                    ];
                    break;
                    case 'ses':
                    
                    $config     =   [
                        'driver'    =>  $mailDriver,
                    ];
    
                    config()->set( 'services.ses', [
                        'key'       =>  $options->get( 'app_mail_ses_key' ),
                        'secret'    =>  $options->get( 'app_mail_ses_secret' ),
                        'region'    =>  $options->get( 'app_mail_ses_region' ),
                    ]);
    
                    break;
                    case 'spartpost':
    
                    $config     =   [
                        'driver'    =>  $mailDriver,
                        'host'      =>  $options->get( 'app_mail_host' ),
                        'port'      =>  $options->get( 'app_mail_port' ),
                        'from'      =>  [
                            'email' =>  $options->get( 'app_mail_from_address' ),
                            'name'  =>  $options->get( 'app_mail_from_name' )
                        ],
                        'username'  =>  $options->get( 'app_mail_smtp_username' ),
                        'password'  =>  $options->get( 'app_mail_smtp_password' ),
                    ];
    
                    config()->set( 'services.ses', [
                        'secret'    =>  $options->get( 'app_mail_sparkpost_secret' ),
                        'options'   =>  [
                            'endpoint'    =>  $options->get( 'app_mail_sparkpost_endpoint' ),
                        ]
                    ]);
                    break;
                }
            }
    
            if ( isset( $config ) ) {
                config()->set( 'mail', $config );
            }
        }

        /**
         * Register Schedule
         */
        $this->app->booted( function(){            

            /**
             * todo we might read module routine as well
             */
            $schedule   =   app( Schedule::class );
            $schedule->command( 'option:purge' )->daily();
        });
    }
}
