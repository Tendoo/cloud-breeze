import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { ManageComponent } from './manage/manage.component';
import { ListComponent } from './list/list.component';
import { DeclarationsModule } from '../declarations/declarations.module';


@NgModule({
  declarations: [ManageComponent, ListComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    DeclarationsModule,
  ]
})
export class CustomersModule { }
