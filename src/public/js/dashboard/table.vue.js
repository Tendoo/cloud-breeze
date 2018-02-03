var TendooTable     =   new Vue({
    el      :   '#tendoo-table',
    methods: {
        /**
         * delete
         * @param int entry id
         * @return void
         */
        deleteEntry( entryId, event ) {
            let element     =   $( event )[0].srcElement;
            let parent      =   $( element ).closest( 'tr' );
            
            axios({
                method  :   'delete',
                url     :   $( element ).attr( 'href' )
            }).then( ( content ) => {
                $( parent ).fadeOut(500, function() {
                    $( this ).remove();
                })
            }, ( content ) => {
                $( parent ).fadeOut(500, function() {
                    $( this ).remove();
                })
            })
            event.preventDefault();
        },

        /**
         * Toggle Checkboxes
         * @return void
         */
        toggleCheckbox( event ) {
            if ( $( event.srcElement ).is( ':checked' ) ) {
                $( '.entry-checkbox' ).each( function(){
                    $( this ).prop( 'checked' , true );
                })
            } else {
                $( '.entry-checkbox' ).each( function(){
                    $( this ).prop( 'checked' , false );
                })
            }
        }
    },
    mounted()  {
    }
})