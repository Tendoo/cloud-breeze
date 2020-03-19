import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { CookieService } from 'ngx-cookie-service';
import { NgxCaptchaModule } from 'ngx-captcha';
import { CloudBreezeModule } from '@cloud-breeze/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/modules/material.module';
import { SetupHomeComponent } from './components/do-setup/setup-home/setup-home.component';
import { DatabaseComponent } from './components/do-setup/database/database.component';
import { ApplicationComponent } from './components/do-setup/application/application.component';
import { LoginComponent } from './components/auth/login/login.component';
import { LogoutComponent } from './components/auth/logout/logout.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { ModulesComponent } from './components/dashboard/modules/modules.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';
import { RoutesModule } from 'src/modules/routes.module';
import { DashboardHomeComponent } from './components/dashboard/home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { DoSetupComponent } from './components/do-setup/do-setup.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModulesUploadComponent } from './components/dashboard/modules-upload/modules-upload.component';
import { UsersEditComponent } from './components/dashboard/users-edit/users-edit.component';
import { UsersCreateComponent } from './components/dashboard/users-create/users-create.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { MediasComponent } from './components/dashboard/medias/medias.component';
import { MediasUploadComponent } from './components/dashboard/medias-upload/medias-upload.component';
import { CoreEvent } from './classes/core-event.class';
import { CrudComponent } from './components/dashboard/crud/crud.component';
import { CrudCreateComponent } from './components/dashboard/crud-create/crud-create.component';
import { CrudEditComponent } from './components/dashboard/crud-edit/crud-edit.component';
import { MigrationDialogComponent } from './components/migration-dialog/migration-dialog.component';
import { ModulesDetailsComponent } from './components/dashboard/modules-details/modules-details.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MediasDetailsComponent } from './components/dashboard/medias-details/medias-details.component';
import { OauthComponent } from './components/auth/oauth/oauth.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ProfileAppsComponent } from './components/dashboard/profile-apps/profile-apps.component';
import { DroppableDirective } from './directives/droppable.directive';
import { FileUploadComponent } from './shared/file-upload/file-upload.component';
import { TruncateMiddlePipe } from './pipes/truncate-middle.pipe';
import { ErrorComponent } from './components/error/error.component';
import { LostPasswordComponent } from './components/auth/lost-password/lost-password.component';
import { ChangePasswordComponent } from './components/auth/change-password/change-password.component';
import { CoreMigrationDialogComponent } from './shared/core-migration-dialog/core-migration-dialog.component';
import { LoadingAnimationComponent } from './partials/loading-animation/loading-animation.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ActivateAccountComponent } from './components/auth/activate-account/activate-account.component';
import { RequestActivationComponent } from './components/auth/request-activation/request-activation.component';
import { CrudTableComponent } from './tests/crud-table/crud-table.component';

@NgModule({
    declarations: [
        AppComponent,
        SetupHomeComponent,
        DatabaseComponent,
        ApplicationComponent,
        LoginComponent,
        LogoutComponent,
        RegisterComponent,
        UsersComponent,
        ModulesComponent,
        SettingsComponent,
        DashboardHomeComponent,
        DoSetupComponent,
        AuthComponent,
        HomeComponent,
        DashboardComponent,
        ModulesUploadComponent,
        UsersEditComponent,
        UsersCreateComponent,
        ProfileComponent,
        MediasComponent,
        MediasUploadComponent,
        CrudComponent,
        CrudCreateComponent,
        CrudEditComponent,
        MigrationDialogComponent,
        ModulesDetailsComponent,
        MediasDetailsComponent,
        OauthComponent,
        TruncatePipe,
        ProfileAppsComponent,
        DroppableDirective,
        FileUploadComponent,
        TruncateMiddlePipe,
        ErrorComponent,
        LostPasswordComponent,
        ChangePasswordComponent,
        CoreMigrationDialogComponent,
        LoadingAnimationComponent,
        ActivateAccountComponent,
        RequestActivationComponent,
        CrudTableComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        RoutesModule,
        FormsModule,
        DropzoneModule,
        NgxCaptchaModule,
        CloudBreezeModule.forRoot({
            base: '/api',
            angular: ''
        }),
        ImageCropperModule,
    ],
    entryComponents: [
        MigrationDialogComponent,
        FileUploadComponent,
        CoreMigrationDialogComponent,
        LoadingAnimationComponent,
    ],
    providers: [
        CookieService,
        LoaderService,
        {
            provide: CoreEvent,
            useValue: new CoreEvent
        }, {
            provide: MAT_DATE_LOCALE, 
            useValue: 'en-US'
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
