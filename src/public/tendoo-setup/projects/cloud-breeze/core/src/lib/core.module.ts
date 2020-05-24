import { NgModule } from "@angular/core";
import { CrudTableComponent } from "./components/crud-table/crud-table.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { FieldsComponent } from "./components/fields/fields.component";
import { LoadingAnimationComponent } from "./components/loading-animation/loading-animation.component";
import { MenuListComponent } from "./components/menu-list/menu-list.component";
import { SubMenuListComponent } from "./components/sub-menu-list/sub-menu-list.component";
import { MaterialModule } from "./modules/material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgxCaptchaModule } from "ngx-captcha";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ImageCropperModule } from "ngx-image-cropper";
import { RouterModule } from "@angular/router";
import { TruncatePipe } from "./pipes/truncate.pipe";
import { TruncateMiddlePipe } from "./pipes/truncate-middle.pipe";
import { OwlDateTimeModule, OwlNativeDateTimeModule, OwlMomentDateTimeModule, OWL_DATE_TIME_FORMATS } from '@danielmoncada/angular-datetime-picker';

export const MY_MOMENT_FORMATS = {
    parseInput: 'DD/MM/YYYY HH:mm',
    fullPickerInput: 'DD/MM/YYYY HH:mm',
    datePickerInput: 'DD/MM/YYYY',
    timePickerInput: 'HH:mm',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
};

@NgModule({
    declarations: [
        CrudTableComponent,
        DialogComponent,
        FieldsComponent,
        LoadingAnimationComponent,
        MenuListComponent,
        SubMenuListComponent,
        TruncatePipe,
        TruncateMiddlePipe
    ], 
    imports: [
        MaterialModule,
        FlexLayoutModule,
        NgxCaptchaModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ImageCropperModule,
        RouterModule,
        OwlDateTimeModule,
        // OwlNativeDateTimeModule,
        OwlMomentDateTimeModule
    ],
    providers: [
        { provide: OWL_DATE_TIME_FORMATS, useValue: MY_MOMENT_FORMATS },
    ],
    exports: [
        MaterialModule,
        FieldsComponent,
		CrudTableComponent,
		DialogComponent,
		LoadingAnimationComponent,
		MenuListComponent,
		SubMenuListComponent,
    ]
})
export class CoreModule {}