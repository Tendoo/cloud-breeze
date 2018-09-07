@Inject( 'Auth', 'Illuminate\Support\Facades\Auth')
@extends( 'tendoo::layouts.frontend.master' )
@section( 'tendoo::layouts.frontend.master.body' )
<div class="container-fluid h-100">
    <div class="row align-items-center h-100 justify-content-center">
        <div class="col-md-6 d-flex justify-content-center">
            <div>
                <h1 class="display-2 text-center">Tendoo <strong>CMS</strong></h1>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" href="https://tendoo.org/documentation">Documentation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://github.com/tendoo/cms">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="https://tendoo.org/blog">Blog</a>
                    </li>
                    @if ( $Auth::check() ) 
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route( 'dashboard.index' ) }}">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route( 'logout.index' ) }}">Log out</a>
                    </li>
                    @else
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route( 'login.index' ) }}">Login</a>
                    </li>
                    @endif
                </ul>
            </div>
        </div>
    </div>
</div>
@endsection