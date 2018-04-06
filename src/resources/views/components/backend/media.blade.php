@inject( 'Field', 'Tendoo\Core\Services\Field' )
@inject( 'Route', 'illuminate\Support\Facades\Route' )

@push( 'partials.shared.head' )
    <link rel="stylesheet" href="{{ asset( 'tendoo/bower_components/dropzone/dist/min/dropzone.min.css' ) }}">
    <link rel="stylesheet" href="{{ asset( 'tendoo/bower_components/dropzone/dist/min/basic.min.css' ) }}">
    <link rel="stylesheet" href="{{ asset( 'tendoo/css/dashboard/media-file.css' ) }}">
    <script src="{{ asset( 'tendoo/bower_components/dropzone/dist/dropzone.js' ) }}"></script>
@endpush

@push( 'partials.shared.footer' )
    <script>
        "use strict";
        var data  =   @json( compact( 'tabs', 'uploadUrl', 'loadUrl' ) );
        Dropzone.options.mediaUploader   =   {
            headers     :   {
                'X-CSRF-TOKEN'  :   '{{ csrf_token() }}'
            }
        }
    </script>
    <script src="{{ asset( 'tendoo/js/dashboard/media-file.vue.js' ) }}"></script>
@endpush

@extends( 'tendoo::components.backend.master', [ 'parent_class' => 'p-0' ])
@section( 'tendoo::components.backend.master.body' )
    <div class="content-wrapper h-100" id="media-element">
        <div class="p-3 h-100">
            <div class="row">
                <div class="col-md-12 mb-3">
                    <ul class="nav nav-tabs">
                        <li v-for="tab in tabs" v-on:click="setActive( tab )" class="nav-item">
                            <a class="nav-link" v-bind:class="{ 'active' : tab.active }" href="#">@{{ tab.text }}</a>
                        </li>
                    </ul>
                    <hr class="m-0">
                </div>
                <div class="col-md-12" v-if="getActive().namespace == 'list'">
                    <div class="row">
                        <div class="col-md-3 col-lg-3" v-if="medias.length > 0">
                            <div class="card" v-for="media of medias">
                                <img class="card-img-top" :src="media.src.thumb" alt="Card image cap">
                                <div class="card-footer p-2">
                                    <a v-bind:click="showDetails( media )" href="#" class="btn btn-primary m-0">Details</a>
                                    <a v-bind:click="delete( media )" href="#" class="btn btn-primary m-0">Delete</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12" v-if="medias.length == 0">
                            <div class="card">
                                <div class="card-body">
                                    <p class="m-0 text-center">{{ __( 'No item available' ) }}</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div class="col-md-12" v-if="getActive().namespace == 'upload'">
                    <div class="row">
                        <div class="col-md-12">
                            <div id="media-uploader" class="p-2 dropzone" style="border:dashed 3px #999;">
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>
@endsection