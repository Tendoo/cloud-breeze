<ul id="tendoo-aside-menu" class="list-group pt-0 aside-menu {{ @$tree > 0 ? 'sub-menu tree-' . $tree : '' }} pb-0">
	@foreach( $menus as $menu )
	<li @click="toggle( this, $event )" class="list-group-item menu-{{ str_replace( '.', '-', $menu->namespace ) }} open">
		<a href="{{ @$menu->href ? $menu->href : '#' }}" class="ripple d-flex flex-row align-items-center justify-content-between">
			<span class="d-flex flex-row align-items-center">
				@if( @$menu->icon )
				<i class="material-icons mr-2">{{ $menu->icon }}</i>
				@endif

				<span>{{ $menu->text }}</span>
			</span>

			@if( @$menu->childrens )
			<i class="material-icons arrow">keyboard_arrow_down</i>
			@endif
		</a>
		) + 1 ]) @endif
	</li>
	@endforeach
</ul>
