@inject( 'UserOptions', 'Tendoo\Core\Services\UserOptions' )
@section( 'partials.shared.head' )
    <link rel="stylesheet" href="{{ asset( 'tendoo/node_modules/material-components-web/dist/material-components-web.css' ) }}">
    <link rel="stylesheet" href="{{ asset( 'tendoo/css/backend.css' ) }}">
    <link rel="stylesheet" href="{{ asset( 'tendoo/css/themes/' . $UserOptions->get( 'theme_class' ) . '.css' ) }}">
    <!-- Scroll Bar CSS -->
    <link rel="stylesheet" href="https://unpkg.com/simplebar@latest/dist/simplebar.css" />

    <script src="{{ asset( 'tendoo/bower_components/jquery/dist/jquery.min.js' ) }}"></script>
    <script src="{{ asset( 'tendoo/bower_components/vue/dist/vue.min.js' ) }}"></script>
    <script src="{{ asset( 'tendoo/bower_components/axios/dist/axios.min.js' ) }}"></script>
@endsection
@section( 'partials.shared.footer' )
    <script src="{{ asset( 'tendoo/bower_components/popper.js/dist/umd/popper.min.js' ) }}"></script>
    <script src="{{ asset( 'tendoo/bower_components/bootstrap-material-design/js/bootstrap-material-design.js' ) }}"></script>
    <script src="{{ asset( 'tendoo/node_modules/material-components-web/dist/material-components-web.js' ) }}"></script>
    <script src="{{ asset( 'tendoo/js/dashboard/aside.vue.js' ) }}"></script>
    <script src="{{ asset( 'tendoo/js/dashboard/navbar.vue.js' ) }}"></script>
    <script>
    $(document).ready(function() { 
        $('body').bootstrapMaterialDesign(); 
        mdc.autoInit();
    });
    </script>
    <!-- Scroll Bar JS -->
    <script src="https://unpkg.com/simplebar@latest/dist/simplebar.js"></script>
@endsection
@include( 'tendoo::partials.shared.header' )
    @yield( 'tendoo::layouts.backend.master.body' ) 
@include( 'tendoo::partials.shared.footer' )
