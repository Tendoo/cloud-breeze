@inject( 'Field', 'Tendoo\Core\Services\Field' )
@inject( 'Route', 'illuminate\Support\Facades\Route' )
@inject( 'Helper', 'Tendoo\Core\Services\Helper' )
<form action="{{ route( 'dashboard.options.post' ) }}" method="post">
    {{ csrf_field() }}
    {{ route_field() }}
    <div class="card">
        <div class="card-body">
            <h4>{{ __( 'General Settings' ) }}</h4>
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    @each( 'tendoo::partials.shared.fields', $Helper::arrayDivide( $Field->emailSettingsFields(), 'even' ), 'field' )
                </div>
                <div class="col-md-6 col-xs-12">
                    @each( 'tendoo::partials.shared.fields', $Helper::arrayDivide( $Field->emailSettingsFields(), 'odd' ), 'field' )
                </div>
            </div>    
        </div>
        <div class="card-footer p-2-5">
            <button type="submit" class="mb-0 btn btn-raised btn-primary">{{ __( 'Save Settings' ) }}</button>
        </div>
    </div>
</form>