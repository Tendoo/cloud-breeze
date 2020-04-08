import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { User } from '@cloud-breeze/core';
import { AsyncResponse } from '@cloud-breeze/core';
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
        const token                 =   this.cookie.get( 'auth.user' );
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

    /**
     * request password reset for a specific 
     * email
     * @param string email
     * @return Observable observable of asyncresponse
     */
    requestPasswordReset( data ) {
        return this.post( `${this.baseUrl}tendoo/auth/password-reset`, data );
    }

    /**
     * change password of an account, using 
     * a provided new password and the hidden
     * request authorization code
     * @param string new password
     * @param string authorizationr request
     * @param number user int
     * @return Observable observable of asyncresponse
     */
    changePassword( data ) {
        const { password, authorization, user }     =   data;
        return <Observable<AsyncResponse>>this.post( `${this.baseUrl}tendoo/auth/change-password/${user}`, data );
    }

    /**
     * send activation token
     * and user id, to activate an account
     * @param string token
     * @param number user id
     * @return Observable
     */
    sendActivationCode( code, user_id ) {
        return this.post( `${this.baseUrl}tendoo/auth/activate`, { code, user_id });
    }

    /**
     * Request activation for
     * the user provided
     * @param object form data
     * @return Observable
     */
    requestActivationLink( formData ) {
        return this.post( `${this.baseUrl}tendoo/auth/request-activation`, formData );
    }
}
