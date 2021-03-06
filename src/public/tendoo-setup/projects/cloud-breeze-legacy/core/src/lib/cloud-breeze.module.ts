import { LoaderService } from './services/loader.service';
import { TendooConfigService } from './services/tendoo-config.service';
import { TendooService } from './services/tendoo.service';
import { TendooUsersService } from './services/tendoo-users.service';
import { TendooTabsService } from './services/tendoo-tabs.service';
import { TendooTableService } from './services/tendoo-table.service';
import { TendooSettingsService } from './services/tendoo-settings.service';
import { TendooOauthService } from './services/tendoo-oauth.service';
import { TendooModulesService } from './services/tendoo-modules.service';
import { TendooMenusService } from './services/tendoo-menu.service';
import { TendooMediasService } from './services/tendoo-medias.service';
import { TendooLinkService } from './services/tendoo-link.service';
import { TendooFormsService } from './services/tendoo-forms.service';
import { TendooFieldsService } from './services/tendoo-fields.service';
import { TendooAuthService } from './services/tendoo-auth.service';
import { SetupService } from './services/setup.service';
import { ResponsiveService } from './services/responsive.service';
import { HelperService } from './services/helper.service';
import { TendooUpdateService } from './services/tendoo-update.service';
import { NgModule, Self, InjectionToken } from '@angular/core';
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
import { TendooSpinnerService } from './services/tendoo-spinner.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModuleWithProviders } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ImageCropperModule } from 'ngx-image-cropper';
export const CB_URL_CONFIG 	=	new InjectionToken<{
	base: string;
	angular: string;
}>( 'cb-url-config' );

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
		TendooSpinnerService,
		LoaderService,
		TendooUpdateService,
		HelperService,
		ResponsiveService,
		SetupService,
		TendooAuthService,
		TendooFieldsService,
		TendooFormsService,
		TendooLinkService,
		TendooMediasService,
		TendooMenusService,
		TendooModulesService,
		TendooOauthService,
		TendooSettingsService,
		TendooTableService,
		TendooTabsService,
		// TendooUpdateService,
		TendooUsersService,
		TendooService,
		CookieService,
	],
	imports: [
		CommonModule,
		MaterialModule,
		FormsModule,
		ReactiveFormsModule,
		NgxCaptchaModule,
		RouterModule,
		FlexLayoutModule,
		ImageCropperModule,
	],
	exports: [ 
		FlexLayoutModule,
		NgxCaptchaModule,

		FieldsComponent,
		CrudTableComponent,
		DialogComponent,
		LoadingAnimationComponent,
		MenuListComponent,
		SubMenuListComponent,
		TruncatePipe,
		TruncateMiddlePipe,
	]
})
// @dynamic
export class CloudBreezeModule {
	static forRoot( config: { 'base': string; 'angular': string } ): ModuleWithProviders<any> {
		return {
			ngModule: CloudBreezeModule,
			providers: [
				TendooConfigService,
				{
					provide: CB_URL_CONFIG,
					useValue: config
				}
			]
		}
	}
}
