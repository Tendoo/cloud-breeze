import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TendooAuthService } from './tendoo-auth.service';

@Injectable({
    providedIn: 'root'
})
export class TendooFieldsService extends TendooAuthService {
    
    /**
     * Get fieds for a specific namespace
     * @param string field namespace
     * @return Objservable.
     */
    getFields( namespace:string ): Observable<{}> {
        return this.get( this.baseUrl + 'tendoo/fields/' + namespace );
    }

    /**
     * get public fields using the 
     * provided namespace
     * @param string fields namespace
     * @return {Objservable<Field[]>} fields
     */
    getPublicFields( namespace) {
        return this.get( this.baseUrl + 'tendoo/public/fields/' + namespace );
    }
}
