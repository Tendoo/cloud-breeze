import { Injectable } from '@angular/core';
import { TendooAuthService } from './tendoo-auth.service';

@Injectable({
    providedIn: 'root'
})
export class TendooUsersService extends TendooAuthService {
    /**
     * bulk delete path
     */
    bulkDeletePath      =   'tendoo/users/delete-selected';

    /**
     * get users
     * @return json
     */
    getUsers( param: string = '' ) {
        return this.get( this.baseUrl + 'tendoo/users?' + param );
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

    /**
     * create a users using provided data
     * @param data
     * @return Observable<AsyncReponse>
     */
    create( data: { [ key: string ] : any } ) {
        return this.post( this.baseUrl + 'tendoo/users', data );
    }
}
