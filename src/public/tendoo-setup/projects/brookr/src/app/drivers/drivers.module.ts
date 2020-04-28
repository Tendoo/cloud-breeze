import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriversRoutingModule } from './drivers-routing.module';
import { ListComponent } from './components/list/list.component';
import { ManageComponent } from './components/manage/manage.component';
import { DeclarationsModule } from '../declarations/declarations.module';
import { LoadsComponent } from './components/loads/loads.component';


@NgModule({
  declarations: [ ListComponent, ManageComponent, LoadsComponent ],
  imports: [
    CommonModule,
    DriversRoutingModule,
    DeclarationsModule
  ]
})
export class DriversModule { }
