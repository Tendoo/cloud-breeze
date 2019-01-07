import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooFormsService extends LoaderService {
    /**
     * get a form
     * @param namespace form namespace
     * @param index entry index
     */
    getForm( namespace:string, index?: number ) {
        let url   =   this.baseUrl + 'tendoo/forms/' + namespace;

        if ( index !== undefined ) {
            url     +=  '/' + index
        }

        return this.get( url );
    }

    /**
     * save a form
     */
    saveForm( namespace: string, data : { [ key: string ] : any }, index?: number ) {
        let url     =   this.baseUrl + 'tendoo/forms/' + namespace;
        return this.post( url, data );
    }
    
}
