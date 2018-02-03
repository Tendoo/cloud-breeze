<nav class="mdl-navigation {{ @$tree > 0 ? 'sub-menu tree-' . $tree : '' }}">
	@foreach( $menus as $menu )
	<a class="mdl-navigation__link menu-{{ $menu->namespace }}" href="{{ @$menu->href ? $menu->href : '#' }}">
		<span class="d-flex flex-row align-items-center">
			@if( @$menu->icon )
			<i class="material-icons">{{ $menu->icon }}</i>
			@endif

			<span>{{ $menu->text }}</span>
			@if( @$menu->childrens )
			<i class="material-icons arrow">keyboard_arrow_down</i>
			@endif
		</span>
	</a>
	@endforeach
</nav>
{{-- 
	@if( @$menu->childrens ) 
		@include( 'partials.backend.dashboard.aside', [ 
			'menus' => $menu->childrens, 
			'tree' => intval( @$tree ) + 1 
		]) 
	@endif 
--}}