import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooLinkService extends LoaderService {
    
    signed( namespace, data ) {
        return this.post( `${this.baseUrl}tendoo/url/signed/${namespace}`, data );
    }
}
