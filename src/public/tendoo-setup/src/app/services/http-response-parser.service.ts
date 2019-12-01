import { Injectable } from '@angular/core';
import { AsyncResponse } from '../interfaces/async-response';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class HttpResponseParserService {
    
    pipes   =   [];

    constructor(
        private route: Router,
        private activeRoute: ActivatedRoute,
        private snackbar: MatSnackBar
    ) {
        this.pipes.push( ( response: AsyncResponse ) => {
            return new Promise( ( resolve ) => {
                if ( resolve instanceof ProgressEvent ) {
                    this.snackbar.open( 'Unable to reach the server right now.' );
                }
                resolve( response );
            })
        })
        this.pipes.push( ( response: AsyncResponse ) => {
            return new Promise( resolve => {
                if ( response.class !== undefined && [
                    'Tendoo/Core/Exceptions/TendooNotInstalledException',                            
                    'Tendoo/Core/Exceptions/TendooInstalledException',                                
                ].indexOf( response.class ) !== -1 ) {
                    this.snackbar.open( response.message, 'OK', {
                        duration: 4000
                    });
                }
                return resolve( response );
            })
        });
    }

    /**
     * Parse Http Response
     * @param http: AsyncResponse
     */
    parse( response: AsyncResponse ) {
        return new Promise( resolve => {
            this.pipes.forEach( async ( parser ) => {
                response  =   await parser( response );
            });
            
            resolve( response );
        })
    }

    /**
     * push http response parser
     * @param any
     * @return void
     */
    pushParser( parser ) {
        this.pipes.push( parser );
    }
}
