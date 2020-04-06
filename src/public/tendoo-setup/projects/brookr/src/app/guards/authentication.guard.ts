import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TendooService } from '@cloud-breeze/services';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private tendoo: TendooService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise( ( resolve, reject ) => {
        if ( this.tendoo.auth.getUser() !== undefined ) {
          return resolve( true );
        }
        console.log( this.tendoo );
        this.snackbar.open( 'Please login first', null, { duration: 3000 });
        this.router.navigateByUrl( '/auth/login?redirect=' + state.url );
      });
  }
  
}
