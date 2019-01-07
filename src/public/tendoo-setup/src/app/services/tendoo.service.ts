import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { HttpClient } from '@angular/common/http';
import { TendooAuthService } from './tendoo-auth.service';
import { TendooFieldsService } from './tendoo-fields.service';
import { TendooModulesService } from './tendoo-modules.service';
import { TendooUsersService } from './tendoo-users.service';
import { TendooTableService } from './tendoo-table.service';
import { TendooFormsService } from './tendoo-forms.service';
import { HttpResponseParserService } from './http-response-parser.service';
import { TendooTabsService } from './tendoo-tabs.service';

@Injectable({
    providedIn: 'root'
})
export class TendooService extends LoaderService {
    protected http;
    constructor( 
        http: HttpClient,
        httpParser: HttpResponseParserService,
        public auth: TendooAuthService,
        public fields: TendooFieldsService,
        public modules: TendooModulesService,
        public users: TendooUsersService,
        public tables: TendooTableService,
        public forms: TendooFormsService,
        public tabs: TendooTabsService,
    ) {
        super( http, httpParser );
    }
}
