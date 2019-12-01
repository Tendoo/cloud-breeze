import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooSettingsService extends LoaderService {
    getSettings( namespace ) {
        return this.get( `${this.baseUrl}tendoo/settings/${namespace}` );
    }
}
