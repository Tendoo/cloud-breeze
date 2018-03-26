@inject( 'Field', 'Tendoo\Core\Services\Field' )
@extends( 'tendoo::components.frontend.auth.master' )
@section( 'tendoo::components.frontend.auth.master.body' )
<div class="col-md-4">
    <div class="row d-flex flex-column">
        @include( 'tendoo::partials.shared.auth-logo' )
        <div class="col-md-12">
            <form action="{{ route( 'recovery.password.post', [
                'user'  =>  $user->id
            ]) }}" method="post">
                {{ csrf_field() }}
                <div class="card">
                    <div class="card-header">{{ __( 'Password Recovery' ) }}</div>
                    @include( 'tendoo::partials.shared.errors', compact( 'errors' ) )
                    <div class="card-body">
                        @each( 'tendoo::partials.shared.fields', $Field::changePassword(), 'field' )
                    </div>
                    <div class="card-footer p-2 d-flex justify-content-between">
                        <button class="mb-0 btn btn-raised btn-primary" type="submit">{{ __( 'Recovery' ) }}</button>
                        <button onClick="document.location = '{{ route( 'login.index' ) }}'" class="mb-0 btn btn-raised btn-info" type="button">{{ __( 'Login' ) }}</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection