import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Inject } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeclarationsModule } from './declarations/declarations.module';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/state';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@cloud-breeze/core';
import { ServicesModule, TendooService } from '@cloud-breeze/services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './classes/interceptor.class';
import { LoadAssignationComponent } from './partials/dashboard/load-assignation/load-assignation.component';
import { LoadStatusComponent } from './partials/dashboard/load-status/load-status.component';
import { DevComponent } from './dev/components/dev/dev.component';
import { DriverLoadStatus } from './partials/dashboard/driver-load-status/driver-load-status.component';
import { PopupComponent } from './partials/dashboard/popup/popup.component';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoadDeliveryComponent } from './partials/dashboard/popups/load-delivery/load-delivery.component';

export const serviceCalled   = ServicesModule;

@NgModule({
  declarations: [
    AppComponent,
    LoadAssignationComponent,
    LoadStatusComponent,
    DriverLoadStatus,
    PopupComponent,
    LoadDeliveryComponent
  ],
  providers: [
    {
			provide: HTTP_INTERCEPTORS,
			useClass: Interceptor,
			multi: true
		}, 
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DeclarationsModule,
    CoreModule,
    StoreModule.forRoot({ 
      state : AppReducer
    }, {
      runtimeChecks: {
        strictActionImmutability: false,
        strictStateImmutability: false
      }
    }),
    ServicesModule.forRoot({
      angular: '',
      // base: 'http://brookr.nexopos.com/api/',
      base: 'http://laravel-7001.std/api/'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
