import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SetupHomeComponent } from "src/app/components/do-setup/setup-home/setup-home.component";
import { DatabaseComponent } from "src/app/components/do-setup/database/database.component";
import { ApplicationComponent } from "src/app/components/do-setup/application/application.component";
import { LoginComponent } from "src/app/components/auth/login/login.component";
import { LogoutComponent } from "src/app/components/auth/logout/logout.component";
import { RegisterComponent } from "src/app/components/auth/register/register.component";
import { DashboardHomeComponent } from "src/app/components/dashboard/home/home.component";
import { UsersComponent } from "src/app/components/dashboard/users/users.component";
import { ModulesComponent } from "src/app/components/dashboard/modules/modules.component";
import { SettingsComponent } from "src/app/components/dashboard/settings/settings.component";
import { DoSetupComponent } from "src/app/components/do-setup/do-setup.component";
import { AuthComponent } from "src/app/components/auth/auth.component";
import { PreventAppInstalledGuard } from "src/app/guards/app-state.guard";
import { HomeComponent } from "src/app/components/home/home.component";
import { DashboardComponent } from "src/app/components/dashboard/dashboard.component";
import { RequireLoggedGuard } from "src/app/guards/require-logged.guard";
import { ModulesUploadComponent } from "src/app/components/dashboard/modules-upload/modules-upload.component";
import { PreventAppNotInstalledGuard } from "src/app/guards/check-app-installed.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            }, {
                path: 'do-setup',
                component: DoSetupComponent,
                canActivate: [ PreventAppInstalledGuard ],
                children: [
                    {
                        path : '',
                        component: SetupHomeComponent
                    }, {
                        path: 'database',
                        component: DatabaseComponent
                    }, {
                        path: 'application',
                        component: ApplicationComponent
                    }
                ]
            }, {
                path: 'auth',
                component: AuthComponent,
                canActivate: [ PreventAppNotInstalledGuard ],
                children: [
                    {
                        path: 'logout',
                        component: LogoutComponent
                    }, {
                        path: 'register',
                        component: RegisterComponent
                    }, {
                        path: 'login',
                        component: LoginComponent
                    }
                ]
            }, {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [ RequireLoggedGuard ],
                children: [
                    {
                        path: '',
                        component: DashboardHomeComponent
                    }, {
                        path: 'users',
                        component: UsersComponent
                    }, {
                        path: 'modules',
                        component: ModulesComponent
                    }, {
                        path: 'modules/upload',
                        component: ModulesUploadComponent
                    }, {
                        path: 'settings',
                        component: SettingsComponent
                    }, 
                ]
            }
        ])
    ]
})
export class RoutesModule{}