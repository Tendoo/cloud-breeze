
@inject( 'Auth', 'Illuminate\Support\Facades\Auth' )
@extends( 'tendoo::components.backend.dashboard.master', [ 'parent_class' => 'app-body-container' ])
@section( 'tendoo::components.backend.dashboard.master.body' )
    @include( 'tendoo::partials.backend.dashboard.crud-table', [ 'namespace' => 'system.users' ])
@endsection