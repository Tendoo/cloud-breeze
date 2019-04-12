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
import { UsersCreateComponent } from "src/app/components/dashboard/users-create/users-create.component";
import { UsersEditComponent } from "src/app/components/dashboard/users-edit/users-edit.component";
import { ProfileComponent } from "src/app/components/dashboard/profile/profile.component";
import { MediasComponent } from "src/app/components/dashboard/medias/medias.component";
import { MediasUploadComponent } from "src/app/components/dashboard/medias-upload/medias-upload.component";
import { MediasDetailsComponent } from "src/app/components/dashboard/medias-details/medias-details.component";
import { NotFoundComponent } from "src/app/components/dashboard/not-found/not-found.component";
import { CrudComponent } from "src/app/components/dashboard/crud/crud.component";
import { CrudCreateComponent } from "src/app/components/dashboard/crud-create/crud-create.component";
import { CrudEditComponent } from "src/app/components/dashboard/crud-edit/crud-edit.component";
import { CrudCreateGuard } from "src/app/guards/crud-create.guard";
import { AccessDeniedComponent } from "src/app/components/dashboard/access-denied/access-denied.component";
import { CrudListGuard } from "src/app/guards/crud-list.guard";
import { CrudEditGuard } from "src/app/guards/crud-edit.guard";
import { CheckRegistrationStatusGuard } from "src/app/guards/check-registration-status.guard";
import { ModulesDetailsComponent } from "src/app/components/dashboard/modules-details/modules-details.component";
import { OauthComponent } from "src/app/components/auth/oauth/oauth.component";
import { QuickAuthenticationGuard } from "src/app/guards/quick-authentication.guard";
import { ProfileAppsComponent } from "src/app/components/dashboard/profile-apps/profile-apps.component";
import { FileUploadComponent } from "src/app/shared/file-upload/file-upload.component";
import { ErrorComponent } from "src/app/components/error/error.component";
import { LostPasswordComponent } from "src/app/components/auth/lost-password/lost-password.component";
import { ChangePasswordComponent } from "src/app/components/auth/change-password/change-password.component";
import { MustLogoutGuard } from "src/app/guards/must-logout.guard";
import { SaveRedirectGuard } from "src/app/guards/save-redirect.guard";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: 'auth/login',
                pathMatch: 'full',
            }, {
                path: 'test',
                component: FileUploadComponent
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
                canActivate: [ PreventAppNotInstalledGuard, SaveRedirectGuard ],
                children: [
                    {
                        path: 'logout',
                        component: LogoutComponent
                    }, {
                        path: 'register',
                        component: RegisterComponent,
                        canActivate: [ CheckRegistrationStatusGuard ]
                    }, {
                        path: 'login',
                        canActivate: [ MustLogoutGuard ],
                        component: LoginComponent
                    }, {
                        path: 'lost-password',
                        component: LostPasswordComponent
                    }, {
                        path: 'change-password/:user/:code',
                        component: ChangePasswordComponent
                    }, {
                        path: '',
                        canActivate: [ RequireLoggedGuard ],
                        component: OauthComponent
                    }
                ]
            }, {
                path: 'dashboard',
                component: DashboardComponent,
                canActivate: [ PreventAppNotInstalledGuard ],
                children: [{
                    path: '',
                    canActivate: [ QuickAuthenticationGuard ], // RequireLoggedGuard
                    children: [
                        {
                            path: '',
                            component: DashboardHomeComponent
                        }, {
                            path: 'users',
                            component: UsersComponent
                        }, {
                            path: 'users/edit/:id',
                            component: UsersEditComponent
                        }, {
                            path: 'users/create',
                            component: UsersCreateComponent
                        }, {
                            path: 'profile',
                            component: ProfileComponent
                        }, {
                            path: 'profile/apps',
                            component: ProfileAppsComponent
                        }, {
                            path: 'modules',
                            component: ModulesComponent
                        }, {
                            path: 'modules/details/:namespace',
                            component: ModulesDetailsComponent
                        }, {
                            path: 'modules/upload',
                            component: ModulesUploadComponent
                        }, {
                            path: 'settings',
                            component: SettingsComponent
                        }, {
                            path: 'medias/page/:page',
                            component: MediasComponent
                        }, {
                            path: 'medias/upload',
                            component: MediasUploadComponent
                        }, {
                            path: 'medias/details/:id',
                            component: MediasDetailsComponent
                        }, {
                            path: 'crud/:namespace',
                            component: CrudComponent,
                            canActivate: [
                                CrudListGuard
                            ]
                        }, {
                            path: 'crud/:namespace/create',
                            component: CrudCreateComponent,
                            canActivate: [
                                CrudCreateGuard
                            ]
                        }, {
                            path: 'crud/:namespace/edit/:id',
                            component: CrudEditComponent,
                            canActivate: [
                                CrudEditGuard
                            ]
                        }, {
                            path: 'access-denied',
                            component: AccessDeniedComponent
                        }, {
                            path: '**',
                            component: NotFoundComponent
                        }
                    ]
                }]
            }, {
                path: 'error/:code',
                component: ErrorComponent
            }, {
                path: 'error',
                component: ErrorComponent
            }, {
                path: '**',
                component: NotFoundComponent
            }
        ], {
            enableTracing: false
        })
    ],
    exports: [
        RouterModule
    ]
})
export class RoutesModule{}