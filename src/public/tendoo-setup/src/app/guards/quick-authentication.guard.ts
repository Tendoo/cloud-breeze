import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { TendooService } from '../services/tendoo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
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

			/**
			 * if a token exist and the user is not already connected
			 * let' try to quick authenticate him
			 */
			if ( token.length === 0 || Object.values( LoaderService.headers ).length === 0 ) {

				this.tendoo.auth.tokenLogin( token ).subscribe( result => {
					/**
					 * if the user access from the
					 * login page
					 */
					if ( next.url.toString() === 'login' ) {
						observer.next( false );
						this.router.navigateByUrl( this.tendoo.auth.intented || '/dashboard' );
					} else {
						observer.next( true );
					}

					observer.complete();
					this.snackbar.open( result.message, 'OK', { duration: 3000 });

				}, ( error: HttpErrorResponse ) => {

					/**
					 * the authentication has failed to 
					 * success, let's redirect the user
					 * to the login page
					 */
					if ( next.url.toString() !== 'login' ) {
						observer.next( false );
						observer.complete();
						this.tendoo.auth.intented  =   state.url;
						this.router.navigateByUrl( 'auth/login?notice=login-required' );
					} else {
						this.tendoo.auth.intented  =   '/dashboard';
						observer.next( true );
						observer.complete();
					}
				});

			} else {
				
				/**
				 * the user is already authenticated
				 * not need to take any further action
				 */
				observer.next( true );
				observer.complete();
			}
		})
	}
}
	