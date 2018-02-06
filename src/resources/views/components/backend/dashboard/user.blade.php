@inject( 'Field', 'Tendoo\Core\Services\Field' )
@extends( 'tendoo::components.backend.dashboard.master', [ 'parent_class' => 'app-body-container' ])
@section( 'tendoo::components.backend.dashboard.master.body' )
    <div class="content-wrapper">
        @include( 'tendoo::partials.shared.page-title', [
            'title'         =>  __( 'My Settings' ),
            'description'   =>  __( 'Configure your personal settings.' )
        ])
        <div class="content-body h-100">
            <div class="container-fluid pt-3 p-4">
                @include( 'tendoo::partials.shared.layouts.tabs', [
                    'tabs'  =>  [
                        [ 'name'     =>  __( 'General' ) ],
                        [ 'name'     =>  __( 'Security' ) ],
                    ],
                    'tab'       =>  $tab,
                    'base_path' =>  'tendoo::components.backend.dashboard.user',
                    'base_url'  =>  route( 'dashboard.users.profile' ),
                    'route'     =>  'dashboard.users.profile'
                ])
            </div>
        </div>
    </div>
@endsection