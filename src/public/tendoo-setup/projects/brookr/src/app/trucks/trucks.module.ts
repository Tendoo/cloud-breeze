import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrucksRoutingModule } from './trucks-routing.module';
import { ListComponent } from './components/list/list.component';
import { ManageComponent } from './components/manage/manage.component';
import { MaintenanceListComponent } from './components/maintenance-list/maintenance-list.component';
import { MaintenanceManageComponent } from './components/maintenance-manage/maintenance-manage.component';
import { DeclarationsModule } from '../declarations/declarations.module';


@NgModule({
  declarations: [ ListComponent, ManageComponent, MaintenanceListComponent, MaintenanceManageComponent],
  imports: [
    CommonModule,
    TrucksRoutingModule,
    DeclarationsModule,
  ]
})
export class TrucksModule { }
