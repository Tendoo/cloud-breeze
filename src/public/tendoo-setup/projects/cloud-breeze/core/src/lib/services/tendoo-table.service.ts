import { Injectable } from '@angular/core';
import { TendooAuthService } from './tendoo-auth.service';

@Injectable({
    providedIn: 'root'
})
export class TendooTableService extends TendooAuthService {

    getColumns( table: string ) {
        return this.get( this.baseUrl + 'tendoo/tables/' + table );
    }
}
