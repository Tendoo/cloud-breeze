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

    /**
     * Authenticate an application in order to 
     * authorize a oauth request.
     * @param data applicatoin data
     */
    authenticateApplication( data ) {
        return this.post( `${this.baseUrl}tendoo/auth/application`, data );
    }

    /**
     * Send an Oauth request to the server
     * to authorize incoming Api request
     * @param request 
     */
    grantRequest( request ) {
        return this.post( `${this.baseUrl}tendoo/auth/request`, request );
    }

    /**
     * get authorized applications
     * @return Observable<data>
     */
    getAuthorizedApplication() {
        return this.get( `${this.baseUrl}tendoo/applications/authorized` );
    }

    /**
     * Revoque Applications
     * @param number application id
     * @reutrn Observable<AsyncResponse>
     */
    revoqueApp( id: number ) {
        return this.get( `${this.baseUrl}tendoo/applications/revoke/${id}` );
    }
}
