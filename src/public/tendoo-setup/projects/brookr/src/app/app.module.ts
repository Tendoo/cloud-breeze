import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeclarationsModule } from './declarations/declarations.module';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/state';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@cloud-breeze/core';
import { ServicesModule } from '@cloud-breeze/services';

export const serviceCalled   = ServicesModule;

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DeclarationsModule,
    CoreModule,
    StoreModule.forRoot({ 
      state : AppReducer
    }),
    ServicesModule.forRoot({
      angular: '',
      base: 'http://laravel-7001.std/api/'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
