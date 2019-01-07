import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooTabsService extends LoaderService {
    slug: string    =   'tendoo/tabs';
    getTabs( name: string ) {
        return this.get( `${this.baseUrl}${this.slug}/${name}` );
    }
}
