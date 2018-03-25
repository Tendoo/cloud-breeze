@inject( 'Field', 'Tendoo\Core\Services\Field' )
@inject( 'Route', 'illuminate\Support\Facades\Route' )
@inject( 'Auth', 'Illuminate\Support\Facades\Auth' )
@inject( 'Carbon', 'Carbon\Carbon' )
@push( 'partials.shared.footer' )
    <script>
    var data    =   {
        tokens          :   {!! $oauth->toJson() !!},
        postURL         :   '{{ route( "dashboard.users.post-oauth" ) }}',
        deleteMessage   :   '{{ __( "Would you like to revoke this connexion ?" ) }}'
    }
    </script>
    <script src="{{ asset( 'tendoo/js/dashboard/oauth-profile.vue.js' ) }}"></script>
@endpush
<div id="oauth-profile">
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <h4>{{ __( 'Oauth Connexions' ) }}</h4>
                    <div class="list-group" v-for="( token, index ) in tokens">
                        <a href="javascript:void(0)" v-on:click="revoke( token, index )" class="list-group-item list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">@{{ token.app_name }}</h5>
                                <small>@{{ token.created_at }}</small>
                            </div>
                            <p class="mb-1">@{{ token.access_token }}</p>
                            <small>@{{ token.scopes }}</small>
                        </a>
                    </div>
                    <div class="alert alert-info m-0" v-if="tokens.length == 0">
                        <p class="m-0 p-2">{{ __( 'No applications has yet been authorized to access to your account' ) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>