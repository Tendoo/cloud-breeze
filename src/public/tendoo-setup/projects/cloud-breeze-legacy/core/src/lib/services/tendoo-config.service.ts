import { Injectable, Inject } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TendooConfigService {
    baseUrl: string;
    angularUrl: string;

    constructor( config ) {
        this.baseUrl        =   config.base.replace(/\/?$/, '/') + 'api/';
        this.angularUrl     =   config.angular.replace(/\/?$/, '/');
    }
}