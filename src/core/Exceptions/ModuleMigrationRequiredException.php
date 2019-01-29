<?php
namespace Tendoo\Core\Exceptions;
use Exception;

class ModuleMigrationRequiredException extends Exception
{
    private $migrations;

    public function __construct( $migrations )
    {
        parent::__construct();
        $this->message  =   __( 'The migration of the module is required' );
        $this->migrations    =   $migrations;
    }

    /**
     * get Title
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * get a migration
     * @return array of migration
     */
    public function getMigration() 
    {
        return $this->migrations;
    }
}