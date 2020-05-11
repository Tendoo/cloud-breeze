import { Injectable, Inject } from '@angular/core';
import { ConfigOptions, CB_URL_CONFIG } from "../ConfigOptions";


@Injectable({
    providedIn: 'root'
})
export class TendooConfigService {
    baseUrl: string;
    angularUrl: string;
    constructor( @Inject( CB_URL_CONFIG ) options: ConfigOptions ) { // 
        this.baseUrl        =   options.base;
        this.angularUrl     =   options.angular;
    }
}