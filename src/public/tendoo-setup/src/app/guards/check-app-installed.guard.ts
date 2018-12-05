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
            // return true;
            return new Promise( ( resolve, reject ) => {
                this.setup.ping().subscribe( result => {
                }, result => {
                    switch( result.error.class ) {
                        case 'Tendoo/Core/Exceptions/TendooNotInstalledException':
                        this.router.navigateByUrl( 'do-setup' );
                        this.snackbar.open( result.error.message, null, {
                            duration: 3000
                        });
                        return resolve( false );
                    }
                    return resolve( true );
                })
            })
        }
    }
    