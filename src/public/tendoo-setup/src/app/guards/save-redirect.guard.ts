import {
	Injectable
} from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	ActivatedRoute
} from '@angular/router';
import {
	Observable
} from 'rxjs';
import {
	CookieService
} from 'ngx-cookie-service';

@Injectable({
	providedIn: 'root'
})
export class SaveRedirectGuard implements CanActivate {
	constructor(
		private cookie: CookieService,
		private activatedRouteSnapshot: ActivatedRoute
	) {}
		
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable < boolean > | Promise < boolean > | boolean {
		return new Promise((resolve) => {
			this.activatedRouteSnapshot.queryParamMap.subscribe(query => {
				const redirect = query.get('redirect');
				if (redirect) {
					this.cookie.set('redirect', redirect);
				}
				resolve(true);
			})
		})
	}
}
		