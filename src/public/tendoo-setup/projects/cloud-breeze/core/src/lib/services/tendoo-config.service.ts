import { Injectable, Inject } from '@angular/core';
import { CB_URL_CONFIG } from '../cloud-breeze.module';

@Injectable({
    providedIn: 'root'
})
export class TendooConfigService {
    baseUrl: string;
    angularUrl: string;

    constructor( @Inject( CB_URL_CONFIG ) config ) {
        this.baseUrl        =   config.baseUrl;
        this.angularUrl     =   config.angularUrl;
    }
}