@inject( 'Helper', 'App\Services\Helper' )
@inject( 'Field', 'App\Services\Field' )
@extends( 'components.frontend.setup.master' )
@section( 'components.frontend.setup.body' )
<div class="card">
    <form action="{{ route( 'setup.post.app-details' ) }}" method="post" class="mb-0">
        {{ csrf_field() }}
        <div class="card-header text-center">
            <h3 style="margin-bottom:0px" class="card-title">{{ __( 'Database Configuration' ) }}</h3>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-6 col-xs-12">
                    @each( 'partials.shared.fields', $Helper::arrayDivide( $Field::setupAppDetails(), 'even' ), 'field' )
                </div>
                <div class="col-md-6 col-xs-12">
                    @each( 'partials.shared.fields', $Helper::arrayDivide( $Field::setupAppDetails(), 'odd' ), 'field' )
                </div>
            </div>
        </div>
        <div class="card-footer p-2">
            <button type="submit" class="btn btn-primary btn-raised mb-0">{{ __( 'Save Settings' ) }}</button>
        </div>
    </form>
</div>
@endsection