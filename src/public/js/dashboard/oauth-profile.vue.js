var OauthProfile    =   new Vue({
    el: '#oauth-profile',
    data,
    methods: {
        /**
         * Revoke a connexion
         */
        revoke( element, index ) {
            if ( confirm( this.deleteMessage ) ) {
                axios.post( this.postURL, {
                    token   :   element
                }).then( result => {
                    this.tokens.splice( index, 1 );
                });
            }
        }
    }
});