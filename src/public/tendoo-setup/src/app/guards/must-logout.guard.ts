import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TendooService } from '../services/tendoo.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class MustLogoutGuard implements CanActivate {
    constructor(
        private tendoo: TendooService,
        private snackbar: MatSnackBar
    ) {

    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return new Promise( ( resolve, reject ) => {
                const authLogoutObservable  =   this.tendoo.auth.logout()
                .subscribe( () => {
                    authLogoutObservable.unsubscribe();
                    resolve( true );  
                }, result => {
                    const snackbarObservable    =   this.snackbar.open( 'An error occured while loading the login page.', 'TRY AGAIN' )
                        .afterDismissed()
                        .subscribe( action => {
                            snackbarObservable.unsubscribe();
                            this.canActivate( next, state ); 
                        });

                    authLogoutObservable.unsubscribe();
                    
                    reject( false );
                })
            });
        }
    }
    