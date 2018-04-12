class Options {
    constructor() {
        this.userId     =   OptionsData.id
        this.postUrl    =   OptionsData.postUrl;
        this.deleteUrl  =   OptionsData.deleteUrl;
        this.getUrl     =   OptionsData.getUrl;
    }
    
    /**
     * 
     * @param {string} key 
     * @param {mixed} value 
     */
    save( key, value ) {
        return axios.post( this.postUrl, {
            key,
            value,
            user    :   this.userID
        })
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