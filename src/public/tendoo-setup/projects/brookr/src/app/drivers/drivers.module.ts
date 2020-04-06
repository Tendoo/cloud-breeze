import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { ListComponent } from './components/list/list.component';
import { ManageComponent } from './components/manage/manage.component';
import { DeclarationsModule } from '../declarations/declarations.module';


@NgModule({
  declarations: [ ListComponent, ManageComponent ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    DeclarationsModule
  ]
})
export class DriversModule { }
