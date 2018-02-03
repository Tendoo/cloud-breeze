@section( 'partials.shared.footer' )
    <script src="{{ asset( 'bower_components/vue/dist/vue.min.js' ) }}"></script>
    <script src="{{ asset( 'bower_components/jquery/dist/jquery.min.js' ) }}"></script>
    <script src="{{ asset( 'bower_components/popper.js/dist/umd/popper.min.js' ) }}"></script>
    <script src="{{ asset( 'bower_components/bootstrap-material-design/js/bootstrap-material-design.min.js' ) }}"></script>
    <script>$(document).ready(function() { $('body').bootstrapMaterialDesign(); });</script>
@endsection

@include( 'partials.shared.frontend-header' )
    @yield( 'layouts.frontend.master.body' )
@include( 'partials.shared.footer' )
