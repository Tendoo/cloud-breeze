@inject( 'Field', 'App\Services\Field' )
@inject( 'Route', 'illuminate\Support\Facades\Route' )

@extends( 'components.backend.dashboard.master', [ 'parent_class' => 'p-0' ])
@section( 'components.backend.dashboard.master.body' )
    <div class="content-wrapper">
        @include( 'partials.shared.page-title', [
            'title'     =>  @$page_title ? $page_title : __( 'Unamed page' ),
            'description'   =>  @$page_description
        ])
        <div class="content-body h-100">
            <div class="container-fluid pt-3 p-4">
                <form action="{{ 
                    @$action ? $action : route( 'dashboard.options.post' )
                 }}" method="post">
                    {{ csrf_field() }}
                    {{ route_field() }}
                    <div class="card">
                        <div class="card-header p-3">
                            <button type="submit" class="mb-0 btn btn-raised btn-primary">{{ __( 'Save Settings' ) }}</button>
                        </div>
                        @include( 'partials.shared.errors', [
                            'errors'    =>  $errors,
                            'class'     =>  'mb-0'
                        ])
                        <div class="card-body">
                            @yield( 'interfaces.backend.dashboard.plain-settings.body' )
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection