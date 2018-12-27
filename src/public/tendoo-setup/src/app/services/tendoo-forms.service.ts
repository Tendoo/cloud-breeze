import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooFormsService extends LoaderService {
    getForm( namespace:string ) {
        return this.get( this.baseUrl + '/tendoo/forms/' + namespace );
    }
}
