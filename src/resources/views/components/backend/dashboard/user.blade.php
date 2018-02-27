@inject( 'Field', 'Tendoo\Core\Services\Field' )
@inject( 'Hook', 'Tendoo\Core\Facades\Hook' )
@extends( 'tendoo::components.backend.dashboard.master', [ 'parent_class' => 'app-body-container' ])
@section( 'tendoo::components.backend.dashboard.master.body' )
    <div class="content-wrapper">
        @include( 'tendoo::partials.shared.page-title', [
            'title'         =>  __( 'My Settings' ),
            'description'   =>  __( 'Configure your personal settings.' )
        ])
        <div class="content-body h-100">
            <div class="container-fluid pt-3 p-4">
                @php
                /**
                 * @hook:profile.tabs
                **/
                @endphp
                 
                @include( 'tendoo::partials.shared.layouts.tabs', [
                    'tabs'  =>  $Hook::filter( 'profile.tabs', [
                        'general'       =>      [ 
                            'text'      =>  __( 'General' ),
                            'url'       =>  route( 'dashboard.users.profile.general' )
                        ],
                        'security'      =>      [ 
                            'text'      =>  __( 'Security' ),
                            'url'       =>  route( 'dashboard.users.profile.security' )
                        ],
                    ]),
                    'tab'       =>  $tab,
                    'view_path' =>  @$view_path
                ])
            </div>
        </div>
    </div>
@endsection