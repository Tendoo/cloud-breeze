import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TendooService } from '../services/tendoo.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class CheckRegistrationStatusGuard implements CanActivate {
    constructor(
        private tendoo: TendooService,
        private snackbar: MatSnackBar,
        private route: Router
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return new Observable( observer => {
                this.tendoo.options.getOption( 'allow_registration' ).subscribe( result => {
                    
                    if ( result.value === null ) {
                        this.snackbar.open( 'The registration are closed on this website.', 'OK', { duration: 3000 });
                        this.route.navigateByUrl( 'auth/login' );
                        observer.next( false );
                    } else {
                        observer.next( true );
                    }
                    
                    observer.complete();
                });
            })
        }
    }
    