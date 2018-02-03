@extends( 'layouts.frontend.master' )
@section( 'layouts.frontend.master.body' )
<div class="container-fluid h-100">
    <div class="row align-items-center h-100 justify-content-center">
        @yield( 'components.frontend.auth.master.body' )
    </div>
</div>
@endsection