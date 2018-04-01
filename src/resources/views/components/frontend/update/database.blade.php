@extends( 'tendoo::components.frontend.update.master' )
@push( 'partials.shared.footer' )
    <script>
    var data    =   @json([]);
    </script>
    <script src="{{ asset( 'tendoo/js/update/database.vue.js' ) }}"></script>
@endpush
@section( 'tendoo::components.frontend.update.body' )
<div class="card" id="database-update">
    <div class="card-header text-center">
        <h3 style="margin-bottom:0px" class="card-title">{{ __( 'Database Update' ) }}</h3>
    </div>
    <div class="card-body">
    <p>{{ __( 'It seems like the database needs to be updated. 
            You might have made an update recently, and the database schema has changed. 
            This UI will help you to update your current database.' ) }}</p>
    </div>
    <div class="card-footer p-2">
        <a @click="runMigration()" class="btn btn-primary mb-0 btn-raised" href="javascript:void(0)">{{ __( 'Update' ) }}</a>
    </div>
</div>
@endsection