@inject( 'Field', 'App\Services\Field' )
@inject( 'Route', 'illuminate\Support\Facades\Route' )

@extends( 'components.backend.dashboard.master', [ 'parent_class' => 'p-0' ])
@section( 'components.backend.dashboard.master.body' )
    <div class="content-wrapper">
        @include( 'partials.shared.page-title', [
            'title'         =>  __( 'Dashboard Settings' ),
            'description'   =>  __( 'Configure the dashboard settings.' )
        ])
        <div class="content-body h-100">
            <div class="container-fluid pt-3 p-4">
                @include( 'partials.shared.layouts.tabs', [
                    'tabs'  =>  [
                        [ 'name'     =>  __( 'General' ) ],
                        [ 'name'     =>  __( 'Registration' ) ]
                    ],
                    'tab'       =>  $tab,
                    'base_path' =>  'components.backend.dashboard.settings.tabs',
                    'base_url'  =>  route( 'dashboard.settings' ),
                    'route'     =>  'dashboard.settings'
                ])
            </div>
        </div>
    </div>
@endsection