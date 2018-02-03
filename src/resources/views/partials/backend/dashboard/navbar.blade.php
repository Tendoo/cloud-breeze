@inject( 'User', 'App\Models\User' )
<nav id="main-nav" class="p-0 navbar navbar-expand-lg d-flex">
	<div class="toggle-button h-100 d-flex align-items-center justify-content-center ripple" @click="toggle()">
		<a href="javascript:void(0)">
			<i class="material-icons">menus</i>
		</a>
	</div>
	<div class="horizontal-menu-container d-flex flex-row">
	</div>
	<div class="user-menu-container">
		<div class="collapse navbar-collapse p-2">
			<ul class="navbar-nav">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
						aria-expanded="false">
						{{ $User->pseudo() }}
					</a>
					<div class="dropdown-menu dropdown-menu-right">
						<a class="dropdown-item" href="{{  route( 'dashboard.users.profile' ) }}">{{ __( 'Profile' ) }}</a>
						<a class="dropdown-item" href="{{  route( 'logout.index' ) }}">{{ __( 'Logout' ) }}</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
</nav>