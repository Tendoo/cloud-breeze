@inject( 'Field', 'Tendoo\Core\Services\Field' )
@inject( 'Options', 'Tendoo\Core\Services\Options' )
@extends( 'tendoo::components.frontend.auth.master' )
@section( 'tendoo::components.frontend.auth.master.body' )
<div class="col-md-4">
    <form action="{{ route( 'login.post' ) }}" method="post">
        {{ csrf_field() }}
        <div class="card">
            <div class="card-header">{{ __( 'Login' ) }}</div>
            <div class="card-body">
                @include( 'tendoo::partials.shared.errors', compact( 'errors' ) )
                @each( 'tendoo::partials.shared.fields', $Field::login(), 'field' )
            </div>
            <div class="card-footer p-2 d-flex justify-content-between">
                <div>
                <button class="mb-0 btn btn-raised btn-primary" type="submit">{{ __( 'Login' ) }}</button>
                @if( $Options->get( 'allow_recovery' ) )
                    <a href="{{ route( 'recovery.index' ) }}" class="mb-0 btn btn-raised btn-info">{{ __( 'Lost Password ?' ) }}</a>
                @endif
                </div>
                @if( $Options->get( 'allow_registration' ) )
                <button onClick="document.location = '{{ route( 'register.index' ) }}'" class="mb-0 btn btn-raised btn-info" type="button">{{ __( 'Register' ) }}</a>
                @endif
            </div>
        </div>
    </form>
</div>
@endsection