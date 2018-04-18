class MdSnackbar {
    constructor() {
        this.template   =   `
        <div class="mdc-snackbar"
            aria-live="assertive"
            aria-atomic="true"
            aria-hidden="true">
        <div class="mdc-snackbar__text"></div>
        <div class="mdc-snackbar__action-wrapper">
            <button type="button" class="mdc-snackbar__action-button"></button>
        </div>
        </div>
        `;

        /**
         * Let's check if template holder exists
         */
        if ( $( '#md-templates-wrapper' ).length == 0 ) {
            $( 'body' ).append( '<div id="md-templates-wrapper"></div>' );
        }

        /**
         * Add Snackbar template to the wrapper
         */
        $( '#md-templates-wrapper' ).append( this.template );

        this.snackbar   =   new mdc.snackbar.MDCSnackbar( document.querySelector( '.mdc-snackbar' ) );
    }

    /**
     * display
     * @param string
     * @param object config
     */
    show( message, config ) {
        let defaultConfig   =   Object.assign({}, {
            actionText  :   'OK',
            timeout     :   3000
        }, config );


        this.snackbar.show({
            message,
            ...defaultConfig
        });
    }
}