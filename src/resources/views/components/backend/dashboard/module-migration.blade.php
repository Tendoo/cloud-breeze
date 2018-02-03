@extends( 'components.backend.dashboard.master', [ 'parent_class' => 'app-body-container' ])
@php
    $module_url     =   url( 'dashboard/modules/migrate/' . $module[ 'namespace' ] );
    $options_url    =   url( 'dashboard/options' );
@endphp
@push( 'partials.shared.footer' )
    <script>
        "use strict";
        tendoo.migration  =   @json( compact( 'module', 'versions', 'module_url' ) );
    </script>
    <script src="{{ asset( 'js/dashboard/modules-migration.vue.js' ) }}"></script>
@endpush
@section( 'components.backend.dashboard.master.body' )
    <div class="content-wrapper">
        @include( 'partials.shared.page-title', [
            'title'     =>  __( 'Modules &mdash; Migration' ),
            'description'   =>  sprintf( __( 'Migratin the module %s.' ), $module[ 'name' ] )
        ])
        <div class="content-body h-100" id="module-migration">
            <div class="container-fluid pt-3 p-4">
                <div class="card">
                    <div class="card-header p-0">
                        <h5 class="box-title">{{ __( 'Migration Process' ) }}</h5>
                    </div>
                    <div class="card-body">
                        <ul class="p-0 mb-0" style="list-style: none;">
                            <li v-for="task in tasks">
                                <strong>@{{ task.text }}</strong>
                                <ul style="list-style: none;">
                                    <li v-for="sub in task.subTasks">@{{ sub.text }}</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="card-footer p-2 ">
                        <a :class="{ 'disabled' : ! complete }" class="mb-0 btn btn-raised btn-primary" href="{{ route( 'dashboard.modules.enable', [
                            'namespace' =>  $module[ 'namespace' ]
                        ]) }}">{{ sprintf( __( 'Enable %s' ), $module[ 'name' ] ) }}</a>
                        <a :class="{ 'disabled' : ! complete }" class="mb-0 btn btn-raised btn-info" href="{{ route( 'dashboard.modules.list' ) }}">{{ __( 'Return' ) }}</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection