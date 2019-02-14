import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SetupService } from '../services/setup.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class PreventAppInstalledGuard implements CanActivate {
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
            // return resolve( true );
            this.setup.ping().subscribe( result => {
                switch( result.status ) {
                    case 'not-installed':
                        this.router.navigateByUrl( 'auth/login?notice=app-installed' );
                    return resolve( false );
                }
                return resolve( true );
            });
        })
    }
}