<div class="card-header p-0">
    <ul class="nav nav-tabs">
        @forelse( ( array ) @$tabs as $_tab )
        @php
            $tabSlug        =   str_slug( $_tab[ 'name' ] );
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
@include( 'partials.shared.errors', [
    'errors'    =>  $errors,
    'class'     =>  'mb-0'
])
<div class="card-body p-0">
    @includeFirst([ $base_path . '.' . $tab, 'partials.shared.layouts.missing-view' ], [
        'view'  =>  $base_path . '.' . $tab
    ])
</div>