var TendooTopBar    =   new Vue({
    el  :   '#main-nav',
    data        :   {
        window  :   {
            width: 0,
            height: 0
        }
    },
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
                
                $( '.app-wrapper' ).removeClass( 'bmd-drawer-overlay' );
                $( '#app-body' ).removeClass( 'bmd-drawer-overlay' );
            } else {
                $( 'body > div' ).addClass( 'expanded-aside' );
                $( 'body > div' ).removeClass( 'collapsed-aside' );

                if ( [ 'sm', 'xs' ].indexOf( this.is() ) != -1  ) {
                    $( '.app-wrapper' ).addClass( 'bmd-drawer-overlay' );
                    $( '#app-body' ).addClass( 'bmd-drawer-overlay' );
                    $( '#sidebar-menu' ).css({ 'position' : 'absolute' });
                } else {
                    $( '#sidebar-menu' ).css({ 'position' : 'relative' });
                }
            }
        },

        /**
         * Provide a breakpoint namespace for the current screen
         * @return string
         */
        is() {
            if ( this.window.width <= 576 ) {
                return 'xs';
            } else if ( this.window.width > 576 && this.window.width < 768 ) {
                return 'sm';
            } else if ( this.window.width > 768 && this.window.width < 992 ) {
                return 'md';
            } else if ( this.window.width > 992 && this.window.width <= 1200 ) {
                return 'lg';
            } else if ( this.window.width > 1200 ) {
                return 'xg';
            }
        }
    },
    mounted () {
        $( window ).resize( ( e ) => {
            this.window.width       =   e.target.innerWidth;
            this.window.height      =   e.target.innerHeight;
        });

        this.window.width   =   window.innerWidth;
        this.window.height  =   window.innerHeight;

        $( '.bmd-layout-backdrop' ).bind( 'click', () => {
            this.toggle();
        });

        /**
         * if the screen is small, then close the panel
         */
        if ( [ 'sm', 'xs' ].indexOf( this.is() ) != -1  ) {
            this.toggle();
        }
    }
});