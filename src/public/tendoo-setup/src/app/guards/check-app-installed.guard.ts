import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { SetupService } from '../services/setup.service';

@Injectable({
    providedIn: 'root'
})
export class PreventAppNotInstalledGuard implements CanActivate {
    constructor(
        private setup: SetupService,
        private router: Router,
        private snackbar: MatSnackBar,
    ){}
    
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return new Promise( ( resolve, reject ) => {
                this.setup.ping().subscribe( result => {
                    if ( result.status === 'not-installed' ) {
                        this.router.navigateByUrl( 'do-setup' );
                        this.snackbar.open( result.message, null, {
                            duration: 3000
                        });
                        return resolve( false );
                    }
                    return resolve( true );
                }, result => {
                    this.snackbar.open( result.error.message || 'An unexpected error occured while checking the application status', null, {
                        duration: 3000
                    });
                })
            })
        }
    }
    