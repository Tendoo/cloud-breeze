var ModuleMigration     =   new Vue({
    el          :   '#module-migration',
    data        :   {
        index       :   0,
        versions    :   tendoo.migration.versions,
        tasks       :   [],
        complete    :   false,
        lastVersion     : null,
        module      :   tendoo.migration.module
    },
    methods     :   {
        /**
         * run migration
         */
        runVersionMigration( versions, lastVersion ) {
            return new Promise( ( resolve, reject ) => {
                let files       =   Object.values( versions );
                let keys        =   Object.keys( versions );
                if ( files.length > 0 ) {

                    this.tasks.push({
                        text        :   'Version...' + keys[0],
                        subTasks    :   []
                    });

                    /**
                     * run file migration
                     */
                    this.runFileMigration( keys[0], files[0] ).then( ( version, _files ) => {
                        
                        let currentVersion  =   keys[0];

                        /**
                         * Remove treated index
                         */
                        files.splice( 0, 1 );
                        keys.splice( 0, 1 );
                        
                        let newVersions     =   {};
    
                        /**
                         * Building New Object
                         */
                        keys.forEach( ( key, index ) => {
                            newVersions[ key ]  =   files[ index ];
                        });
    
                        this.runVersionMigration( newVersions, currentVersion ).then( ( versions, lastVersion ) => {
                            resolve( versions, lastVersion );
                        });
                    });
                } else {
                    this.lastVersion    =   lastVersion;
                    resolve( versions, lastVersion );
                }
            })
        },

        /**
         * Run File migration
         * @return void
         */
        runFileMigration( version, files ) {
            return new Promise( ( resolve, reject ) => {

                /**
                 * Looping files
                 */
                if ( files.length > 0 ) {
                    axios.post( tendoo.migration.module_url, {
                        version,
                        file    :   files[0]
                    }).then( result => {

                        /**
                         * Parse result
                         */
                        if ( result.data.status == 'danger' ) {
                            this.tasks.push({
                                text        :   'An Error occurred',
                                subTasks    :   []
                            });
                        } else {
                            /**
                             * @todo request to run a migration
                             */
                            this.tasks[ this.tasks.length - 1 ].subTasks.push({
                                text    :   'Migrating : ' + files[0]
                            });
    
                            /**
                             * remove current version
                             */
                            files.splice( 0, 1 );
    
                            this.runFileMigration( version, files ).then( ( version, files ) => {
                                setTimeout( () => {
                                    resolve( version, files );
                                }, 500 );
                            });
                        }
                    });
                } else {
                    resolve( version, files );
                }
            })
        }
    },
    mounted() {
        this.runVersionMigration( this.versions ).then( ( versions, lastVersion ) => {
            /**
             * check if a migration is available
             */
            if ( this.lastVersion ) {
                axios.post( tendoo.url.postOptions, {
                    [ this.module.namespace + '_last_migration' ]     :   this.lastVersion
                }).then( () => {
                    /**
                     * Finishing Task
                     */
                    this.tasks.push({
                        text        :   'Migration Complete',
                        subTasks    :   []
                    });
                    this.complete   =   true;
                });
            } else {
                this.complete   =   true;
                this.tasks.push({
                    text        :   'Not Migration Available',
                    subTasks    :   []
                });
            }
        }, () => {
            this.tasks.push({
                text        :   'An Error occurred',
                subTasks    :   []
            });
        });
    }
})