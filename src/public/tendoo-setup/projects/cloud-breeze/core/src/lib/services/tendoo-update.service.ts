import { Injectable, Inject } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooUpdateService extends LoaderService {

    needsUpdate( result ) {
        const queue         =   [];
        const dbStatus      =   result.migrations.system.db;
        const assetsStatus  =   result.migrations.system.assets;
        
        /**
         * if the version saved on the database is different from the
         * version available on the files, it means that we need
         * to proceed to a migration. Note that the file version 
         * are supposed to be the reference
         */
        if ( dbStatus.file_version !== dbStatus.db_version ) {
            queue.push({
                exec :  () => {
                    return new Promise( ( resolve, reject ) => {
                        this.updateDatabase().subscribe( result => {
                            resolve( result );
                        }, result => {
                            reject( result );
                        })
                    })
                },
                before  :   'Updating the database...'
            });
        }

        if ( assetsStatus.file_version !== assetsStatus.db_version ) {
            queue.push({
                exec: () => {
                    return new Promise( ( resolve, reject ) => {
                        this.updateAssets().subscribe( result => {
                            console.log( result );
                            resolve( result );
                        }, result => {
                            reject( result );
                        })
                    })
                },
                before: 'Updating the assets...'
            });
        }

        return queue;
    }

    /**
     * Update database
     * @param string start from
     * @return Observable
     */
    updateDatabase() {
        return this.get( `${this.baseUrl}tendoo/update/database` );
    }

    /**
     * Upate assets
     * @param string start from
     * @return Observable
     */
    updateAssets() {
        return this.get( `${this.baseUrl}tendoo/update/assets` );
    }
}
