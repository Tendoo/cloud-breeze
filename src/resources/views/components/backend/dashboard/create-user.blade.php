@inject( 'Field', 'Tendoo\Core\Services\Field' )
@extends( 'tendoo::components.backend.dashboard.master', [ 'parent_class' => 'app-body-container' ])
@section( 'tendoo::components.backend.dashboard.master.body' )
    @include( 'tendoo::partials.backend.dashboard.crud-create-form', [ 'namespace' => 'system.users' ])
@endsection