import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SetupService } from '../services/setup.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class AppStateGuard implements CanActivate {
    constructor(
        private setup: SetupService,
        private router: Router,
        private snackbar: MatSnackBar,
    ){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise( ( resolve, reject ) => {
            this.setup.ping().subscribe( result => {
            }, result => {
                if ( result.error.class === "Tendoo/Core/Exceptions/TendooInstalledException" ) {
                    this.router.navigateByUrl( '' );
                    this.snackbar.open( result.error.message, null, {
                        duration: 3000
                    });
                    return resolve( false );
                }
                resolve( true );
            })
        })
    }
}