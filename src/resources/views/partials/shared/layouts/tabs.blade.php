@inject( 'Hook', 'Tendoo\Core\Facades\Hook')
<div class="card-header p-0">
    <ul class="nav nav-tabs">
        @forelse( ( array ) @$tabs as $slug => $_tab )
        <li class="nav-item">
            <a class="nav-link {{ $slug == $tab ? 'active' : '' }}" href="{{ @$_tab[ 'url' ] ? $_tab[ 'url' ] : '#' }}">{{ $_tab[ 'text' ] }}</a>
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
    @includeFirst([ $view_path ], [
        'view'  =>  $view_path
    ])
</div>