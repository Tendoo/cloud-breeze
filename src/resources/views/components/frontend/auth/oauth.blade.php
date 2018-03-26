@inject( 'Field', 'Tendoo\Core\Services\Field' )
@extends( 'tendoo::components.frontend.auth.master' )
@section( 'tendoo::components.frontend.auth.master.body' )
<div class="col-md-4">
    <div class="row d-flex flex-column">
        @include( 'tendoo::partials.shared.auth-logo' )
        <div class="col-md-12">
            <form action="{{ route( 'oauth.post' ) }}" method="post">
                {{ csrf_field() }}
                <div class="card">
                    <div class="card-header">{{ __( 'Auth Page' ) }}</div>
                    @include( 'tendoo::partials.shared.errors', compact( 'errors' ) )
                    <div class="card-body p-0">
                        <h4 class="text-center py-3 mb-0">{{ sprintf( __( '%s would like to :' ), $name ) }}</h4>
                        <div class="list-group py-0">
                            @foreach( $namespaces as $namespace )
                                @if( @$scopes[ $namespace ] != null ) 
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">{{ @$scopes[ $namespace ][ 'title' ] ? $scopes[ $namespace ][ 'title' ] : __( 'Undefined Scope' ) }}</h5>
                                    </div>
                                    <p class="mb-1">{{ @$scopes[ $namespace ][ 'description' ] }}.</p>
                                    <input type="hidden" name="scopes[]" value="{{ $namespace }}">
                                </a>
                                @endif
                            @endforeach
                            <input type="hidden" name="callback" value="{{ $callback }}">
                            <input type="hidden" name="name" value="{{ $name }}">
                        </div>
                    </div>
                    <div class="card-footer p-2 d-flex justify-content-between">
                        <button name="action" value="grant" class="mb-0 btn btn-raised btn-primary" type="submit">{{ __( 'Accept' ) }}</button>
                        <button name="action" value="deny" class="mb-0 btn btn-raised btn-info" type="submit">{{ __( 'Deny' ) }}</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection