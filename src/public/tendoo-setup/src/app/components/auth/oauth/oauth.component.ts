import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-oauth',
    templateUrl: './oauth.component.html',
    styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {
    
    hasInvalid     =   false;

    constructor(
        public tendoo: TendooService,
        public activeRoute: ActivatedRoute
    ) { }
    
    ngOnInit() {
        this.activeRoute.queryParamMap.subscribe( query => {
            const data          =   {};
            data[ 'id' ]        =   query.get( 'id' );
            data[ 'scopes' ]    =   query.get( 'scopes' );
            data[ 'forward' ]   =   query.get( 'forward' );

            this.hasInvalid    =   Object.values( data ).filter( value => {
                return value === null;
            }).length > 0;

            const { id, scopes, forward }   =   <any>data;

            this.tendoo.oauth.authenticateApplication( data ).subscribe( result => {
                
            })
        })
    }
    
}
