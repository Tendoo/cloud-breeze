import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { CommonModule } from '@angular/common';
import { FieldsComponent } from './components/fields/fields.component';

@NgModule({
	declarations: [ FieldsComponent ],
	imports: [
		MaterialModule,
		CommonModule,
		ReactiveFormsModule,
		NgxCaptchaModule
	],
	exports: [ FieldsComponent ]
})
export class CoreModule { }
