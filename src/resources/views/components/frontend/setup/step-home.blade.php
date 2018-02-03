@extends( 'components.frontend.setup.master' )
@section( 'components.frontend.setup.body' )
<div class="card">
    <div class="card-header text-center">
        <h3 style="margin-bottom:0px" class="card-title">{{ __( 'Installation Page' ) }}</h3>
    </div>
    <div class="card-body">
    <p>{{ __( 'Welcome to the installatin wizard of Tendoo CMS. 
            The process will be quit faster, make sure to have database information as well as 
            the application informations.
            Are you ready ? Let\'s get started' ) }}</p>
    </div>
    <div class="card-footer p-2">
        <a class="btn btn-primary mb-0 btn-raised" href="{{ route( 'setup.step', [ 'step' => 'database' ] ) }}">{{ __( 'Setup Database' ) }}</a>
    </div>
</div>
@endsection