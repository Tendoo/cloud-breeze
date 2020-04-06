import { NgModule, ModuleWithProviders, Inject } from "@angular/core";
import { TendooSpinnerService } from "./services/tendoo-spinner.service";
import { LoaderService } from "./services/loader.service";
import { TendooUpdateService } from "./services/tendoo-update.service";
import { HelperService } from "./services/helper.service";
import { ResponsiveService } from "./services/responsive.service";
import { SetupService } from "./services/setup.service";
import { TendooAuthService } from "./services/tendoo-auth.service";
import { TendooFieldsService } from "./services/tendoo-fields.service";
import { TendooFormsService } from "./services/tendoo-forms.service";
import { TendooLinkService } from "./services/tendoo-link.service";
import { TendooMediasService } from "./services/tendoo-medias.service";
import { TendooMenusService } from "./services/tendoo-menu.service";
import { TendooModulesService } from "./services/tendoo-modules.service";
import { TendooOauthService } from "./services/tendoo-oauth.service";
import { TendooSettingsService } from "./services/tendoo-settings.service";
import { TendooTableService } from "./services/tendoo-table.service";
import { TendooTabsService } from "./services/tendoo-tabs.service";
import { TendooUsersService } from "./services/tendoo-users.service";
import { TendooService } from "./services/tendoo.service";
import { CookieService } from "ngx-cookie-service";
import { TendooConfigService } from "./services/tendoo-config.service";
import { HttpClientModule } from "@angular/common/http";
import { ConfigOptions, CB_URL_CONFIG } from "./ConfigOptions";

@NgModule({
	imports: [
		HttpClientModule
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
})
export class ServicesModule {
    static forRoot( config ?: ConfigOptions ): ModuleWithProviders<ServicesModule> {
		console.log( config );
        return {
			ngModule: ServicesModule,
			providers: [
				{
					provide: CB_URL_CONFIG,
					useValue: config
				}, 
			]
        }
    }
}