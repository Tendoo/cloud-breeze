import { Injectable } from '@angular/core';
import { TendooAuthService } from './tendoo-auth.service';
import { TendooModule } from '../interfaces/module.interface';

@Injectable({
    providedIn: 'root'
})
export class TendooModulesService extends TendooAuthService {
    
    resetMigrations( module: TendooModule ) {
        return this.post( `${this.baseUrl}tendoo/modules/reset-migrations`, { namespace: module.namespace });
    }

    getAll() {
        return this.get( this.baseUrl + 'tendoo/modules' );
    }

    /**
     * upload a zip file to Tendoo CMS 
     * server
     * @param file
     * @return void 
     */
    uploadFile( file: File ) {
        const endpoint = 'your-destination-url';
        const formData: FormData = new FormData();
        formData.append( 'module', file, file.name);
        return this.post( this.baseUrl + 'tendoo/modules/upload', formData );
    }

    /**
     * delete a module
     * @param string module namespace
     * @return void
     */
    deleteModule( namespace:string ) {
        return this.delete( this.baseUrl + 'tendoo/modules/' + namespace );
    }

    /**
     * Enable a module
     * @param string module namespace
     * @return Observable AsyncResponse
     */
    enable( module: string ) {
        return this.post( this.baseUrl + 'tendoo/modules/enable', { module });
    }

    /**
     * Disable a module
     * @param string module namespace
     * @return Observable AsyncReponse
     */
    disable( module: string ) {
        return this.post( this.baseUrl + 'tendoo/modules/disable', { module });
    }

    /**
     * get a single module details
     * @param string module namespace
     * @return Observable TendooModule
     */
    getModule( namespace: string ) {
        return this.get( `${this.baseUrl}tendoo/modules/${namespace}`);
    }

    /**
     * Run a specific migration for thie provided module
     * @param string module namespace
     * @param string file path to run
     * @return Promise
     */
    runMigration( namespace, file, version ) {
        return new Promise( ( resolve, reject ) => {
            this.post( `${this.baseUrl}tendoo/modules/${namespace}/migration`, {
                namespace, file, version
            }).subscribe( result => {
                resolve( result );
            }, error => {
                reject( error );
            })
        });
    }

    download( namespace: string ) {
        return this.get( `${this.baseUrl}tendoo/modules/${namespace}/download` );
    }

    /**
     * generate symlink for the
     * the selected module
     * @param string namespace
     * @return Observable response
     */
    createSymLink( namespace: string ) {
        return this.get( `${this.baseUrl}tendoo/modules/${namespace}/symlink` );
    }
}
