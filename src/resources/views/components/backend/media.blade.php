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
        var data  =   @json( compact( 'tabs', 'uploadUrl' ) );
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
                        <div class="col-md-3 col-lg-3">
                            <div class="card">
                                <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1627cfe50ac%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1627cfe50ac%22%3E%3Crect%20width%3D%22288%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
                                <div class="card-body">
                                    <h5 class="card-title m-0">Item Title</h5>
                                </div>
                                <div class="card-footer p-2">
                                    <a href="#" class="btn btn-primary m-0">Details</a>
                                    <a href="#" class="btn btn-primary m-0">Delete</a>
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