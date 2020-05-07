import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { DeclarationsModule } from '../declarations/declarations.module';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [AuthComponent, LogoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DeclarationsModule
  ]
})
export class AuthModule { }
