import { Injectable } from '@angular/core';
import { TendooAuthService } from './tendoo-auth.service';

@Injectable({
    providedIn: 'root'
})
export class TendooUsersService extends TendooAuthService {
    /**
     * get users
     * @return json
     */
    getUsers() {
        return this.get( this.baseUrl + 'tendoo/users' );
    }
}
