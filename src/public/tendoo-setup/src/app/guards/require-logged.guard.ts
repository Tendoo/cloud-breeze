import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from '../services/loader.service';

@Injectable({
    providedIn: 'root'
})
export class RequireLoggedGuard implements CanActivate {
    constructor(
        private router: Router
    ){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            if ( Object.values( LoaderService.headers ).length === 0 ) {
                this.router.navigateByUrl( 'auth/login?notice=login-required' );
                return false;
            }
            return true;
        }
    }
    