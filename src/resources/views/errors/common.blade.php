@extends( 'tendoo::components.frontend.auth.master' )
@section( 'tendoo::components.frontend.auth.master.body' )
    <div class="card">
        <div class="card-header text-center py-3">
            <h3 class="mb-0">{{ $e->getTitle() }}</h3>
        </div>
        <div class="card-body">
            <div class="d-flex flex-column text-center">
                <p class="m-0">{{ $e->getMessage() }}</p>
            </div>
        </div>
    </div>
@endsection