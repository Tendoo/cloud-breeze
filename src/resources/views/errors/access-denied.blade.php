@extends( 'components.frontend.auth.master' )
@section( 'components.frontend.auth.master.body' )
    <div class="card">
        <div class="card-header text-center py-3">
            <h3 class="mb-0">{{ __( 'Access Denied' ) }}</h3>
        </div>
        <div class="card-body">
            <div class="d-flex flex-column text-center">
                <p class="m-0">{{ __( 'Unfortunately, you don\'t have the right to access the page you were looking for.' ) }}</p>
            </div>
        </div>
    </div>
@endsection