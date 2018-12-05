import { Injectable } from '@angular/core';
import { TendooAuthService } from './tendoo-auth.service';

@Injectable({
    providedIn: 'root'
})
export class TendooModulesService extends TendooAuthService {
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
     * @return {Observable} AsyncResponse
     */
    enable( module: string ) {
        return this.post( this.baseUrl + 'tendoo/modules/enable', { module });
    }

    /**
     * Disable a module
     * @param string module namespace
     * @return {Observable} AsyncReponse
     */
    disable( module: string ) {
        return this.post( this.baseUrl + 'tendoo/modules/disable', { module });
    }
}
