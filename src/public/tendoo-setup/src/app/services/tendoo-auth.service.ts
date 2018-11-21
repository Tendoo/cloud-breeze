import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class TendooAuthService extends LoaderService {
    login( credentials ) {
        return this.post( this.baseUrl + '/api/oauth/login', credentials );
    }       
}
