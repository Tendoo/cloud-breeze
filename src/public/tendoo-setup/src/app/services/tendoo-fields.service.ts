import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TendooAuthService } from './tendoo-auth.service';

@Injectable({
    providedIn: 'root'
})
export class TendooFieldsService extends TendooAuthService {
    get( namespace ): Observable<{}> {
        return this.get( this.baseUrl + 'tendoo/fields/' + namespace );
    }
}
