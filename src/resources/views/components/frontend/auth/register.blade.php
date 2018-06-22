@inject( 'Field', 'Tendoo\Core\Services\Field' )
@inject( 'Hook', 'Tendoo\Core\Facades\Hook' )
@inject( 'Helper', 'Tendoo\Core\Services\Helper' )
@extends( 'tendoo::components.frontend.auth.master' )
@push( 'partials.shared.footer' )
    @php
    /**
    * @Hook:register.footer.views
    **/
    @endphp
    @foreach( $Hook::filter( 'register.footer.views', []) as $view )
        @includeIf( $view )
    @endforeach
@endpush
@section( 'tendoo::components.frontend.auth.master.body' )
<div class="col-md-6 col-lg-4 col-sm-10 col-xs-12">
    <div class="row d-flex flex-column">
        @include( $Hook::filter( 'login.auth-logo', 'tendoo::partials.shared.auth-logo' ) )
        <div class="col-md-12">
            <form action="{{ route( 'register.post' ) }}" method="post">
                {{ csrf_field() }}
                <div class="card">
                    <div class="card-header">{{ __( 'Register' ) }}</div>
                    @include( 'tendoo::partials.shared.errors' )
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                @each( 'tendoo::partials.shared.fields', $Helper::arrayDivide( array_values( $Field::register() ), 'even' ), 'field' )
                            </div>
                            <div class="col-md-6">
                                @each( 'tendoo::partials.shared.fields', $Helper::arrayDivide( array_values( $Field::register() ), 'odd' ), 'field' )
                            </div>
                        </div>
                    </div>
                    <div class="card-footer p-2 d-flex justify-content-between">
                        <button class="mb-0 btn btn-raised btn-primary" type="submit">{{ __( 'Register' ) }}</button>
                        <button onClick="document.location = '{{ route( 'login.index' ) }}'" class="mb-0 btn btn-raised btn-info" type="button">{{ __( 'Login' ) }}</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection