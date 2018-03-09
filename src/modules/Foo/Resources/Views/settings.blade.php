@inject( 'Field', 'App\Services\Field' )
@extends( 'interfaces.backend.plain-settings', [
    'page_title'        =>  __( 'Setting Page' ),
    'page_description'  =>  __( 'Basic settings for NexoPOS' )
])
@section( 'interfaces.backend.plain-settings.body' )
<div class="row">
    <div class="col-md-6">
        <h4>{{ __( 'Default Fields' ) }}</h4>
        @each( 'tendoo::partials.shared.fields', $Field->get(
            'Modules\Foo\Fields\DashboardFields', 
            'generalSettings'
        ), 'field' )
        </div>
    </div>
</div>
@endsection