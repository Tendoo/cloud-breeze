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
}
