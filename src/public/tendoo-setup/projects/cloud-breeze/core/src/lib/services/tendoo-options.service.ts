import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class TendooOptionsService extends LoaderService {
    getOption( key: string ) {
        return <Observable<{ value: any }>>this.get( `${this.baseUrl}tendoo/options/${key}` );
    }
}
