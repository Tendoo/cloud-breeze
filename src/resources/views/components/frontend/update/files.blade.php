@extends( 'tendoo::components.frontend.update.master' )
@push( 'partials.shared.footer' )
    <script>
    var data    =   @json([
        'files'     =>  [],
        'updateUrl' =>  route( 'update.post.files' ),
        'previous'  =>  url()->previous()
    ]);
    </script>
    <script src="{{ asset( 'tendoo/js/update/database.vue.js' ) }}"></script>
@endpush
@section( 'tendoo::components.frontend.update.body' )
@include( 'tendoo::partials.shared.auth-logo' )
<div class="card" id="database-update">
    <div class="card-header text-center">
        <h3 style="margin-bottom:0px" class="card-title">{{ __( 'Files Update' ) }}</h3>
    </div>
    <div class="card-body">
    <p>{{ __( 'It seems like the files has not yet been updated on your system. 
            You might have made an update recently, and the files has changed. 
            This UI will help you to publish new files.' ) }}</p>
        
        <div v-if="! canProceed" class="alert alert-success" role="alert">
            {{ __( 'Publishing...' ) }}
        </div>
        <div v-if="errorMessage != false" class="alert alert-danger" role="alert">
            @{{ errorMessage }}
        </div>
        <div v-if="successMessage != false" class="alert alert-success" role="alert">
            @{{ successMessage }}
        </div>
    </div>
    <div class="card-footer p-2">
        <a v-bind:disabled="! canProceed" @click="runMigration()" class="btn btn-primary mb-0 btn-raised" href="javascript:void(0)">{{ __( 'Publish Files' ) }}</a>
    </div>
</div>
@endsection