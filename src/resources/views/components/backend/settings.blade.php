@inject( 'Field', 'Tendoo\Core\Services\Field' )
@inject( 'Route', 'illuminate\Support\Facades\Route' )

    <div class="content-wrapper">
        @include( 'tendoo::partials.shared.page-title', [
            'title'         =>  __( 'Dashboard Settings' ),
            'description'   =>  __( 'Configure the dashboard settings.' )
        ])
        <div class="content-body h-100">
            <div class="container-fluid pt-3 p-4">
                @include( 'tendoo::partials.shared.layouts.tabs', [
                    'tabs'  =>  [
                        'general'       =>  [ 
                            'text'     =>  __( 'General' ) ,
                            'url'       =>  route( 'dashboard.settings', [
                                'tab'   =>  'general'
                            ])
                        ],
                        'registration'  =>  [ 
                            'text'      =>  __( 'Registration' ) ,
                            'url'       =>  route( 'dashboard.settings', [
                                'tab'   =>  'registration'
                            ])
                        ]
                    ],
                    'tab'       =>  $tab,
                ])
            </div>
        </div>
    </div>
@endsection
