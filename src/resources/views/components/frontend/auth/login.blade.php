@inject( 'Field', 'Tendoo\Core\Services\Field' )
@inject( 'Options', 'Tendoo\Core\Services\Options' )
@Inject( 'Hook', 'Tendoo\Core\Facades\Hook' )
@push( 'partials.shared.footer' )
    @php
    /**
    * @Hook:login.footer.views
    **/
    @endphp
    @foreach( $Hook::filter( 'login.footer.views', []) as $view )
        @includeIf( $view )
    @endforeach
@endpush
@extends( 'tendoo::components.frontend.auth.master' )
@section( 'tendoo::components.frontend.auth.master.body' )
<div class="col-md-6 col-lg-4 col-sm-10 col-xs-12">
    <div class="row d-flex flex-column">
        @include( $Hook::filter( 'login.auth-logo', 'tendoo::partials.shared.auth-logo' ) )
        <div class="col-md-12">
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
    </div>
</div>
@endsection