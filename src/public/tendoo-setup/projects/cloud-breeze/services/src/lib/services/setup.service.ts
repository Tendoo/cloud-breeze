import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { AsyncResponse } from '@cloud-breeze/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SetupService extends LoaderService {

    /**
     * Send post request to the server for db configuration
     * @param fields form field for database configuration
     */
    setupDatabase( fields ) {
        return this.post( this.baseUrl + 'tendoo/do-setup/database', fields );
    }

    application( fields ) {
        return this.post( this.baseUrl + 'tendoo/do-setup/application', fields );
    }

    ping(): Observable<AsyncResponse> {
        return <Observable<AsyncResponse>>this.get( this.baseUrl + 'tendoo/ping' );
    }
}
