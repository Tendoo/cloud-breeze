import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ManageComponent } from './components/manage/manage.component';
import { LoadsComponent } from './components/loads/loads.component';
import { AllowDispatcherGuard } from '../guards/allow-dispatcher.guard';
import { AllowDriverGuard } from '../guards/allow-driver.guard';

const routes: Routes = [
  { 
    path: '', 
    canActivate: [ AllowDispatcherGuard ],
    component: ListComponent 
  }, { 
    path: 'create', 
    canActivate: [ AllowDispatcherGuard ],
    component: ManageComponent 
  }, {
    path: 'edit/:id',
    canActivate: [ AllowDispatcherGuard ],
    component: ManageComponent
  }, {
    path: 'loads',
    canActivate: [ AllowDriverGuard ],
    component: LoadsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DriversRoutingModule { }
