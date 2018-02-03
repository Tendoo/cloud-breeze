@extends( 'components.frontend.auth.master' )
@section( 'components.frontend.auth.master.body' )
    <div class="card">
        <div class="card-header text-center">
            <h1>{{ $title }}</h1>
        </div>
        <div class="card-body">
            <div class="d-flex flex-column text-center">
                <p class="m-0">{{ $message }}</p>
            </div>
        </div>
    </div>
@endsection