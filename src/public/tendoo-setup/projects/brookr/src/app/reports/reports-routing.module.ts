import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DriversReportComponent } from './components/drivers-report/drivers-report.component';
import { LoadsReportComponent } from './components/loads-report/loads-report.component';

const routes: Routes = [
  { path: 'drivers', component: DriversReportComponent },
  { path: 'loads', component: LoadsReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
