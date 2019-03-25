import { NgModule } from '@angular/core';
import { FieldsComponent } from './components/fields/fields.component';
import { MaterialModule } from './modules/material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

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
export class CloudToolsModule { }
