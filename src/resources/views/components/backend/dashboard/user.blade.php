@inject( 'Field', 'App\Services\Field' )
@extends( 'components.backend.dashboard.master', [ 'parent_class' => 'app-body-container' ])
@section( 'components.backend.dashboard.master.body' )
    <div class="content-wrapper">
        @include( 'partials.shared.page-title', [
            'title'         =>  __( 'My Settings' ),
            'description'   =>  __( 'Configure your personal settings.' )
        ])
        <div class="content-body h-100">
            <div class="container-fluid pt-3 p-4">
                @include( 'partials.shared.layouts.tabs', [
                    'tabs'  =>  [
                        [ 'name'     =>  __( 'General' ) ],
                        [ 'name'     =>  __( 'Security' ) ],
                    ],
                    'tab'       =>  $tab,
                    'base_path' =>  'components.backend.dashboard.user',
                    'base_url'  =>  route( 'dashboard.users.profile' ),
                    'route'     =>  'dashboard.users.profile'
                ])
            </div>
        </div>
    </div>
@endsection