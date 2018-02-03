<form action="{{ @$action ? $action : route( 'dashboard.options.post' ) }}" method="post">
    {{ csrf_field() }}
    <div class="row">
        @include( 'partials.shared.errors', compact( 'errors' ) )
        <div class="col-md-6 col-xs-12">
            <div class="card">
                <div class="card-body p-3">
                @each( 'partials.shared.fields', $field::$method(), 'field' )
                </div>
                <div class="card-footer p-2">
                    <button class="mb-0 btn btn-raised btn-primary">{{ __( 'Submit' ) }}</button>
                </div>
            </div>
        </div>
    </div>
</form>