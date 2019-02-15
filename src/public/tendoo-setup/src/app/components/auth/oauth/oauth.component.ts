import { Component, OnInit } from '@angular/core';
import { TendooService } from 'src/app/services/tendoo.service';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material';
import { AsyncResponse } from 'src/app/interfaces/async-response';

@Component({
    selector: 'app-oauth',
    templateUrl: './oauth.component.html',
    styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {
    
    hasInvalid          =   false;
    isLoading           =   true;
    hasError: boolean   =   false;
    response: any;
    data: any           =   {};

    constructor(
        public tendoo: TendooService,
        public activeRoute: ActivatedRoute,
        private snackbar: MatSnackBar,
    ) { }
    
    ngOnInit() {
        this.tendoo.setTitle( 'Requesting Authorization - Tendoo' );
        this.activeRoute.queryParamMap.subscribe( query => {
            this.data[ 'client_key' ]    =   query.get( 'client_key' );
            this.data[ 'scopes' ]        =   query.get( 'scopes' ).split( ',' );
            this.data[ 'forward' ]       =   query.get( 'forward' );

            this.hasInvalid    =   Object.values( this.data ).filter( value => {
                return value === null;
            }).length > 0;

            const { id, scopes, forward }   =   <any>this.data;

            this.tendoo.oauth.authenticateApplication( this.data ).subscribe( result => {
                this.isLoading  =   false;
                this.hasError   =   false;
                this.response   =   result;
            }, ( result: HttpErrorResponse ) => {
                this.isLoading  =   false;
                this.hasError   =   true;
                this.response   =   result.error
            })
        })
    }

    /**
     * the request has just simply rejected
     */
    denyRequest() {
        window.location.href    =   this.data.forward + '?statut=denied';
    }

    /**
     * send a request to the server
     */
    grantRequest() {
        this.tendoo.oauth.grantRequest( this.response ).subscribe( (response: AsyncResponse ) => {
            this.snackbar.open( response.message );
            setTimeout( () => {
                window.location.href    =   response.data[ 'forward' ];
            }, 1000 );
        }, ( result: HttpErrorResponse ) => {
            this.snackbar.open( result.error.message || 'Unexpected error occured', 'OK' );
        })
    }
    
    get itsOkay() {
        return ! this.hasInvalid && 
            this.hasInvalid !== undefined && 
            ! this.isLoading && 
            ! this.hasError
    }
}
