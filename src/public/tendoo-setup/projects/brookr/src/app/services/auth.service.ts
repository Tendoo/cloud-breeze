import { Injectable } from '@angular/core';
import { TendooService } from '@cloud-breeze/services';
import { tap } from 'rxjs/operators';
import { User } from '@cloud-breeze/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  roles   = [];
  user: User;
  constructor(
    private tendoo: TendooService
  ) { }

  getRoleAndPermissions() {
    return this.tendoo.get( `${this.tendoo.baseUrl}brookr/permissions` ).pipe(
      tap( (roles: any[]) => {
        this.roles        = roles;
        this.user         = this.tendoo.auth.getUser();
        const role        = this.roles.filter( r => r.id === this.user.role.id )[0] || [];
        this.user.role    = role;
      })
    )
  }
}
