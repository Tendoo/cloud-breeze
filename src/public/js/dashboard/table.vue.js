var TendooTable     =   new Vue({
    el      :   '#tendoo-table',
    data    :   Object.assign({}, data, {
        entries   :   [],
        action  :   '',
        format  :   '',
        sortColumn  :   '',
        sortMethod  :   '',
    }),
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
        },

        /**
         * Perform a bulk Action
         * @return void
         */
        bulk( action ) {
            console.log( action );
        },

        /**
         * Export Actions
         * @param string format
         * @return void
         */
        export( format ) {
            console.log( format );
        },

        /**
         * Set order by column
         * @param string column
         * @param string method
         */
        sortBy( namespace, column ) {

            /**
             * cancel sort on others columns
             */
            for ( let _namespace in this.columns ) {
                if ( _namespace != namespace ) {
                    this.columns[ _namespace ].method     =   '';
                }
            }

            column              =   Object.assign({}, column );
            /**
             * Define column method
             */
            if ( column.method == 'asc' ) {
                column.method   =   'desc';
            } else {
                column.method   =   'asc';
            }

            this.sortMethod     =   column.method;
            this.sortColumn     =   namespace;

            /**
             * Trigger Render
             */
            this.$set( this.columns, namespace, column );
        }
    },
    created()  {
        
    }
})