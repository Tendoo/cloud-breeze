import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { HttpResponseParserService } from './http-response-parser.service';
import { AsyncResponse } from '@cloud-breeze/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import { TendooConfigService } from './tendoo-config.service';

declare const tendoo;

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    bulkDeletePath;
    isLoading                   =   false;
    static asyncLoading         =   new Subject<boolean>();
    baseUrl;
    angularUrl;
    static config               =   {};
    protected static headers    =   {};

    constructor(
        protected http: HttpClient,
        private httpParser: HttpResponseParserService,
        protected snackbar: MatSnackBar,
        protected cookie: CookieService,
        protected config: TendooConfigService
    ) {
        this.baseUrl        =   this.config.baseUrl;
        this.angularUrl     =   this.config.angularUrl;
    }

    /**
     * return the list of the currenlty
     * defined headers.
     * @param headers
     */
    getHeaders(): { [ key: string ] : any } {
        return LoaderService.headers;
    }

    /**
     * Submit post request
     * @param string url to access
     * @param data data to submit
     */
    post( url:string, data: { [ key:string] : any }, config = {}) {
        return new Observable( ( observer ) => {
            this.isLoading  =   true;
            return this.__formDataResponse( <Observable<AsyncResponse>>this.http.post( url, data, Object.assign({
                headers: LoaderService.headers
            }, config )), observer )
        });
    }

    private __formDataResponse( http: Observable<AsyncResponse>, observer ) {
        return http.subscribe( (result: AsyncResponse) => {
            this.httpParser.parse( result ).then( () => {
                this.isLoading  =   false;
                observer.next( result );
                observer.complete();
            })
        }, (result: HttpErrorResponse ) => {
            this.httpParser.parse( result.error ).then( () => {
                this.isLoading  =   false;
                observer.error( result );
            });
        })
    }

    /**
     * Submit put request
     * @param string url to access
     * @param data data to submit
     */
    put( url:string, data: { [ key:string] : any } ) {
        return new Observable( ( observer ) => {
            this.isLoading  =   true;
            return this.__formDataResponse( <Observable<AsyncResponse>>this.http.put( url, data, {
                headers: LoaderService.headers
            }), observer )
        });
    }
    
    /**
     * Submit DELETE request
     * @param string url to access
     * @param data data to submit
     */
    delete( url ) {
        return new Observable( ( observer ) => {
            this.isLoading  =   true;
            return this.http.delete( url, {
                headers: LoaderService.headers
            }).subscribe( result => {
                this.isLoading  =   false;
                observer.next( result );
                observer.complete();
            }, (result: HttpErrorResponse ) => {
                this.httpParser.parse( result.error ).then( () => {
                    this.isLoading  =   false;
                    observer.error( result );
                });
            })
        });
    }

    /**
     * Submit get request
     * @param string url to access
     * @param data data to submit
     */
    get( url ) {
        return new Observable( ( observer ) => {
            this.isLoading  =   true;
            return this.http.get( url, {
                headers: LoaderService.headers
            }).subscribe( (result: AsyncResponse ) => {
                this.httpParser.parse( result ).then( () => {
                    this.isLoading  =   false;
                    observer.next( result );
                    observer.complete();
                })
            }, (result: HttpErrorResponse ) => {
                this.httpParser.parse( result.error ).then( () => {
                    this.isLoading  =   false;
                    observer.error( result );
                });
            })
        });
    }

    /**
     * delete Selected entries
     * @param array of id
     * @return AyncResponse
     */
    deleteSelected( ids: number[] ) {
        console.log( this.bulkDeletePath );
        if ( this.bulkDeletePath !== undefined ) {
            return this.post( this.baseUrl + this.bulkDeletePath, {
                ids
            });
        }
        return false;
    }
}
