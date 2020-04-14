import {
  NgModule
} from '@angular/core';

import {
  Routes,
  RouterModule
} from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';


const routes: Routes = [
  {
    path: 'dashboard',
    canActivate:[
      AuthenticationGuard
    ],
    children: [{
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },{
        path: 'loads',
        loadChildren: () => import('./loads/loads.module').then(m => m.LoadsModule)
      }, {
        path: 'trucks',
        loadChildren: () => import('./trucks/trucks.module').then(m => m.TrucksModule)
      }, {
        path: 'drivers',
        loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversModule)
      }, {
        path: 'reports',
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      }, {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      }, {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
      }, {
        path: 'customers',
        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
      },
      { path: 'companies', loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule) },
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
