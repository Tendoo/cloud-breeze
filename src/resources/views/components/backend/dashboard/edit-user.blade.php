@inject( 'Field', 'App\Services\Field' )
@extends( 'components.backend.dashboard.master', [ 'parent_class' => 'app-body-container' ])
@section( 'components.backend.dashboard.master.body' )
    @include( 'partials.backend.dashboard.crud-edit-form', [ 'namespace' => 'system.users' ])
@endsection