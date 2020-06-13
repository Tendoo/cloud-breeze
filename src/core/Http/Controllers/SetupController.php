<?php

namespace CloudBreeze\Core\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Cookie;
use CloudBreeze\Core\Services\Page;
use CloudBreeze\Core\Http\Requests\SetupDatabaseRequest;
use CloudBreeze\Core\Http\Requests\SetupAppDetailsRequest;
use CloudBreeze\Core\Services\Setup;
use CloudBreeze\Core\Exceptions\DBConnexionException;

class SetupController extends Controller
{
    /** @var */
    private $setup;

    public function __construct()
    {
        $this->setup    =   new Setup;
    }

    /**
     * Post Database details
     *
     * @since  1.0
     * @param  CloudBreeze\Core\Http\Requests\SetupDatabaseRequest $request
     * @return \Illiminate\Http\RedirectResponse
     */
    public function post_database( SetupDatabaseRequest $request )
    {
        $errors     =   $this->setup->saveDatabaseSettings( $request );
        if ( $errors[ 'status' ] === 'failed' ) {
            throw new DBConnexionException( $errors );
        }
        return $errors;
    }

    /**
     * Post App details
     *
     * @since  1.0
     * @param  CloudBreeze\Core\Http\Requests\SetupDatabaseRequest $request
     * @return \Illiminate\Http\RedirectResponse
     */
    public function post_appdetails( SetupAppDetailsRequest $request )
    {
        $result     =   $this->setup->runMigration( $request );
        return $result;
    }
}
