import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ManageComponent } from './components/manage/manage.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
