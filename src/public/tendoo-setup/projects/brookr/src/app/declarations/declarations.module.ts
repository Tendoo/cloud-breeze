import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../partials/dashboard/layout/layout.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from '../partials/dashboard/tabs/tabs.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableComponent } from '../partials/dashboard/table/table.component';
import { ServicesModule } from "@cloud-breeze/services";
import { CoreModule } from '@cloud-breeze/core';

@NgModule({
  declarations: [ 
    LayoutComponent, 
    TabsComponent, 
    TableComponent
  ],
  exports: [
    LayoutComponent,
    TabsComponent,
    TableComponent,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    MaterialModule,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CoreModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class DeclarationsModule { }
