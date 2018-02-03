@extends( 'layouts.frontend.master' )
@section( 'layouts.frontend.master.body' )
<div class="container-fluid h-100">
    <div class="row align-items-center h-100 justify-content-center">
        <div class="col-md-6">
        @yield( 'components.frontend.setup.body' )
        </div>
    </div>
</div>
@endsection