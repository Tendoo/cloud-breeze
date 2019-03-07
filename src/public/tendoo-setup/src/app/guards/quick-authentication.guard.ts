import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TendooService } from '../services/tendoo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { PreventAppNotInstalledGuard } from './check-app-installed.guard';

@Injectable({
	providedIn: 'root'
})
export class QuickAuthenticationGuard implements CanActivate {
	constructor(
		private cookie: CookieService,
		private tendoo: TendooService,
		private snackbar: MatSnackBar,
		private router: Router,
		private installGuard: PreventAppNotInstalledGuard
	) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean> | Promise<boolean> | boolean {
		return new Observable( ( observer ) => {
			(<Promise<boolean>>this.installGuard.canActivate( next, state )).then( result => {
				if ( result ) {
					let token 	=	this.cookie.get( 'auth.user' );
					if ( token ) {
						this.tendoo.auth.tokenLogin( token ).subscribe( result => {
							observer.next( false );
							observer.complete();
							this.snackbar.open( result.message, 'OK', { duration: 3000 });
							this.router.navigateByUrl( this.tendoo.auth.intented || '/dashboard' );
						}, ( error: HttpErrorResponse ) => {
							observer.next( true );
							observer.complete();
						})
					} else {
						observer.next( true );
						observer.complete();
					}
				}
			})
		})
	}
}
	