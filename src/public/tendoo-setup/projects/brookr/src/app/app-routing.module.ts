import {
  NgModule
} from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';
import { DevComponent } from './dev/components/dev/dev.component';
import { AllowDispatcherGuard } from './guards/allow-dispatcher.guard';


const routes: Routes = [
  {
    path: 'dev',
    component: DevComponent
  },
  {
    path: 'dashboard',
    canActivate:[
      AuthenticationGuard
    ],
    children: [{
        path: '',
        canActivate: [ AllowDispatcherGuard ],
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },{
        path: 'loads',
        canActivate: [ AllowDispatcherGuard ],
        loadChildren: () => import('./loads/loads.module').then(m => m.LoadsModule)
      }, {
        path: 'trucks',
        loadChildren: () => import('./trucks/trucks.module').then(m => m.TrucksModule)
      }, {
        path: 'drivers',
        loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversModule)
      }, {
        path: 'reports',
        canActivate: [ AllowDispatcherGuard ],
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      }, {
        path: 'settings',
        canActivate: [ AllowDispatcherGuard ],
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      }, {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      }, {
        path: 'customers',
        canActivate: [ AllowDispatcherGuard ],
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
      },
      { 
        path: 'companies', 
        canActivate: [ AllowDispatcherGuard ],
        loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule) 
      },
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }, {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
