import { NgModule, ModuleWithProviders, Inject } from "@angular/core";
import { TendooService } from "./services/tendoo.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ConfigOptions, CB_URL_CONFIG } from "./ConfigOptions";
import { Interceptor } from "./classes/interceptor.class";

@NgModule({
	imports: [
		HttpClientModule
	],
    providers: [
		TendooService,
		// {
		// 	provide: HTTP_INTERCEPTORS,
		// 	useClass: Interceptor,
		// 	multi: true
		// }
    ], 
}) 
export class ServicesModule {
    static forRoot( config ?: ConfigOptions ): ModuleWithProviders<ServicesModule> {
        return {
			ngModule: ServicesModule,
			providers: [
				{
					provide: CB_URL_CONFIG,
					useValue: config
				}
			]
        }
    }
}