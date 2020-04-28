import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TendooService } from '@cloud-breeze/services';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private tendoo: TendooService,
    private router: Router,
    private snackbar: MatSnackBar,
    private auth: AuthService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise( ( resolve, reject ) => {
        if ( this.tendoo.auth.getUser() !== undefined ) {
          this.auth.getRoleAndPermissions().subscribe( result => {
            resolve( true );
          })
        } else {
          this.router.navigateByUrl( '/auth/login?redirect=' + state.url );
          this.snackbar.open( 'Please login first', null, { duration: 3000 });
        }
      });
  }
  
}
