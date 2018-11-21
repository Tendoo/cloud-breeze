import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoaderService } from './loader.service';

@Injectable({
    providedIn: 'root'
})
export class SetupService extends LoaderService {

    /**
     * Send post request to the server for db configuration
     * @param fields form field for database configuration
     */
    setupDatabase( fields ) {
        return this.post( this.baseUrl + 'api/do-setup/database', fields );
    }

    application( fields ) {
        return this.post( this.baseUrl + 'api/do-setup/application', fields );
    }

    ping() {
        return this.get( this.baseUrl + 'api/ping' );
    }
}
