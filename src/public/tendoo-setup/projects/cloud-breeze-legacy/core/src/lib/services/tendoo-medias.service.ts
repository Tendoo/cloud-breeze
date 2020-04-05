import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Media } from '../interfaces/media';
import { Observable } from 'rxjs';
import { AsyncResponse } from '../interfaces/async-response';
import { HttpRequest, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MediaUploadStatus } from '../interfaces/media-upload-status';

@Injectable({
    providedIn: 'root'
})
export class TendooMediasService extends LoaderService {

    /**
     * load medias as saved on the media manager.
     * @param string url to the media endpoint. let you override the loading URL
     */
    getMedias( page = null ) {
        return this.get( this.baseUrl + 'tendoo/medias' + ( page !== null ? '?page=' + page : '' ) );
    }

    /**
     * delete a specific media provided
     * @param Media media object to delete
     * @return observable<AsyncResponse>
     */
    deleteMedia( medias: Media[] ) {
        return this.post( this.baseUrl + 'tendoo/medias/delete', { medias });
    }

    /**
     * get a single medias
     * @param int media id
     * @return observable<Media>
     */
    getMedia( id ) {
        return this.get( `${this.baseUrl}tendoo/medias/${id}` );
    }

    /**
     * Download media
     * @param number media id
     * @return Observable
     */
    downloadMedia( id ) {
        return this._get( `download/${id}` );
    }

    private _get( url ) {
        return this.get( `${this.baseUrl}tendoo/medias/${url}` );
    }

    /**
     * Delete single media using a provided id
     * @param id media id to delete
     */
    deleteMediaById( id: number ) {
        return this.delete( this.baseUrl + 'tendoo/medias/' + id );
    }

    /**
     * Upload a single file
     * @param file object
     */
    uploadFile( file ): Promise<File> {
        return new Promise( ( resolve, reject ) => {
            const headers               =   new HttpHeaders( this.headers );
            const form                  =   new FormData;
            
            form.append( 'file', file );

            const httpRequest           =   new HttpRequest( 'POST', `${this.baseUrl}tendoo/medias`, form, {
                headers,
                reportProgress: true
            });

            this.http.request( httpRequest ).pipe(
                map( event => {
                    switch( event.type ) {
                        case HttpEventType.Sent: 

                            file[ 'progress' ]  =   0
                            file[ 'uploaded' ]  =   false;
                            file[ 'error' ]     =   false;

                        break;
                        case HttpEventType.UploadProgress: 
                        
                            file[ 'progress' ]  =   Math.round( 100 * event.loaded / event.total )
                            file[ 'uploaded' ]  =   false;
                            file[ 'error' ]     =   false;

                        break;
                        case HttpEventType.ResponseHeader:
                        
                            file[ 'progress' ]  =   0;
                            file[ 'uploaded' ]  =   false;
                            file[ 'error' ]     =   true;

                        break;
                        case HttpEventType.Response: 

                            file[ 'progress' ]  =   100
                            file[ 'uploaded' ]  =   true;
                            file[ 'error' ]     =   false;

                        break;
                    }
                    return event;
                }),
            ).subscribe( upload => {
                if ( upload instanceof HttpResponse ) {
                    resolve( file );
                }
            }, error => {
                reject( file );
            })
        })
    }
}
