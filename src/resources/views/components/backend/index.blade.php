@inject( 'Modules', 'Tendoo\Core\Services\Modules' )
@inject( 'Role', 'Tendoo\Core\Models\Role' )
@inject( 'User', 'Tendoo\Core\Models\User' )
@extends( 'tendoo::components.backend.master' )
@section( 'tendoo::components.backend.master.body' )
    <div class="row">
        <div class="col-md-4 col-xs-6 col-lg-3 mb-3">
            <div class="card">
                <div class="card-header">
                    {{ __( 'Modules Stats' ) }}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ sprintf( __( 'All modules : %s' ), count( $Modules->get() ) ) }}</li>
                    <li class="list-group-item">{{ sprintf( __( 'Activated : %s' ), count( $Modules->getActives() ) ) }}</li>
                </ul>
            </div>
        </div>
        <div class="col-md-4 col-xs-6 col-lg-3 mb-3">
            <div class="card">
                <div class="card-header">
                    {{ __( 'Users Stats' ) }}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ sprintf( __( 'Users : %s' ), $User::all()->count() ) }}</li>
                    <li class="list-group-item">{{ sprintf( __( 'Administrator : %s' ), $Role::where( 'namespace', 'admin' )->first()->user()->count() ) }}</li>
                    <li class="list-group-item">{{ sprintf( __( 'Supervisor : %s' ), $Role::where( 'namespace', 'supervisor' )->first()->user()->count() ) }}</li>
                    <li class="list-group-item">{{ sprintf( __( 'User : %s' ), $Role::where( 'namespace', 'user' )->first()->user()->count() ) }}</li>
                </ul>
            </div>
        </div>
    </div>
    
    <button class="foo-button mdc-button">Button</button>
    @section( 'partials.shared.footer' )
    @parent
    <script>
        let dialog = mdc.dialog.MDCDialog.attachTo( document.querySelector('#my-mdc-dialog') );
        mdc.ripple.MDCRipple.attachTo( document.querySelector('.foo-button') );
        document.querySelector('.foo-button').addEventListener('click', function (evt) {
            dialog.lastFocusedTarget = evt.target;
            dialog.show();
        })
    </script>
    @endsection
@endsection