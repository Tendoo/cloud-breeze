import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooFormsService extends LoaderService {
    getForm( namespace:string, index?: number ) {
        let url   =   this.baseUrl + '/tendoo/forms/' + namespace;

        if ( index !== undefined ) {
            url     +=  '/' + index
        }

        return this.get( url );
    }
}
