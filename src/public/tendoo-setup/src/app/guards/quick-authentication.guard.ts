import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TendooService } from '../services/tendoo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { PreventAppNotInstalledGuard } from './check-app-installed.guard';
import { LoaderService } from '../services/loader.service';

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
			let token 	=	this.cookie.get( 'auth.user' );
			if ( token && Object.values( LoaderService.headers ).length === 0 ) {
				this.tendoo.auth.tokenLogin( token ).subscribe( result => {
					observer.next( false );
					observer.complete();
					this.snackbar.open( result.message, 'OK', { duration: 3000 });

					/**
					 * if the user access from the
					 * login page
					 */
					if ( next.url.toString() === 'login' ) {
						this.router.navigateByUrl( this.tendoo.auth.intented || '/dashboard' );
					}
				}, ( error: HttpErrorResponse ) => {
					observer.next( true );
					observer.complete();
				})
			} else {
				observer.next( true );
				observer.complete();
			}
		})
	}
}
	