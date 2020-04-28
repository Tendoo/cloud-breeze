import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

import {
  AuthComponent
} from './auth.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [{
  path: 'login',
  component: AuthComponent
}, {
  path: 'logout',
  component: LogoutComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
