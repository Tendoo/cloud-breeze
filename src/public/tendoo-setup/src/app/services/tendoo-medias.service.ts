import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Media } from '../interfaces/media';
import { Observable } from 'rxjs';
import { AsyncResponse } from '../interfaces/async-response';
import { HttpRequest, HttpEventType, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TendooMediasService extends LoaderService {
    getMedias() {
        return this.get( this.baseUrl + 'tendoo/medias' );
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
     * upload a filesList
     * @param {filesList} object list object
     * @return Observable<AsyncResponse>
     */
    uploadFiles( files: File[] ): File[] {
        files.forEach( file => {
            const form  =  new FormData();
            form.append( 'file', file, file.name );
            const httpRequest   =   new HttpRequest( 'POST', `${this.baseUrl}tendoo/medias`, form, {
                headers: <HttpHeaders>LoaderService.headers,
                reportProgress: true
            })

            this.http.request( httpRequest ).pipe(
                map( event => {
                    switch( event.type ) {
                        case HttpEventType.UploadProgress: 
                        file[ 'progress' ]  =   Math.round( 100 * event.loaded / event.total )
                        file[ 'uploaded' ]  =   false;
                        break;
                        case HttpEventType.Response: 
                        file[ 'progress' ]  =   100
                        file[ 'uploaded' ]  =   true;
                        break;
                        case HttpEventType.Sent: 
                        file[ 'progress' ]  =   0
                        file[ 'uploaded' ]  =   false;
                        break;
                    }
                }),
            ).subscribe( request => {
                console.log( request );
            });
        });
        return files;
    }
}
