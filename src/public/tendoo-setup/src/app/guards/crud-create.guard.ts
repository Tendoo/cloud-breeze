import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { TendooService } from '../services/tendoo.service';

@Injectable({
    providedIn: 'root'
})
export class CrudCreateGuard implements CanActivate {
    constructor(
        private tendoo: TendooService,
        private router: Router,
        private snackbar: MatSnackBar
    ) {}
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return new Promise( ( resolve, reject ) => {
                const namespace     =   next.paramMap.get( 'namespace' );
                this.tendoo.crud.canAccess({
                    type: 'crud.create',
                    namespace
                }).subscribe( result => {
                    resolve( true );
                }, (result: HttpErrorResponse) => {
                    if ( result.error.class === 'Tendoo/Core/Exceptions/AccessDenied' ) {
                        this.router.navigateByUrl( 'dashboard/access-denied' );
                    } else if ( result.error.class === 'Tendoo/Core/Exceptions/RedirectException' ) {
                        this.snackbar.open( result.error.message, 'OK', { duration: 5000 })
                        setTimeout( () => {
                            const redirectTo    =   <string>result.error.redirectTo;
                            const searchResult  =   redirectTo.search( /http/ );

                            if ( searchResult > -1 ) {
                                document.location.href   =   redirectTo;
                            } else {
                                this.router.navigateByUrl( redirectTo );
                            }
                        }, 2000 );
                    } else {
                        this.snackbar.open( result.error.message || 'Unable to access to the requested page. You may not have access to that page.', 'OK', { duration: 5000 })
                    }
                    resolve( false );
                })
            })
        }
    }
    