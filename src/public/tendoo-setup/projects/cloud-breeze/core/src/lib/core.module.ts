import { NgModule } from '@angular/core';
import { NgxCaptchaModule } from 'ngx-captcha';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { CommonModule } from '@angular/common';
import { FieldsComponent } from './components/fields/fields.component';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { SubMenuListComponent } from './components/sub-menu-list/sub-menu-list.component';
import { TruncateMiddlePipe } from './pipes/truncate-middle.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { LoadingAnimationComponent } from './components/loading-animation/loading-animation.component';
import { CrudTableComponent } from './components/crud-table/crud-table.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TendooSpinnerService } from './services/tendoo-spinner.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
	entryComponents: [ 
		LoadingAnimationComponent, 
		DialogComponent,
	],
	declarations: [ 
		FieldsComponent, 
		MenuListComponent, 
		SubMenuListComponent,
		TruncateMiddlePipe,
		TruncatePipe,
		LoadingAnimationComponent,
		CrudTableComponent,
		DialogComponent,
	],
	providers: [
		TendooSpinnerService
	],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		NgxCaptchaModule,
		RouterModule,
		BrowserAnimationsModule,
		FlexLayoutModule
	],
	exports: [ 
		MaterialModule, 
		BrowserAnimationsModule,
		FlexLayoutModule,
		NgxCaptchaModule,

		FieldsComponent,
		CrudTableComponent,
		DialogComponent,
		LoadingAnimationComponent,
		MenuListComponent,
		SubMenuListComponent,
	]
})
export class CoreModule { }
