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
            if( 
                ! $( 'body > div' ).hasClass( 'collapsed-aside' ) && 
                ! $( 'body > div' ).hasClass( 'collapsed-aside-no-anim' ) 
            ) {
                $( 'body > div' ).addClass( 'collapsed-aside' );
                
                $( 'body > div' ).removeClass( 'expanded-aside' );
                $( 'body > div' ).removeClass( 'expanded-aside-no-anim' );
                
                $( '.app-wrapper' ).removeClass( 'bmd-drawer-overlay' );
                $( '#app-body' ).removeClass( 'bmd-drawer-overlay' );

                $( '#tendoo-aside-menu li' ).each( function(){
                    $( this ).removeClass( 'active-menu' );
                    $( this ).find( '.arrow' ).html( 'keyboard_arrow_down' );
                })

                tendooApi.options.save( 'dashboard-aside', 'collapsed-aside' ).then( foo => {
                    console.log( foo );
                });
            } else {
                $( 'body > div' ).addClass( 'expanded-aside' );

                $( 'body > div' ).removeClass( 'collapsed-aside' );
                $( 'body > div' ).removeClass( 'collapsed-aside-no-anim' );

                if ( [ 'sm', 'xs' ].indexOf( this.is() ) != -1  ) {
                    $( '.app-wrapper' ).addClass( 'bmd-drawer-overlay' );
                    $( '#app-body' ).addClass( 'bmd-drawer-overlay' );
                    $( '#sidebar-menu' ).css({ 'position' : 'absolute' });
                } else {
                    $( '#sidebar-menu' ).css({ 'position' : 'relative' });
                }

                tendooApi.options.save( 'dashboard-aside', 'expanded-aside' ).then( foo => {
                    console.log( foo );
                });
            }
        },

        fakeOpen() {
            $( 'body > div' ).addClass( 'expanded-aside-fast' );
            $( '#app-body' ).css({ 'margin-left': '53.5px' });
            $( 'body > div' ).removeClass( 'collapsed-aside' );
            $( 'body > div' ).removeClass( 'collapsed-aside-fast' );
            $( 'body > div' ).removeClass( 'collapsed-aside-no-anim' );
            $( '#sidebar-menu' ).css({ 'position' : 'absolute' });
        },
        
        fakeClose() {
            $( 'body > div' ).addClass( 'collapsed-aside' );
            $( 'body > div' ).removeClass( 'expanded-aside' );
            $( 'body > div' ).removeClass( 'expanded-aside-fast' );
            $( 'body > div' ).removeClass( 'expanded-aside-no-anim' );
            
            setTimeout( () => {
                $( '#sidebar-menu' ).css({ 'position' : 'relative' });
                $( '#app-body' ).css({ 'margin-left': '0px' });
            }, 200 );
            
            $( '#tendoo-aside-menu li' ).each( function(){
                $( this ).removeClass( 'active-menu' );
                $( this ).find( '.arrow' ).html( 'keyboard_arrow_down' );
            })
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

        $( '#sidebar-menu' ).hover(() => {
            if( $( '.collapsed-aside' ).length > 0 ) {
                this.fakeOpen();
            }
        });
        $( '#sidebar-menu' ).mouseleave( () => {
            if( $( '.expanded-aside-fast' ).length > 0 ) {
                this.fakeClose();
            }
        })
    }
});