@inject( 'Field', 'App\Services\Field' )
@inject( 'Route', 'illuminate\Support\Facades\Route' )
<form action="{{ route( 'dashboard.options.post' ) }}" method="post">
    {{ csrf_field() }}
    {{ route_field() }}
    <div class="card">
        <div class="card-body">
            <h4>{{ __( 'Application Details' ) }}</h4>
            @each( 'partials.shared.fields', $Field->generalSettings(), 'field' )
        </div>
        <div class="card-footer p-2-5">
            <button type="submit" class="mb-0 btn btn-raised btn-primary">{{ __( 'Save Settings' ) }}</button>
        </div>
    </div>
</form>