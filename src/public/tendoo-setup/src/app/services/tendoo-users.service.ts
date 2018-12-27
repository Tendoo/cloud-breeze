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

    /**
     * edit a user using a provided id
     * @param int user id
     * @param object data to update
     * @return Objservable of AsyncResponse
     */
    edit( id, data ) {
        return this.put( this.baseUrl + 'tendoo/users/' + id, data );
    }
}
