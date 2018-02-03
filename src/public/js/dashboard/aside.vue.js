var TendooAsideMenu     =   new Vue({
    el          :   "#tendoo-aside-menu",
    methods     :   {
        /**
         * Toggle Menu
         * @param object
         * @return void
         */
        toggle( window, event ) {
            let element     =   window.document.activeElement;
            let parent      =   $( element ).closest( 'li' );
            let hasSubMenu  =   $( parent ).find( 'ul' ).length > 0;

            /**
             * If we're not clicking on a sub menu
             */
            if ( $( element ).closest( '.sub-menu' ).length > 0 ) {
                return false;
            }

            /**
             * Close all other menus
             */
            $( '#tendoo-aside-menu li' ).each( function(){
                if ( $( this ).html() != $( parent ).html() ) {
                    $( this ).removeClass( 'active-menu' );
                    $( this ).find( '.arrow' ).html( 'keyboard_arrow_down' );
                }
            })

            if ( hasSubMenu ) {
                $( parent ).toggleClass( 'active-menu' );

                if ( $( parent ).hasClass( 'active-menu' ) ) {
                    $( parent ).removeClass( 'close-menu' );
                    $( parent ).find( '.arrow' ).html( 'keyboard_arrow_up' );
                } else {
                    $( parent ).addClass( 'close-menu' );
                    $( parent ).find( '.arrow' ).html( 'keyboard_arrow_down' );
                }

                event.preventDefault();
            }
        } 
    },
    mounted() {
        
    }
});