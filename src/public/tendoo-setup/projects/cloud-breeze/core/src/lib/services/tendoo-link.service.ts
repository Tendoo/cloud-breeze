import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooLinkService extends LoaderService {
    
    /**
     * 
     * @param namespace 
     * @param data 
     * @todo investigation needed why while using 'application/zip' that cause 
     * unexpected behaviour while downloading
     */
    signed( namespace, data ) {
        return this.post( `${this.baseUrl}tendoo/url/signed/${namespace}`, data, {
            headers: Object.assign({}, {
                // 'Content-Type'  :   'application/zip'
            }, LoaderService.headers ),
        });
    }
}
