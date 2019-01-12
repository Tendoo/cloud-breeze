import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooMediasService extends LoaderService {
    getMedias() {
        return this.get( this.baseUrl + 'tendoo/medias' );
    }
}
