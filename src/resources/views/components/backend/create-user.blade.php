@inject( 'Field', 'Tendoo\Core\Services\Field' )
@extends( 'tendoo::components.backend.master', [ 'parent_class' => 'app-body-container' ])
@section( 'tendoo::components.backend.master.body' )
    @include( 'tendoo::partials.backend.crud-create-form', [ 'namespace' => 'users' ])
@endsection