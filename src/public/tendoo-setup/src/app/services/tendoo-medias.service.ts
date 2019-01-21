import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Media } from '../interfaces/media';

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
}
