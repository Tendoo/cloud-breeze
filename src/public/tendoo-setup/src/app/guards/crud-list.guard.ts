import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TendooService } from '../services/tendoo.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CrudListGuard implements CanActivate {
    constructor(
        private tendoo: TendooService,
        private snackbar: MatSnackBar,
        private router: Router
    ) {}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return new Promise( ( resolve, reject ) => {
                const namespace     =   next.paramMap.get( 'namespace' );
                this.tendoo.crud.canAccess({
                    type: 'crud.list',
                    namespace
                }).subscribe( result => {
                    resolve( true );
                }, (result: HttpErrorResponse) => {
                    if ( result.error.class === 'Tendoo/Core/Exceptions/AccessDenied' ) {
                        this.router.navigateByUrl( 'dashboard/error/access-denied' );
                    } else {
                        this.snackbar.open( result.error.message || 'Unable to access to the requested page. You may not have access to that page.', 'OK', { duration: 5000 })
                    }
                    resolve( false );
                })
            })
        }
    }
    