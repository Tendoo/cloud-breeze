@inject( 'Field', 'App\Services\Field' )
@inject( 'Options', 'App\Services\Options' )
@extends( 'components.frontend.auth.master' )
@section( 'components.frontend.auth.master.body' )
<div class="col-md-4">
    <form action="{{ route( 'login.post' ) }}" method="post">
        {{ csrf_field() }}
        <div class="card">
            <div class="card-header">{{ __( 'Login' ) }}</div>
            <div class="card-body">
                @include( 'partials.shared.errors', compact( 'errors' ) )
                @each( 'partials.shared.fields', $Field::login(), 'field' )
            </div>
            <div class="card-footer p-2 d-flex justify-content-between">
                <button class="mb-0 btn btn-raised btn-primary" type="submit">{{ __( 'Login' ) }}</button>
                @if( $Options->get( 'open_registration' ) )
                <button onClick="document.location = '{{ route( 'register.index' ) }}'" class="mb-0 btn btn-raised btn-info" type="button">{{ __( 'Register' ) }}</a>
                @endif
            </div>
        </div>
    </form>
</div>
@endsection