@inject( 'Modules', 'App\Services\Modules' )
@section( 'partials.shared.head' )
    @parent
    <link rel="stylesheet" href="{{ asset( 'css/backend-module.css' ) }}">
@endsection

@extends( 'components.backend.dashboard.master', [ 'parent_class' => 'app-body-container' ] )
@section( 'components.backend.dashboard.master.body' )
    <div class="content-wrapper">
        @include( 'partials.shared.page-title', [
            'title'     =>  __( 'Modules' ),
            'description'   =>  __( 'Display all module installed on the system.' ),
            'links'     =>  [
                [
                    'href'  =>  route( 'dashboard.modules.upload' ),
                    'text'  =>  __( 'Upload a module' )
                ]
            ]
        ])
        <div class="content-body h-100">
            <div class="container-fluid pt-3 p-4">
                <div class="card">
                    <div class="card-header p-0">
                        <h5 class="box-title">{{ __( 'Module List' ) }}</h5>
                    </div>
                    @php
                    $collection     =   collect( $Modules->get() );
                    $rowsModules    =   $collection->chunk(3);
                    $class          =   'm-0';
                    @endphp
                    <div class="card-body p-0">
                    @include( 'partials.shared.errors', compact( 'errors' ) )
                    </div>
                    <div class="row m-0">
                        @if( $collection->isNotEmpty() )
                            @foreach( $rowsModules as $rowModule)
                                @foreach( $rowModule as $module )
                                <div class="col-md-4 col-xs-12 col-sm-12 p-0 module-card">
                                    <div class="card no-shadow d-flex flex-column h-100">
                                        <div class="card-header p-2">{{ $module[ 'name' ] }} ( {{ @$module[ 'version' ] }} )</div>
                                        <div class="card-body p-2">
                                            <small></small></h4>
                                            <p>{{ @$module[ 'description' ] }}</p>
                                            <small>{{ @$module[ 'author' ] }}</small>
                                        </div>
                                        <div class="card-footer p-2 d-flex justify-content-between">
                                            <div>
                                                @if( ! $module[ 'enabled' ] )
                                                    <a href="{{ route( 'dashboard.modules.enable', [ 'namespace' => $module[ 'namespace' ] ] ) }}" class="mb-0 btn btn-success btn-raised">{{ __( 'Enable' ) }}</a>
                                                @else 
                                                    <a href="{{ route( 'dashboard.modules.disable', [ 'namespace' => $module[ 'namespace' ] ] ) }}" class="mb-0 btn btn-secondary btn-raised">{{ __( 'Disable' ) }}</a>
                                                @endif
                                            </div>
                                            <div>
                                                <a href="{{ route( 'dashboard.modules.delete', [ 'namespace' => $module[ 'namespace' ] ] ) }}" class="mb-0 btn-icon btn btn-danger btn-raised">
                                                    <i class="material-icons">delete_forever</i>
                                                </a>
                                                <a href="{{ route( 'dashboard.modules.extract', [ 'namespace' => $module[ 'namespace' ] ] ) }}" class="mb-0 btn-icon btn btn-primary btn-raised">
                                                    <i class="material-icons">file_download</i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            @endforeach
                        @else
                        <div class="p-3 text-center">
                            <h5 class="mb-0">{{ __( 'No module has been installed yet' ) }}</h5>
                        </div>
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection