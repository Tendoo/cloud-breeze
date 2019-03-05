import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { User } from '../interfaces/user-interface';
import { AsyncResponse } from '../interfaces/async-response';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TendooAuthService extends LoaderService {

    private user: User;
    intented: string;
    
    /**
     * register a new user from the register UI
     * @param data form data
     */
    register( data ) {
        return this.post( `${this.baseUrl}tendoo/auth/registration`, data );
    }

    /**
     * attempt to log the user.
     * @param credentials object user credentials
     */
    login( credentials ) {
        return this.post( this.baseUrl + 'tendoo/auth/login', credentials );
    } 

    /**
     * Store the user credentials
     * @param user User Object
     * @param token session token
     */
    setCredentials( user: User, token: string ) {
        LoaderService.headers    =   {
            'X-AUTH-TOKEN'  : token
        }

        this.user   =   user;
    }

    /**
     * Logout the logged user
     * @return void
     */
    logout() {
        
        this.user                   =   undefined;
        const token                 =   LoaderService.headers[ 'X-AUTH-TOKEN' ];
        LoaderService.headers       =   {};

        return this.post( `${this.baseUrl}tendoo/auth/logout`, {
            token
        }).pipe( map( value => {
            return value;
        }))
    }

    /**
     * return the logged user
     * @return User
     */
    getUser() {
        return this.user;
    }

    /**
     * token login
     * @param string token
     * @return Observable<AsyncResponse>
     */
    tokenLogin( token ) {
        const observable    =    <Observable<AsyncResponse>>this.post( `${this.baseUrl}tendoo/auth/token`, { token });
        return observable.pipe( map( entry => {
            if ( entry.status === 'success' ) {
                this.setCredentials( entry.data[ 'user' ], entry.data[ 'token' ] );
            }
            return entry;   
        }))
    }
}
