@inject( 'Field', 'Tendoo\Core\Services\Field' )
@inject( 'Route', 'illuminate\Support\Facades\Route' )

@push( 'partials.shared.head' )
    <link rel="stylesheet" href="{{ asset( 'tendoo/bower_components/dropzone/dist/min/dropzone.min.css' ) }}">
    <link rel="stylesheet" href="{{ asset( 'tendoo/bower_components/dropzone/dist/min/basic.min.css' ) }}">
    <link rel="stylesheet" href="{{ asset( 'tendoo/css/dashboard/media-file.css' ) }}">
    <script src="{{ asset( 'tendoo/bower_components/dropzone/dist/dropzone.js' ) }}"></script>
@endpush

@push( 'vue.components' )
<script>
    "use strict";
    var data  =   {!! json_encode( compact( 'medias', 'tabs', 'url', 'lang' ) ) !!}
    Dropzone.options.mediaUploader   =   {
        headers     :   {
            'X-CSRF-TOKEN'  :   '{{ csrf_token() }}'
        }
    }
</script>
<!-- <script src="{{ asset( 'tendoo/js/dashboard/media-file.vue.js' ) }}"></script> -->
<style>
.active-media {
    box-shadow: 0px 0px 0px 4px #009688;
}
.media-img-wrapper .card-img-top {
    width: auto !important;
}
.media-img-wrapper {
    overflow: hidden;
    min-height: 120px;
    max-height: 120px;
}
.dropzone .dz-preview .dz-error-mark, .dropzone .dz-preview .dz-success-mark {
    position: absolute;
    display: none;
    left: 30px;
    top: 50%;
    width: 54px;
    height: 58px;
    left: 50%;
    margin-left: -27px;
}
</style>
<script>
    var MediaFile   =   new Vue({
        el      : '#media-element',
        data    :   Object.assign({}, data, { media : false, multiselect : false, selected : 0 }),
        methods : {
            /**
             * set as active
             * @param object tab
             * @return void
             */
            setActive( tab ) {
                this.tabs.forEach( _tab => _tab.active = false );
                tab.active  =   true;

                /**
                 * run dropzone when the upload tab
                 * is enabled
                 */
                if ( tab.namespace == 'upload' ) {
                    setTimeout( () => {
                        this.dropZone   =   new Dropzone("div#media-uploader", { url: this.url.upload });
                    }, 200 );
                } else if ( tab.namespace == 'list' ) {
                    this.getMedias();
                }
            },

            /**
             * is Image
             * @return boolean
             */
            isImage( media ) {
                return [ 'jpg', 'png', 'jpeg', 'gif' ].indexOf( media.extension ) !== -1;
            },

            /**
             * get Active tab
             * @param void
             * @return object
             */
            getActive() {
                let tab     =   this.tabs.filter( tab => tab.active );
                return tab[0];
            },

            /**
             * get medias
             * @return void
             */
            getMedias() {   
                axios.get( this.url.load ).then( result => {
                    this.media     =   result.data;
                });
            },  

            /**
             * Show details for a specific media
             * @return void
             */
            show( media ) {

            },

            /**
             * Delete Items
             * @param object Media
             * @return void
             */
            deleteMedia( media ) {
                if ( confirm( this.lang.singleDelete ) ) {
                    axios.delete( this.url.delete + `/${media.id}` ).then( result => {
                        this.getMedias();
                    });
                }
            },

            /**
             * Select the entry
             * @return void
             */
            select( media, index ) {

                /**
                 * If the multiselect is disabled
                 */
                if ( ! this.multiselect ) {
                    this.media.data.forEach( ( _media, _index ) => {
                        if ( _index != index ) {
                            _media.selected     =   false;
                        }
                    });
                }

                media.selected  =   media.selected == undefined ? true : ! media.selected;
                this.selected   =   this.countSelected();
                this.$set( this.media.data, index, media );
            },
            
            /**
             * Count Selected
             */
            countSelected() {
                let countSelected   =   this.media.data.filter( entry => entry.selected );
                return countSelected.length;
            },

            /**
             * Delete Selected Items
             * @return void
             */
            deleteSelected() {
                if ( confirm( this.lang.bulkDelete ) ) {
                    let indexes     =   this.media.data.filter( media => media.selected );
                    axios.post( this.url.bulkDelete, { indexes }).then( result => {
                        this.getMedias();
                        this.multiselect    =   false;
                    });
                }
            },

            /**
             * Unselect all selected items
             * @return void
             */
            unselectAll() {
                this.media.data.forEach( entry => entry.selected = false );
                this.media.data     =   [].concat( this.media.data );
            },
        },
        created: function() {
            this.getMedias();
            $( '#media-element' ).show();
        }
    })
</script>
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
                        <div class="col-md-4 col-lg-2 col-xs-6 col-sm-4 mb-3" @click="select( media, index )" v-for="( media, index ) of media.data">
                            <div class="card" v-bind:class="{ 'active-media' : media.selected }">
                                <div class="card-body p-0 media-img-wrapper d-flex justify-content-center">
                                    <i style="font-size: 120px;" v-if="! isImage( media )" class="material-icons" :alt="media.name">@{{ media.extension === 'zip' ? 'archive' : 'attachment' }}</i>
                                    <img v-if="isImage( media )" class="card-img-top" :src="media.sizes.thumb" :alt="media.name">
                                </div>
                                <div class="card-footer p-2 d-flex justify-content-between">
                                    <button @click="show( media )"  class="btn btn-primary m-0">Details</button>
                                    <button @click="deleteMedia( media )"  class="btn btn-primary m-0">Delete</button>
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