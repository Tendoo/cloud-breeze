import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaniesRoutingModule } from './companies-routing.module';
import { CompaniesComponent } from './companies.component';
import { DeclarationsModule } from '../declarations/declarations.module';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';


@NgModule({
  declarations: [CompaniesComponent, ListComponent, ManageComponent],
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    DeclarationsModule
  ]
})
export class CompaniesModule { }
