import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpResponseParserService } from './http-response-parser.service';
import { AsyncResponse } from '../interfaces/async-response';

declare const tendoo;

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    isLoading   =   false;
    baseUrl     =   tendoo.base_url; 
    static headers  =   {};

    constructor(
        protected http: HttpClient,
        private httpParser: HttpResponseParserService
    ) {}

    /**
     * Submit post request
     * @param {string} url to access
     * @param data data to submit
     */
    post( url:string, data: { [ key:string] : any } ) {
        return new Observable( ( observer ) => {
            this.isLoading  =   true;
            return this.__formDataResponse( <Observable<AsyncResponse>>this.http.post( url, data, {
                headers: LoaderService.headers
            }), observer )
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
     * @param {string} url to access
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
     * @param {string} url to access
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
     * @param {string} url to access
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
}
