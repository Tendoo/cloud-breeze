import { Injectable } from '@angular/core';
import { LoaderService } from './loader.service';
import { HttpClient } from '@angular/common/http';
import { TendooAuthService } from './tendoo-auth.service';
import { TendooFieldsService } from './tendoo-fields.service';
import { TendooModulesService } from './tendoo-modules.service';
import { TendooUsersService } from './tendoo-users.service';
import { TendooTableService } from './tendoo-table.service';

@Injectable({
    providedIn: 'root'
})
export class TendooService extends LoaderService {
    protected http;
    constructor( 
        http: HttpClient,
        public auth: TendooAuthService,
        public fields: TendooFieldsService,
        public modules: TendooModulesService,
        public users: TendooUsersService,
        public tables: TendooTableService
    ) {
        super( http );
    }
}
