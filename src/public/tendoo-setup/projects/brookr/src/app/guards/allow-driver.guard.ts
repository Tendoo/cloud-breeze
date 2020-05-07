import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TendooService } from '@cloud-breeze/services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AllowDriverGuard implements CanActivate {
  constructor(
    private tendoo: TendooService,
    private snackbar: MatSnackBar,
    private router: Router
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role  = this.tendoo.auth.getUser().role.namespace;
    if ( role !== 'brookr.driver' ) {
      switch( role ) {
        case 'brookr.dispatcher': 
        case 'admin': 
          this.router.navigateByUrl( '/dashboard' );
          this.snackbar.open( 'You\'re not allowed to see this page', 'OK', { duration: 3000 });
        break;
      }
      return false;
    }
    return true;
  }
  
}
