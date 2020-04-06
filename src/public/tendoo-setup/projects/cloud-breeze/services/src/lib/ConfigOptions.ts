import { InjectionToken } from "@angular/core";

export interface ConfigOptions {
	base?: string;
	angular?: string;
}
export const CB_URL_CONFIG = new InjectionToken<ConfigOptions>('CB_URL_CONFIG');
