<?php
namespace CloudBreeze\Core\Events;

use CloudBreeze\Core\Crud\Users;
use CloudBreeze\Core\Crud\ApplicationCrud;
use CloudBreeze\Core\Fields\Dashboard\User as UserFields;
use CloudBreeze\Core\Fields\Dashboard\Applications;
use CloudBreeze\Core\Services\Validation;
use CloudBreeze\Core\Models\Application;
use CloudBreeze\Core\Models\User;
use CloudBreeze\Core\Facades\Hook;

use Illuminate\Foundation\Http\FormRequest;

class Crud 
{
    public function define( $namespace )
    {
        if ( $namespace === 'tendoo-users' ) {
            return Users::class;
        }

        if( $namespace === 'tendoo-apps' ) {
            return ApplicationCrud::class;
        }

        return $namespace;
    }

    public function validation( $rules = [], $namespace = '', FormRequest $request = null )
    {
        switch( $namespace ) {
            case 'tendoo-users': 
                return $this->tendooUsersRules( $request->route( 'id' ) );
            case 'tendoo-apps':
                return $this->tendooAppRules( $request->route( 'id' ) );
            default:
                return $rules;
        }
    }

    /**
     * Extrac the users validation
     * rules from the fields provided
     * @param int|null model id
     * @return array of validation
     */
    public function tendooUsersRules( $id = null ) 
    {
        return Validation::extract( $this->usersFields( $id ) );
    }

    private function usersFields( $id = null )
    {
        $model          =   User::find( $id );
        $fieldClass     =   new UserFields();
        return $fieldClass->getFields( $model );
    }

    /**
     * returns the validation extracted
     * from the application fields
     * @param int model id
     * @return array
     */
    public function tendooAppRules( $id = null ) 
    {
        return Validation::extract( $this->appFields( $id ) );
    }

    /**
     * returns an array with application
     * fields
     * @param int model id
     * @return array of fields
     */
    private function appFields( $id = null ) 
    {
        $model          =   Application::find( $id );
        $fieldClass     =   new Applications;
        return $fieldClass->getFields( $model );
    }

    /**
     * provide conditionally fields
     * for a specified namespace
     * @param array
     * @param string field
     * @param array data with namespace
     */
    public function fields( $fields, string $namespace, $data )
    {
        extract( $data );
        /**
         * ->model
         * ->namespace
         * ->id
         */

        switch( $namespace ) {
            case 'tendoo-apps' :
                return $this->appFields( $id );
            break;
            case 'tendoo-users':
                return $this->usersFields( $id );
            break;
            default:
                return $fields;
        }
    }
}