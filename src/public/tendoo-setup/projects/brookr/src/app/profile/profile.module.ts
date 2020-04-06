import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { HomeComponent } from './component/home/home.component';
import { DeclarationsModule } from '../declarations/declarations.module';


@NgModule({
  declarations: [ HomeComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    DeclarationsModule
  ]
})
export class ProfileModule { }
