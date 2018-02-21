@inject( 'Hook', 'Tendoo\Core\Facades\Hook')
<div class="card-header p-0">
    <ul class="nav nav-tabs">
        @forelse( ( array ) @$tabs as $slug => $_tab )
        @php
            $tabSlug        =   str_slug( $slug );
            $completeURL    =   route( $route, [
                'tab'   =>  $tabSlug
            ]);
        @endphp
        <li class="nav-item">
            <a class="nav-link {{ $tabSlug == $tab ? 'active' : '' }}" href="{{ @$_tab[ 'href' ] ? $_tab[ 'href' ] : $completeURL }}">{{ $_tab[ 'name' ] }}</a>
        </li>
        @empty
        <li class="nav-item">
            <a class="nav-link disabled" href="#">{{ __( 'No tabs provided' ) }}</a>
        </li>
        @endforelse
    </ul>
</div>
@include( 'tendoo::partials.shared.errors', [
    'errors'    =>  $errors,
    'class'     =>  'mb-0'
])
@php
/**
 * @hook:profile.tabs.view
**/
@endphp
<div class="card-body p-0">
    @includeFirst([ $Hook::filter( 'profile.tabs.view', $base_path . '.' . $tab, $tab, $base_path ), 'tendoo::partials.shared.layouts.missing-view' ], [
        'view'  =>  $Hook::filter( 'profile.tabs.view', $base_path . '.' . $tab, $tab, $base_path )
    ])
</div>