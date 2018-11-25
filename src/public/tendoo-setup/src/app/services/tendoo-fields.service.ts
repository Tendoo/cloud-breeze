import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TendooFieldsService extends LoaderService {
    get( namespace ): Observable<{}> {
        return this.get( this.baseUrl + 'tendoo/fields/' + namespace );
    }
}
