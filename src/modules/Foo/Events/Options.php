<?php
namespace Modules\Foo\Events;
use Illuminate\Foundation\Http\FormRequest;
use App\Services\Helper;
use Modules\Foo\Fields\DashboardFields;

class Options 
{
    /**
     * Before Option Validation
     */
    public function validationRule( $request ) 
    {
        $inputs     =   $request->except([ '_token' ]);
        $fields     =   new DashboardFields;
        if ( Helper::RefererRouteIs( 'dashboard.settings.nexopos.general' ) ) {
            Helper::UseFieldsValidation( $fields->generalSettings() );
        }
    }
}