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
import { TendooMenusService } from './tendoo-menu.service';
import { MatSnackBar } from '@angular/material';
import { TendooMediasService } from './tendoo-medias.service';
import { TendooCrudService } from './tendoo-crud.service';
import { TendooOptionsService } from './tendoo-options.service';
import { Title } from '@angular/platform-browser';
import { TendooLinkService } from './tendoo-link.service';
import { TendooOauthService } from './tendoo-oauth.service';

@Injectable({
    providedIn: 'root'
})
export class TendooService extends LoaderService {
    protected http;
    constructor( 
        http: HttpClient,
        httpParser: HttpResponseParserService,
        snackbar: MatSnackBar,
        public auth: TendooAuthService,
        public fields: TendooFieldsService,
        public modules: TendooModulesService,
        public users: TendooUsersService,
        public tables: TendooTableService,
        public forms: TendooFormsService,
        public tabs: TendooTabsService,
        public menus: TendooMenusService,
        public medias: TendooMediasService,
        public crud: TendooCrudService,
        public links: TendooLinkService,
        public options: TendooOptionsService,
        public oauth: TendooOauthService,
        public title: Title
    ) {
        super( http, httpParser, snackbar );
    }

    dashboardTitle( title: string ) {
        this.title.setTitle( `${title} - Dashboard` );
    }

    /**
     * 
     * @param string title
     */
    setTitle( title: string ) {
        this.title.setTitle( `${title}` );
    }

    /**
     * get angular assets
     * @param string
     * @return string
     */
    getAsset( assetUrl ) {
        return this.angularAssetsUrl + assetUrl;
    }
}
