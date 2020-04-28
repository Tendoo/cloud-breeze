import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ManageComponent } from './components/manage/manage.component';
import { LoadsComponent } from './components/loads/loads.component';

const routes: Routes = [
  { 
    path: '', 
    component: ListComponent 
  }, { 
    path: 'create', 
    component: ManageComponent 
  }, {
    path: 'edit/:id',
    component: ManageComponent
  }, {
    path: 'loads',
    component: LoadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
