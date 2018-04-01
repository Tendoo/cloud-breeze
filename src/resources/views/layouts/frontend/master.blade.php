@section( 'partials.shared.footer' )
    <script>$(document).ready(function() { $('body').bootstrapMaterialDesign(); });</script>
@endsection

@section( 'partials.shared.head' )
    <script src="{{ asset( 'tendoo/bower_components/vue/dist/vue.min.js' ) }}"></script>
    <script src="{{ asset( 'tendoo/bower_components/jquery/dist/jquery.min.js' ) }}"></script>
    <script src="{{ asset( 'tendoo/bower_components/popper.js/dist/umd/popper.min.js' ) }}"></script>
    <script src="{{ asset( 'tendoo/bower_components/bootstrap-material-design/js/bootstrap-material-design.min.js' ) }}"></script>
    <script src="{{ asset( 'tendoo/bower_components/axios/dist/axios.min.js' ) }}"></script>
@endsection

@include( 'tendoo::partials.shared.frontend-header' )
    @yield( 'tendoo::layouts.frontend.master.body' )
@include( 'tendoo::partials.shared.footer' )
