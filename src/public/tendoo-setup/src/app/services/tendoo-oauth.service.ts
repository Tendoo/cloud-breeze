import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooOauthService extends LoaderService {
    getApplication( appId ) {
        return this.get( `${this.baseUrl}tendoo/applicaitons/${appId}` );
    }

    /**
     * Return a list of registered scope and compare it to the
     * application requested scope
     * @param rawScopes get registered scopes
     */
    getScopes( id, rawScopes: string ) {
        const scopes    =   rawScopes.split( ',' );
        return this.post( `${this.baseUrl}tendoo/auth/scopes/${id}`, {
            scopes
        });
    }

    authenticateApplication( data ) {
        return this.post( `${this.baseUrl}tendoo/application/authentication`, data );
    }
}
