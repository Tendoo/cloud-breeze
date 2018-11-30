import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
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
import { ReactiveFormsModule } from '@angular/forms';
import { FieldsComponent } from './shared/fields/fields.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderService } from './services/loader.service';
import { DoSetupComponent } from './components/do-setup/do-setup.component';
import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ModulesUploadComponent } from './components/dashboard/modules-upload/modules-upload.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';

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
        FieldsComponent,
        DoSetupComponent,
        AuthComponent,
        HomeComponent,
        DashboardComponent,
        ModulesUploadComponent,
        ConfirmDialogComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        HttpClientModule,
        MaterialModule,
        RoutesModule
    ],
    entryComponents: [
        ConfirmDialogComponent
    ],
    providers: [
        LoaderService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
