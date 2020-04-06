import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from '@cloud-breeze/services';
import { CoreModule } from '@cloud-breeze/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ServicesModule.forRoot({
      base: 'http://laravel-7001.std/api/',
      angular: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
