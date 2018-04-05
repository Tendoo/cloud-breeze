var DatabaseUpdate  =   new Vue({
    el  :   '#database-update',
    data    :   Object.assign( data, {
        canProceed  :   true,
        errorMessage     :   false,
        successMessage  :   false
    }),
    created     :   function() {
        
    },
    methods     :   {
        /**
         * run database migration
         */
        runMigration() {
            if ( this.canProceed ) {
                this.errorMessage           =   false;
                this.successMessage         =   false;
                this.canProceed             =   false;

                axios.post( this.updateUrl, {
                    files : this.files
                }).then( response => {
                    this.canProceed         =   true;
                    this.successMessage     =   response.data.message;
                    
                    /**
                     * set timeout before redirecting 
                     * to the previous url
                     */
                    setTimeout( () => {
                        document.location   =   this.previous
                    }, 2000 );

                }).catch( error => {
                    this.canProceed         =   true;
                    this.errorMessage       =   error.response.data.message;
                });
            }
        }
    }
})