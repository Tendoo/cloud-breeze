@inject( 'Modules', 'Tendoo\Core\Services\Modules' )
@inject( 'Users', 'Tendoo\Core\Services\Users' )
@extends( 'tendoo::components.backend.dashboard.master' )
@section( 'tendoo::components.backend.dashboard.master.body' )
    <div class="row">
        <div class="col-4">
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
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    {{ __( 'Users Stats' ) }}
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">{{ sprintf( __( 'Users : %s' ), count( $Users->all() ) ) }}</li>
                    <li class="list-group-item">{{ sprintf( __( 'Administrator : %s' ), count( $Users->all( 'admin' ) ) ) }}</li>
                    <li class="list-group-item">{{ sprintf( __( 'Supervisor : %s' ), count( $Users->all( 'supervisor' ) ) ) }}</li>
                    <li class="list-group-item">{{ sprintf( __( 'User : %s' ), count( $Users->all( 'user' ) ) ) }}</li>
                    
                </ul>
            </div>
        </div>
    </div>
@endsection