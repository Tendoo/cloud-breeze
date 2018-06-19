class Options {
    constructor( options ) {
        this.userId     =   options.id
        this.postUrl    =   options.postUrl;
        this.deleteUrl  =   options.deleteUrl;
        this.getUrl     =   options.getUrl;
    }
    
    /**
     * 
     * @param {string} key 
     * @param {mixed} value 
     */
    save( key, value ) {
        
        let data    =   {
            key,
            value
        };

        /**
         * if the user id is defined
         * let's use it
         */
        if ( this.userId ) {
            data.user = this.userId;
        }

        return axios.post( this.postUrl, data )
    }

    /**
     * Get Value
     * @param string key
     * @return Promise<key>
     */
    get( key ) {
        return axios.get( this.getUrl );
    }

    /**
     * Delete Options
     * @param key
     * @return void
     */
    delete( key ) {
        return axios.delete( this.deleteUrl );
    }
}