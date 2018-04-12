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
        var data  =   {!! json_encode( compact( 'medias', 'tabs', 'uploadUrl', 'loadUrl', 'lang' ) ) !!}
        Dropzone.options.mediaUploader   =   {
            headers     :   {
                'X-CSRF-TOKEN'  :   '{{ csrf_token() }}'
            }
        }
    </script>
    <script src="{{ asset( 'tendoo/js/dashboard/media-file.vue.js' ) }}"></script>
    <style>
    .active-media {
        box-shadow: 0px 0px 0px 4px #a92424;
    }
    .media-img-wrapper .card-img-top {
        width: auto !important;
    }
    .media-img-wrapper {
        overflow: hidden;
    }
    </style>
@endpush

@extends( 'tendoo::components.backend.master', [ 'parent_class' => 'p-0' ])
@section( 'tendoo::components.backend.master.body' )
    <div class="content-wrapper h-100" id="media-element" style="display:none">
        <div class="p-3 h-100">
            <div class="row">
                <div class="col-md-12 mb-3">
                    <div class="card">
                        <div class="card-header p-0">
                            <ul class="nav nav-tabs">
                                <li v-for="tab in tabs" v-on:click="setActive( tab )" class="nav-item">
                                    <a class="nav-link" v-bind:class="{ 'active' : tab.active }" href="#">@{{ tab.text }}</a>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body p-2" v-if="getActive().namespace == 'list'">
                            <button @click="multiselect = true;" v-show="multiselect == false" class="btn btn-primary btn-raised m-0">{{ __( 'Bulk Select' ) }}</button>
                            <button @click="multiselect = false; unselectAll()" v-show="multiselect == true" class="btn btn-primary btn-raised m-0">{{ __( 'Cancel' ) }}</button>
                            <button @click="deleteSelected()" v-if="selected > 1 && multiselect" class="btn btn-danger btn-raised m-0">{{ __( 'Delete Selected' ) }}</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="row p-0" v-if="getActive().namespace == 'list' && media">
                        <div class="col-md-3 col-lg-2 col-xs-6 col-sm-4 mb-3" @click="select( media, index )" v-for="( media, index ) of media.data">
                            <div class="card" v-bind:class="{ 'active-media' : media.selected }">
                                <div class="card-body p-0 media-img-wrapper">
                                    <img class="card-img-top" :src="media.sizes.thumb" style="max-height: 120px" :alt="media.name">
                                </div>
                                <div class="card-footer p-2 d-flex justify-content-between">
                                    <a v-bind:click="show( media )" href="#" class="btn btn-primary m-0">Details</a>
                                    <a v-bind:click="delete( media )" href="#" class="btn btn-primary m-0">Delete</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12" v-if="! media">
                            <p class="m-0 text-center">{{ __( 'No item available' ) }}</p>
                        </div>
                    </div>
                    <div class="row p-0" v-if="getActive().namespace == 'upload'">
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