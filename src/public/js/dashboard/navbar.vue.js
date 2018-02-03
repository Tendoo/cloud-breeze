var TendooTopBar    =   new Vue({
    el  :   '#main-nav',
    methods: {
        /**
         * Toggle Aside
         * @param void
         * @return void
         */
        toggle() {
            if( ! $( 'body > div' ).hasClass( 'collapsed-aside' ) ) {
                $( 'body > div' ).addClass( 'collapsed-aside' );
                $( 'body > div' ).removeClass( 'expanded-aside' );
            } else {
                $( 'body > div' ).addClass( 'expanded-aside' );
                $( 'body > div' ).removeClass( 'collapsed-aside' );
            }
        }
    }
});