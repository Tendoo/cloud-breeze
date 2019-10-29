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
     * return a public form available for the frontend
     * @param string namespace
     * @param int number
     * @reutrn Form;
     */
    getPublicForm( namespace: string, index?: number ) {
        let url   =   this.baseUrl + 'tendoo/public/forms/' + namespace;

        if ( index !== undefined ) {
            url     +=  '/' + index
        }

        return this.get( url );
    }

    /**
     * save a form
     * @param string namespace
     * @param array data[ key: any ]
     * @param number index
     */
    saveForm( namespace: string, data : { [ key: string ] : any }, index?: number ) {
        let url     =   this.baseUrl + 'tendoo/forms/' + namespace;
        return this.post( url, data );
    }    
}
