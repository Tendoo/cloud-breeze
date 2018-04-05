var MediaFile   =   new Vue({
    el      : '#media-element',
    data    :   Object.assign(data, {}),
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
    },
    created: function() {
    }
})