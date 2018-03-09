@inject( 'Field', 'Tendoo\Core\Services\Field' )
@inject( 'Route', 'illuminate\Support\Facades\Route' )
<form action="{{ route( 'dashboard.users.post' ) }}" method="post">
    {{ csrf_field() }}
    {{ route_field() }}
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <h4>{{ __( 'Personnal Settings' ) }}</h4>
                    @each( 'tendoo::partials.shared.fields', $Field->userGeneralFields(), 'field' )
                </div>
            </div>
        </div>
        <div class="card-footer p-2-5">
            <button type="submit" class="mb-0 btn btn-raised btn-primary">{{ __( 'Save Settings' ) }}</button>
        </div>
    </div>
</form>