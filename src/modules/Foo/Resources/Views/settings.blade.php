@inject( 'Field', 'App\Services\Field' )
@extends( 'interfaces.backend.dashboard.plain-settings', [
    'page_title'        =>  __( 'Setting Page' ),
    'page_description'  =>  __( 'Basic settings for NexoPOS' )
])
@section( 'interfaces.backend.dashboard.plain-settings.body' )
<div class="row">
    <div class="col-md-6">
        <h4>{{ __( 'Default Fields' ) }}</h4>
        @each( 'partials.shared.fields', $Field->get(
            'Modules\Foo\Fields\DashboardFields', 
            'generalSettings'
        ), 'field' )
        </div>
    </div>
</div>
@endsection