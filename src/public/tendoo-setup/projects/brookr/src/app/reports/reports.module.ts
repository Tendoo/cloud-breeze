import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { DriversReportComponent } from './components/drivers-report/drivers-report.component';
import { LoadsReportComponent } from './components/loads-report/loads-report.component';
import { DeclarationsModule } from '../declarations/declarations.module';


@NgModule({
  declarations: [ DriversReportComponent, LoadsReportComponent],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    DeclarationsModule
  ]
})
export class ReportsModule { }
