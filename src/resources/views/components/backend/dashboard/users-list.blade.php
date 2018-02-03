
@inject( 'Auth', 'Illuminate\Support\Facades\Auth' )
@extends( 'components.backend.dashboard.master', [ 'parent_class' => 'app-body-container' ])
@section( 'components.backend.dashboard.master.body' )
    @include( 'partials.backend.dashboard.crud-table', [ 'namespace' => 'system.users' ])
@endsection