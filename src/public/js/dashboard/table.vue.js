var TendooTable     =   new Vue({
    el      :   '#tendoo-table',
    data    :   Object.assign({}, data, {
        result          :   {},
        action          :   '',
        format          :   '',
        sortColumn      :   '',
        sortMethod      :   '',
        actions         :   {},
        searchValue     :   '',
        pageIndex       :   1,
        perPage         :   25,
        enabled         :   {
            search      :   false
        }
    }),
    methods: {

        __serialize( object ) {
            var str = [];
            for (var p in object)
                if (object.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(object[p]));
                }
            return str.join("&");
        },

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
            
            this.getEntries();

            /**
             * Trigger Render
             */
            this.$set( this.columns, namespace, column );
        },

        /**
         * This Get Entries
         * @return void
         */
        getEntries() {
            let data    =   {};

            if ( this.sortColumn ) {
                data.column     =   this.sortColumn;
            }

            if ( this.sortMethod ) {
                data.order      =   this.sortMethod;
            }

            if( this.pageIndex ) {
                data.page       =   this.pageIndex;
            }

            if ( this.perPage ) {
                data.per_page    =   this.perPage;
            }

            if ( this.searchValue.length > 0 ) {
                data.search     =   this.searchValue;
            }

            axios.get( this.getURL + `?${this.__serialize( data )}` ).then( result => {
                this.result     =   result.data;
                this.pageIndex  =   this.result.current_page;
                setTimeout( () => {
                    this.refreshCheckboxes();
                }, 100 );
            });
        },

        /**
         * refresh Checkboxes
         * @return void
         */
        refreshCheckboxes() {
            $( 'td > div.checkbox > label > input:checkbox' ).hasNoAncestor( '.bmd-form-group' ).each(function(){
                new window.BootstrapMaterialAPI.checkbox( $( this ) );
            });
        },

        /**
         * Handle Click events over inline actions
         * @param string event name
         * @param int entry index
         * @param int current row index
         * @return void
         */
        handle( name, id, rowIndex ) {
            if ( this.actions[ name ] != undefined ) {
                this.actions[ name ]( id, rowIndex );
            } else {
                throw `Unhandled CRUD action : ${name}`;
            }
        },

        /**
         * Delete
         */
        delete( id, rowIndex ) {
            axios.delete( this.deleteURL +  `/${id}` ).then( result => {
                this.result.data.splice( rowIndex, 1 );
                tendooApi.SnackBar.show(  result.data.message );
            }).catch( error => {
                tendooApi.SnackBar.show( error.response.data.message );
            })
        },

        /**
         * Edit Item
         * @return void
         */
        edit( id, rowIndex ) {
            document.location   =   this.editURL + `/${id}`;
        },

        /**
         * Move a page to a specific index
         * @param number index
         * @return void
         */
        goTo( index ) {
            this.pageIndex  =   index;
            this.getEntries();
        },

        /**
         * Set Per Page
         * @param number page index
         * @return void
         */
        setPerPage( pageIndex ) {
            this.perPage    =   pageIndex;
            this.getEntries();
        },

        /**
         * Toggle Search
         * @return void
         */
        toggleSearch() {
            this.enabled.search     = !this.enabled.search;

            if ( ! this.enabled.search ) {
                this.searchValue    =   '';
                this.getEntries();
            }
        },

        /**
         * Proceed to search
         */
        search() {
            this.getEntries();
        }
    },
    created()  {
        this.actions.delete     =   this.delete;
        this.actions.edit     =   this.edit;
        this.getEntries();
    },
    computed: {
        pageIndexes: function() {
            let indexes     =   [];
            if ( this.result ) {
                for( let i = 1; i <= Math.ceil( this.result.total / this.result.per_page ); i++ ) {
                    indexes.push( i );
                }
            }
            return indexes;
        },

        lastIndex: function() {
            let lastIndex   =   1;
            if( this.result ) {
                lastIndex   =   this.result.to;
            }
            return lastIndex;
        },

        currentPage: function() {
            let currentPage     =   1;
            if ( this.result ) {
                currentPage     =   this.result.current_page;
            }
            return currentPage;
        },

        lastPage: function() {
            let lastPage     =   1;
            if ( this.result ) {
                lastPage     =   this.result.last_page;
            }
            return lastPage;
        },

        firstIndex: function(){
            return 1;
        },

        /**
         * Search Enablee
         */
        searchEnabled: function() {
            return this.enabled.search;
        },
    }
})