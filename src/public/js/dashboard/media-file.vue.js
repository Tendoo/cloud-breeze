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
                    this.dropZone   =   new Dropzone("div#media-uploader", { url: this.uploadUrl });
                }, 200 );
            } else if ( tab.namespace == 'list' ) {
                this.getMedias();
            }
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
            axios.get( this.loadUrl ).then( result => {
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
        delete( media ) {

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
            console.log( this.selected );
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
            if ( confirm( this.lang.deleteBulk ) ) {
                
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